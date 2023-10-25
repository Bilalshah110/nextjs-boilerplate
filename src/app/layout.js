import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/globalComponents/Providers";
import { NavBar } from "@/components/globalComponents/NavBar";
import { Footer } from "@/components/globalComponents/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Next App BoilerPlate",
  description: "Made By bilal Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-950 dark:text-gray-100`}
      >
        <Suspense fallback={<Loading />}>
          <Providers>
            <nav className="mb-[72px]">
              <NavBar />
            </nav>
            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
