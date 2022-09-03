import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-cJQlZyo34SkQddPnQ9Jr-EttOFT8UgE",
  authDomain: "cryptocurrency-project-b4951.firebaseapp.com",
  projectId: "cryptocurrency-project-b4951",
  storageBucket: "cryptocurrency-project-b4951.appspot.com",
  messagingSenderId: "816062721574",
  appId: "1:816062721574:web:15a07d489a7bacc41f40e7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)


