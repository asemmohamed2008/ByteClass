// استيراد مكتبات Firebase عبر CDN (توضع في الهيد أو قبل نهاية البودي لكل الصفحات)
// ملاحظة: هنستخدم النسخة المتوافقة مع وحدات الويب الحديثة (Modular SDK)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// إعدادات مشروعك
const firebaseConfig = {
    apiKey: "حط_الـ_API_Key_بتاعك_هنا",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// تهيئة المشروع
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, query, where, setDoc, doc, getDoc, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };