import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import { Background } from "../components/Background";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LandingLayout({
  children,
}:any) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
