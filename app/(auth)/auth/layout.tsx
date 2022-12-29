import "../../../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="bg-[#f5f5f5]">{children}</body>
    </html>
  );
}
