import type { Metadata } from "next";
// import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

 import "./globals.css";

// // Load local fonts
// const geistSans = localFont({
//   src: [
//     {
//       path: "/fonts/GeistVF.woff",  // Correct font path
//       weight: "100 900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-geist-sans",
// });

// const geistMono = localFont({
//   src: [
//     {
//       path: "/fonts/GeistMonoVF.woff",  // Correct font path
//       weight: "100 900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-geist-mono",
// });

// Metadata for the app
export const metadata: Metadata = {
  title: "Blog App",
  description: "Developed by Anila Waqar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#E8E1B1] dark:bg-slate-800 text-gray-900 dark:text-slate-50 `}
      >
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content area */}
        <main className="max-w-4xl mx-auto p-6 min-h-screen">{children}</main>
        
        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}

function localFont(arg0: { src: string; variable: string; weight: string; }) {
  throw new Error("Function not implemented.");
}
