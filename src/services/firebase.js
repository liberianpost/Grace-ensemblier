import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4iqmk8MPIYVd6y6fLZC4Nu_ikRIA-rvU",
  authDomain: "grace-ensemblier.firebaseapp.com",
  projectId: "grace-ensemblier",
  storageBucket: "grace-ensemblier.firebasestorage.app",
  messagingSenderId: "1002627497423",
  appId: "1:1002627497423:web:5cf248604e667d9f01a6ba",
  measurementId: "G-T6G559XYYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
