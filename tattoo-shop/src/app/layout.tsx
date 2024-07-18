import type { Metadata } from "next";
import { Inter, Londrina_Solid } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const londrina = Londrina_Solid({
  weight: "100",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattoo Shop",
  description: "Desafio Codate.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " mx-16"}>


        <Header />
        {children}

        <Footer />

      </body>
    </html>
  );
}
