// Firebase CDN se imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ✅ Tumhara Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD92frz37hrVxgDtPVHnh_x9lMpYZhjxkA",
  authDomain: "my-portfolio-a634f.firebaseapp.com",
  projectId: "my-portfolio-a634f",
  storageBucket: "my-portfolio-a634f.firebasestorage.app",
  messagingSenderId: "800825516478",
  appId: "1:800825516478:web:472d424e30df4271c859ef",
  measurementId: "G-1F75TFLP9R"
};

// ✅ Firebase initialize
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// ✅ Message save karne ka function
export async function saveMessage(name, email, phone, subject, message) {
  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
      timestamp: new Date() // ⏱ save time for record
    });
    alert("Thanks For Contacting Me! I will get back to you soon.");
  } catch (error) {
    console.error("Try again plzzz ", error);
    alert("Failed to Contact. Please try again.");
  }
}
