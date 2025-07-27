// app/services/Authentication.ts
// This file is responsible for Firebase authentication services.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Export the auth object for use in other parts of the application
export { auth };
// You can also export the app if needed
export { app };

/**
 * Gets the current authenticated user.
 * @returns User | null - The current user or null if not authenticated.
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Checks if a user is currently signed in.
 * @returns boolean - True if user is signed in, false otherwise.
 */
export const isUserSignedIn = () => {
  return auth.currentUser !== null;
};

/**
 * Logs in a user with email and password.
 * @param email - The email of the user.
 * @param password - The password of the user.
 * @returns Promise<User> - The authenticated user object.
 */
export const fireSignIn = async (email, password) => {
  try {
    // Validate input
    if (!email?.trim() || !password?.trim()) {
      throw new Error(`Email and password are required`);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      throw new Error("Please enter a valid email address");
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password.trim()
    );

    const user = userCredential.user;
    console.log("User signed in successfully:", user.uid);
    return user;
  } catch (error) {
    console.error("Error signing in:", error.message);

    // Provide more user-friendly error messages
    if (error.code === "auth/user-not-found") {
      throw new Error("No account found with this email address");
    } else if (error.code === "auth/wrong-password") {
      throw new Error("Incorrect password");
    } else if (error.code === "auth/invalid-email") {
      throw new Error("Invalid email address");
    } else if (error.code === "auth/too-many-requests") {
      throw new Error("Too many failed attempts. Please try again later");
    }

    throw new Error(`Login failed: ${error.message}`);
  }
};

/**
 * Signs up a new user with email and password.
 * @param email - The email of the user to sign up.
 * @param password - The password of the user to sign up.
 * @returns Promise<User> - The newly created user object.
 */
export const fireSignUp = async (email, password) => {
  try {
    // Validate input
    if (!email?.trim() || !password?.trim()) {
      throw new Error("Email and password are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      throw new Error("Please enter a valid email address");
    }

    // Validate password strength
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password.trim()
    );

    const user = userCredential.user;
    console.log("User signed up successfully:", user.uid);
    return user;
  } catch (error) {
    console.error("Error signing up:", error.message);

    // Provide more user-friendly error messages
    if (error.code === "auth/email-already-in-use") {
      throw new Error("An account with this email already exists");
    } else if (error.code === "auth/invalid-email") {
      throw new Error("Invalid email address");
    } else if (error.code === "auth/weak-password") {
      throw new Error(
        "Password is too weak. Please choose a stronger password"
      );
    }

    throw new Error(`Sign up failed: ${error.message}`);
  }
};

/**
 * Logs out the current user.
 */
export const fireLogout = async () => {
  try {
    // Check if user is signed in
    if (!auth.currentUser) {
      throw new Error("No user is currently signed in");
    }

    // Sign out the user
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error.message);
    throw new Error(`Logout failed: ${error.message}`);
  }
};
