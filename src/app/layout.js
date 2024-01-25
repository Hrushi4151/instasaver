import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InstaSaver | Download Instagram Reels, Photo, Story - InstaSaver",
  description:
    "Instagram Downloader | Download Instagram Video, Photo, Story - InstaSaver",
  icon: "/logo.jpg",
};

export default function RootLayout({ children }) {
  let schemadata = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: "InstaSvaer",
    url: "https://insta-saver.vercel.app/",
    icon:"/logo.jpg"
  };
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo.jpg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta name="google-adsense-account" content="ca-pub-8683978034260199"></meta>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemadata) }}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8683978034260199"
     crossorigin="anonymous"></script>
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
