import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebaseauth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                auth.collection("admin")
                    .doc(`${email}`)
                    .set({
                        email: email,
                        password: password,
                        user: user,
                    })
                    .catch((error) => {
                        throw new Error("Error writing document: ", error);
                    });
            });
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then((user) => {
            console.log("Sucess");
      });
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
