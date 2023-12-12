import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


export const firebaseConfig = {

  apiKey: "AIzaSyD0WX2HH4lK8ttF7JFylj79PBjngdwu-1w",

  authDomain: "citycruise-c3386.firebaseapp.com",

  projectId: "citycruise-c3386",

  storageBucket: "citycruise-c3386.appspot.com",

  messagingSenderId: "576518169330",

  appId: "1:576518169330:web:cbdae08ef8e0ebbfbde66b",

  measurementId: "G-SNBE6YXEQR"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);