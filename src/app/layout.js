import "./globals.css";
import { figtree } from "@/auxiliary/fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body className="bg-desing-yellow w-screen h-screen flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
