import "../../styles/globals.css";
import { Inter } from "@next/font/google";
import { Navbar } from "../../components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#f5f5f5]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
