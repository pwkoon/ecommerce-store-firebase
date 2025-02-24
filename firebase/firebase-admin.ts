import admin from "firebase-admin";
// import serviceAccount from "../serviceAccountKey.json";

// Define the type of the service account
// const serviceAccountTyped = serviceAccount as admin.ServiceAccount;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"), // Ensure newlines are handled properly
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
}

export const firestore = admin.firestore(); // Export Firestore instance
export { admin };
