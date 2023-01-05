import { Footer, VendorNav } from "../../../../components";
import "../../../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#f5f5f5]">
        <VendorNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
