import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDp9_vc7elcvddnpLMOKTvUkroky1P_r-o",
  authDomain: "reel-workout.firebaseapp.com",
  projectId: "reel-workout",
  storageBucket: "reel-workout.firebasestorage.app",
  messagingSenderId: "344507500229",
  appId: "1:344507500229:web:c86df3bd8d51fcda4652ac",
  measurementId: "G-DGEFZ6GZDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app; 