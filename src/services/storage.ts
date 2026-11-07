import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFirebaseStorage } from "@/config/firebase";

export async function uploadFile(path: string, file: File): Promise<string> {
  const storage = getFirebaseStorage();
  const result = await uploadBytes(ref(storage, path), file, {
    contentType: file.type || undefined,
  });
  return getDownloadURL(result.ref);
}
