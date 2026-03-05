import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ab Almasri | Embedded Systems & Software",
  description: "Portfolio of Abdulelah 'Ab' Almasri, Computer Engineering (Robotics) student at Boston University. Embedded systems, hardware-software integration, software development.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-accent text-black px-3 py-2 rounded font-mono text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
