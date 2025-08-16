"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase"; // jo firebase.js banayi thi usme se auth import
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful ✅");
      router.push("/login"); // signup ke baad login page par redirect
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
