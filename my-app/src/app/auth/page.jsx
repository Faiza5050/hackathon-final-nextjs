"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        <input className="w-full p-2 mb-2 border rounded" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p className="mt-3 text-sm text-center cursor-pointer text-blue-500" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create account" : "Already have an account?"}
        </p>
      </form>
    </div>
  );
}
