import { getApp, getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const requiredConfig: Array<keyof FirebaseOptions> = [
  "apiKey",
  "authDomain",
  "projectId",
  "appId",
];

function getFirebaseApp() {
  const missing = requiredConfig.filter((key) => !firebaseConfig[key]);
  if (missing.length > 0) {
    throw new Error(
      `Firebase is not configured. Add ${missing
        .map((key) => `VITE_FIREBASE_${key.replace(/[A-Z]/g, (letter) => `_${letter}`).toUpperCase()}`)
        .join(", ")} to the project-root .env.local file.`,
    );
  }

  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

export function getFirebaseServices() {
  const app = getFirebaseApp();
  return {
    app,
    auth: getAuth(app),
    db: getFirestore(app),
  };
}

export function getFirebaseStorage() {
  if (!firebaseConfig.storageBucket) {
    throw new Error("Firebase Storage is not configured. Set VITE_FIREBASE_STORAGE_BUCKET in .env.local.");
  }

  return getStorage(getFirebaseApp());
}


