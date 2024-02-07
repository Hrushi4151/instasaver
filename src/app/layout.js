import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaveIG | Download Instagram Reels, Photo, Story - SaveIG",
  description:
    "Instagram Downloader | Download Instagram Video, Photo, Story - SaveIG",
  icon: "/logo.jpg",
};

export default function RootLayout({ children }) {
  let schemadata = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: "SaveIG",
    url: "https://saveig51.vercel.app/",
    icon:"/favicon-16x16.png"
  }
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon-16x16.png"
        type="image/<generated>"
        sizes="<generated>"
      />
    <meta name="google-adsense-account" content="ca-pub-8683978034260199">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={__html: JSON.stringify(schemadata) }/>
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
