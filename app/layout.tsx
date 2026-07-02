import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Paratha Ghar Ka | Fresh Homemade Parathas",
  description:
    "Order fresh homemade parathas, Maggi and snacks. First order gets 35% OFF. Fast delivery near KES College.",
  keywords: [
    "Paratha",
    "Homemade Food",
    "Maggi",
    "KES College",
    "Food Delivery",
    "Paratha Ghar Ka",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}