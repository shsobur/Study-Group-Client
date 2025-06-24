// File path__
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

// Package__
import {
  signOut,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// From react__
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  // Sign in using Google popup authentication__
  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.error("Error google signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  // Create user with email and password__
  const handleCreateUser = async (email, password) => {
    setLoading(true);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in existing user with email and password__
  const handleLoginUser = async (email, password) => {
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update current user's display name and photo URL__
  const handleUserProfile = async (name, photo) => {
    setLoading(true);

    try {
      const result = await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      return result;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out the current user__
  const logOut = () => {
    return signOut(auth);
  };

  // Monitor auth state changes (login/logout)__
  useEffect(() => {
    setUserLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userEmail = { email: currentUser.email };

        axiosPublic.post("/jwt", userEmail, {withCredentials: true}).then(() => {
        });
      }

      setUserLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    userLoading,
    handleCreateUser,
    handleLoginUser,
    handleGoogleSignIn,
    handleUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;
