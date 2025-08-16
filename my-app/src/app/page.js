"use client";
import { hijabStyles } from "@/lib/styles";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {hijabStyles.map((style) => (
        <Link
          key={style.id}
          href={`/style/${style.id}`}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300 block"
        >
          <div className="relative w-full h-96">
            <Image
              src={style.image}
              alt={style.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {style.name}
            </h2>
            <p className="text-gray-600 mt-1 text-sm">{style.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
