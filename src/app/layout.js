import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InstaSaver | Download Instagram Reels, Photo, Story - InstaSaver",
  description: "Instagram Downloader | Download Instagram Video, Photo, Story - InstaSaver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
