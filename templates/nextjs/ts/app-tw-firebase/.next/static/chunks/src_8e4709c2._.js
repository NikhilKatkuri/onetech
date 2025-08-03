(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/firebase.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/lib/firebase.tsx
// This file is responsible for Firebase authentication services.
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "app": ()=>app,
    "auth": ()=>auth,
    "fireLogout": ()=>fireLogout,
    "fireSignIn": ()=>fireSignIn,
    "fireSignUp": ()=>fireSignUp,
    "getCurrentUser": ()=>getCurrentUser,
    "isUserSignedIn": ()=>isUserSignedIn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export ab as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export D as signOut>");
;
;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "your_api_key_here"),
    authDomain: ("TURBOPACK compile-time value", "your_project_id.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "your_project_id"),
    storageBucket: ("TURBOPACK compile-time value", "your_project_id.appspot.com"),
    messagingSenderId: ("TURBOPACK compile-time value", "your_sender_id"),
    appId: ("TURBOPACK compile-time value", "your_app_id")
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
;
;
const getCurrentUser = ()=>{
    return auth.currentUser;
};
const isUserSignedIn = ()=>{
    return auth.currentUser !== null;
};
const fireSignIn = async (email, password)=>{
    try {
        // Validate input
        if (!(email === null || email === void 0 ? void 0 : email.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
            throw new Error("Email and password are required");
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            throw new Error("Please enter a valid email address");
        }
        const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(auth, email.trim(), password.trim());
        const user = userCredential.user;
        console.log("User signed in successfully:", user.uid);
        return user;
    } catch (error) {
        const err = error;
        console.error("Error signing in:", err.message);
        // Provide more user-friendly error messages
        if (err.code === "auth/user-not-found") {
            throw new Error("No account found with this email address");
        } else if (err.code === "auth/wrong-password") {
            throw new Error("Incorrect password");
        } else if (err.code === "auth/invalid-email") {
            throw new Error("Invalid email address");
        } else if (err.code === "auth/too-many-requests") {
            throw new Error("Too many failed attempts. Please try again later");
        }
        throw new Error("Login failed: ".concat(err.message));
    }
};
const fireSignUp = async (email, password)=>{
    try {
        // Validate input
        if (!(email === null || email === void 0 ? void 0 : email.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
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
        const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(auth, email.trim(), password.trim());
        const user = userCredential.user;
        console.log("User signed up successfully:", user.uid);
        return user;
    } catch (error) {
        const err = error;
        console.error("Error signing in:", err.message);
        // Provide more user-friendly error messages
        if (err.code === "auth/user-not-found") {
            throw new Error("No account found with this email address");
        } else if (err.code === "auth/wrong-password") {
            throw new Error("Incorrect password");
        } else if (err.code === "auth/invalid-email") {
            throw new Error("Invalid email address");
        } else if (err.code === "auth/too-many-requests") {
            throw new Error("Too many failed attempts. Please try again later");
        }
        throw new Error("Login failed: ".concat(err.message));
    }
};
const fireLogout = async ()=>{
    try {
        // Check if user is signed in
        if (!auth.currentUser) {
            throw new Error("No user is currently signed in");
        }
        // Sign out the user
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(auth);
        console.log("User signed out successfully");
    } catch (error) {
        const err = error;
        console.error("Error signing out:", err.message);
        throw new Error("Logout failed: ".concat(err.message));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/FirebaseContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FireBaseProvider": ()=>FireBaseProvider,
    "useFireBase": ()=>useFireBase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const FireBaseContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FireBaseProvider = (param)=>{
    let { children } = param;
    var _process_env_NEXT_DEV;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isProduction = ((_process_env_NEXT_DEV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_DEV) === null || _process_env_NEXT_DEV === void 0 ? void 0 : _process_env_NEXT_DEV.toString()) !== "development";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FireBaseProvider.useEffect": ()=>{
            if (isProduction) {
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                    "FireBaseProvider.useEffect.unsub": (user)=>{
                        if (user) {
                            console.log("User is signed in:", user);
                            setUser(user);
                        } else {
                            console.log("No user is signed in");
                            setUser(null);
                        }
                    }
                }["FireBaseProvider.useEffect.unsub"]);
                return ({
                    "FireBaseProvider.useEffect": ()=>unsub()
                })["FireBaseProvider.useEffect"];
            }
        }
    }["FireBaseProvider.useEffect"], [
        isProduction
    ]);
    // // Debugging: Log user state changes
    // useEffect(() => {
    //   console.log("User state changed:", user);
    // }, [user]);
    // // Debugging: Log auth object
    // useEffect(() => {
    //   console.log("Auth object:", auth);
    // }, []);
    // // Debugging: Log auth state listener
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FireBaseContext.Provider, {
        value: {
            user
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/FirebaseContext.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FireBaseProvider, "5s2qRsV95gTJBmaaTh11GoxYeGE=");
_c = FireBaseProvider;
const useFireBase = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FireBaseContext);
    if (!context) throw new Error("useFireBase must be used within FireBaseProvider");
    return context;
};
_s1(useFireBase, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "FireBaseProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_8e4709c2._.js.map