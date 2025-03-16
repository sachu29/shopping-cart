import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { WishlistProvider } from "@/context/WishListContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My E-Commerce App",
  description: "The best online shopping experience",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </WishlistProvider>
      </body>
    </html>
  );
}
