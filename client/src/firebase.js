import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import the Auth service
import { getFirestore } from 'firebase/firestore'; // Import the Firestore service

// PASTE YOUR FIREBASE CONFIG OBJECT HERE
const firebaseConfig = {
  apiKey: "AIzaSyCFR5anpQ49VNXlcgFk9mcn4PLRjrz4o",
  authDomain: "carbon-footprint-tracker-bb8d3.firebaseapp.com",
  projectId: "carbon-footprint-tracker-bb8d3",
  storageBucket: "carbon-footprint-tracker-bb8d3.firebaseapp.com",
  messagingSenderId: "758572160782",
  appId: "1:758572160782:web:93ec134fee375528a9695f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services and export them
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };