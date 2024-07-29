import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ong de gatinho",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
