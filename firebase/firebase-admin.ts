import admin from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json";

// Define the type of the service account
const serviceAccountTyped = serviceAccount as admin.ServiceAccount;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountTyped),
  });
}

export const firestore = admin.firestore(); // Export Firestore instance
export { admin };
