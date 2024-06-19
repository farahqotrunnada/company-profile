import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Innovators Inc Company",
  description: "Tech Innovators Inc. has been at the forefront of technological advancements for over 20 years. Our mission is to drive innovation and deliver high-quality solutions that meet the evolving needs of our clients. We are committed to excellence in every aspect of our business, from product development to customer service. Our diverse team of experts works collaboratively to create products that not only solve today's problems but also anticipate future challenges. products: SmartHome Automation System; EcoDrive Electric Vehicle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
