import type { Metadata } from "next";
// import "./globals.css"; // We'll keep this import but ensure the file is updated.
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Physical AI & Humanoid Robotics",
  description: "Advanced textbook and AI resources for the next generation of robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
