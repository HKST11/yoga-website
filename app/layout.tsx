import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prāṇa Shakti Wellness & Meditation Center",
  description: "A peaceful sanctuary for yoga and meditation led by Yogacharya Kundan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-yoga-light min-h-screen">
        {children}
      </body>
    </html>
  );
}
