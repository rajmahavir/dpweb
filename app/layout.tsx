import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design Pundit - We Design Your Brand's Future",
  description: "Leading Digital Marketing & Design Agency. 500+ Clients, 1800+ Projects, 14+ Years Experience. Services: Web Design, SEO, Digital Marketing, Social Media & More.",
  keywords: "digital marketing, web design, SEO, social media marketing, branding agency, Gurgaon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
