"use client";
import { hijabStyles } from "@/lib/styles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2">
      {hijabStyles.map((style) => (
        <Link href={`/style/${style.id}`} key={style.id}>
          <div className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg">
            <img src={style.image} alt={style.name} className="rounded-lg h-48 w-full object-cover" />
            <h2 className="text-xl font-bold mt-2">{style.name}</h2>
            <p className="text-gray-600">{style.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
