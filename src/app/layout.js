import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SoundProvider } from "@/context/SoundContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({                                                                                                                            
  variable: "--font-ibm-plex-mono",                                                                                                                            
  subsets: ["latin"],                                                                                                                                          
  weight: ["100", "200", "300", "400", "500", "600", "700"],                                                                                                   
});

export const metadata = {
  title: "Jakob Dubeau",
  description: "Jakob Dubeau's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} antialiased`}>
        <SoundProvider>
          <main className="flex justify-center h-screen selection:bg-indigo-300 bg-black font-mono">
            <div className="flex flex-col gap-4 w-full md:max-w-150 m-6 md:m-20 md:mt-16">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </SoundProvider>
      </body>
    </html>
  );
}
