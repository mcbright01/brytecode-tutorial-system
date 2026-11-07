import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User as FirebaseUser,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getFirebaseServices } from "@/config/firebase";
import type { User } from "@/types";

export interface RegisterStudentInput {
  name: string;
  email: string;
  password: string;
}

export async function registerStudent({ name, email, password }: RegisterStudentInput) {
  const { auth, db } = getFirebaseServices();
  const credential = await createUserWithEmailAndPassword(auth, email, password);

  try {
    await updateProfile(credential.user, { displayName: name });
    await setDoc(doc(db, "users", credential.user.uid), {
      name,
      email: credential.user.email,
      role: "student",
      phone: "",
      status: "active",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
  } catch (error) {
    await deleteUser(credential.user).catch(() => undefined);
    throw error;
  }

  return credential.user;
}

export async function signInUser(email: string, password: string) {
  const { auth, db } = getFirebaseServices();
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const profileSnapshot = await getDoc(doc(db, "users", credential.user.uid));

  if (!profileSnapshot.exists()) {
    await signOut(auth);
    throw new Error("Your account profile could not be found. Please contact support.");
  }

  const profile = {
    id: profileSnapshot.id,
    ...profileSnapshot.data(),
  } as User;

  if (profile.role !== "student" && profile.role !== "tutor") {
    await signOut(auth);
    throw new Error("Your account has an invalid role. Please contact support.");
  }

  return { authUser: credential.user, profile };
}

export async function signOutUser() {
  const { auth } = getFirebaseServices();
  await signOut(auth);
}

export async function requestPasswordReset(email: string) {
  const { auth } = getFirebaseServices();
  await sendPasswordResetEmail(auth, email);
}

export function getAuthErrorMessage(error: unknown): string {
  if (!(error instanceof FirebaseError)) {
    return error instanceof Error ? error.message : "Something went wrong. Please try again.";
  }

  const messages: Record<string, string> = {
    "auth/email-already-in-use": "An account with this email already exists.",
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/weak-password": "Choose a stronger password (at least 6 characters).",
    "auth/too-many-requests": "Too many attempts. Please wait and try again.",
    "auth/network-request-failed": "Network error. Check your connection and try again.",
    "auth/operation-not-allowed": "Email and password sign-in is not enabled in Firebase.",
    "permission-denied": "Firebase denied access. Check your Firestore security rules.",
  };

  return messages[error.code] ?? "Unable to complete the request. Please try again.";
}

export type { FirebaseUser };
