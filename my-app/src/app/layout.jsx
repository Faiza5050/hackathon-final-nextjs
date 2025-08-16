import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Hijab Gallery",
  description: "View hijab styles & post reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <AuthProvider>
          <Navbar />
          <main className="p-6 max-w-4xl mx-auto">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
