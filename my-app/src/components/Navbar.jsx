"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-pink-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <Link href="/" className="text-xl font-bold">
        🧕 Hijab Gallery
      </Link>

      <div className="flex justify-center space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/signup" className="bg-white text-pink-600 px-3 py-1 rounded hover:bg-gray-100">
          Signup
        </Link>
      </div>
    </nav>
  );
}
