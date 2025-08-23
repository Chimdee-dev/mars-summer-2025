// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, signInWithGoogle } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Хэрэглэгчийн бүртгэл үүсгэх
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Хэрэглэгчийн нэвтрэх (Email/Password)
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Хэрэглэгчийн гарах
    const logout = () => {
        return signOut(auth);
    };
    // Хэрэглэгчийн нэвтрэх (Google Account)
    const loginWithGoogle = () => {
        return signInWithGoogle();
    };

    // Хэрэглэгчийн нэвтэрсэн эсэхийг ажиглах
    // Энэ нь аппликейшнийг ачаалахад нэг удаа ажиллана.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        loginWithGoogle
    };

    // Firebase-ийн нэвтрэх төлөвийг шалгаж дуустал
    // "Loading..." гэсэн UI-г харуулна.
    if (loading) {
        return <div>Loading...</div>;
    }

    // Loading дууссаны дараа AuthContext-ийг рендер хийж
    // бүх хүүхэд компонент руу хэрэглэгчийн мэдээллийг дамжуулна.
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};