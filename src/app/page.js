"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [url, seturl] = useState("");
  const [durl, setdurl] = useState("");
  const [disabled, setdisabled] = useState("");
  let token = "";

  const handlechange = (e) => {
    e.preventDefault();
    seturl(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setdisabled("disabled");
    if (url) {
      if (url.startsWith("https://www.instagram.com")) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/gettoken`, {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: url }),
        });
        const response = await res.json();
        console.log(response.response);
        if (response.response.data) {
          let str = response.response.data;
          str.replace(/\\u003C/g, "<")
            .replace(/\\u003E/g, ">")
            .replace(/\\u0022/g, '"');

          var tempDiv = document.createElement("div");

          //Set the innerHTML of the div with your HTML string
          tempDiv.innerHTML = str;

          // Get the anchor tag by its ID or any other selector
          var myLink = tempDiv.getElementsByClassName(
            "abutton is-success is-fullwidth  btn-premium mt-3"
          )[0];

          // Access the href property
          var hrefValue = myLink.href;
          setdurl(myLink.href)

        } else {
          setdisabled("");
          seturl("");
          toast.error("Invalid URL. Try Again", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } else {
        setdisabled("");
        seturl("");
        toast.error("Invalid URL. Try Again", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setdisabled("");
      seturl("");
      toast.error("Enter URL", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const dinwloadvideo = () => {
    setTimeout(() => window.open(durl, "_blank"), 900);
    seturl("");
    token = "";
  };

  return (
    <>
      <div className="w-[95vw] md:w-[80vw] mx-auto flex min-h-screen  flex-col  px-6  lg:px-8 items-center">
        <div className="sm:mx-auto w-fit">
          <div className="flex justify-center items-center flex-col mt-10 mb-20">
            <h1 className="text-center text-3xl font-bold text-blue-700">
              Free Instagram Downloader
            </h1>
            <h2 className="text-center font-bold text-lg">
              Download videos, reels, photos, stories and IGTV from Instagram
            </h2>
          </div>
          {!durl && (
            <form className="space-y-6 " action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  URL
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => handlechange(e)}
                    value={url}
                    id="url"
                    name="url"
                    type="text"
                    autoComplete="url"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 text-xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={(e) => handlesubmit(e)}
                  type="submit"
                  disabled={disabled}
                  className=" flex disabled:bg-gray-400 cursor-pointer w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {disabled == "" ? "Download" : "Loading"}
                </button>
              </div>
              <div
                className="text-center text-xl rounded-lg text-white underline border p-4"
                role="alert"
              >
                💡💡{" "}
                <Link href={"/how-to-download-instagram-video"}>
                  How to download Instagram video
                </Link>
              </div>
            </form>
          )}
          {durl && (
            <div className="flex w-fit justify-center items-center mx-auto">
              <div className="h-auto w-auto">
                <video
                  onClick={() => alert("fgfgfg")}
                  className="w-[250px] h-[400px] object-cover"
                  src={durl && durl}
                />

                <button
                  onClick={dinwloadvideo}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 my-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-indigo-600"
                >
                  Download Video
                </button>
                <button
                  onClick={() => {
                    setdurl("");
                    setdisabled("");
                    seturl("");
                  }}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 my-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-indigo-600"
                >
                  Download Other Video
                </button>
              </div>
            </div>
          )}
        </div>
        <div class="ig-section">
          <h2 class=" my-4 font-bold text-2xl">
            What is Instagram Downloader?
          </h2>
          <p className="text-lg py-2">
            Instagram Downloader is a tool to download videos, photos, reels,
            stories and IGTV from Instagram online. Support download
            high-quality Instagram video in a few simple steps.
          </p>
          <p className="text-lg py-2">
            <b>SaveIG</b> is developed with the purpose of allow users to
            download Instagram content (Videos, Photos, Reels, Stories, IGTV)
            quickly. Just paste the Instagram link into the SaveIG input box to
            download any IG content.
          </p>
          <p className="text-lg py-2">
            Allow download video Instagram high quality Full HD, 2K, 4K, 8K.
            Support download photos, videos, reels, stories and IGTV from
            Instagram on phones, computers without install software.
          </p>
        </div>
        <div class="ig-section ig-gr-content">
          <h2 class=" my-4 font-bold text-2xl">
            SaveIG - Best Instagram Downloader 2024
          </h2>
          <p className="text-lg py-2">
            <b>What is SaveIG?</b> SaveIG is an Instagram downloader that allows
            to download photos, videos, stories, Instagram Reels and IGTV from
            Instagram in high quality. Just go to SaveIG and follow the
            instructions to download anything on IG in a few easy steps.
          </p>
          <p className="text-lg py-2">
            SaveIG is a tool to download Instagram content on a web browser,
            no software installation required. Although born later than other
            Instagram downloaders, SaveIG has many outstanding features, helping
            users to download all data on Instagram quickly.
          </p>
          <h3 class=" my-4 font-bold text-xl">Key features</h3>
          <ul class=" list-disc pl-8">
            <li>
              <a target="_blank" href="/en">
                <b>Instagram Video Downloader</b>
              </a>
              : Support download Instagram videos in high quality: Full HD,
              1080p, 2K, 4K, 8K with sound.
            </li>
            <li>
              <p>
                <b>&lrm;Instagram Photo Downloader</b>
              </p>
              : Support download Instagram photos from posts easily, this
              feature allows you to choose the quality and size of images before
              saving Instagram photos to the device.
            </li>
            <li>
              <p>
                <b>Reels Downloader</b>
              </p>
              : This feature allows download Instagram Reels videos in HD
              quality with sound. Support download Instagram Reels on PC,
              iPhone, Android.
            </li>
            <li>
              <p>
                <b>Story Downloader</b>
              </p>
              : Download Instagram Story or Highlights in high quality, you can
              download Instagram Stories by username or link in 1080p.
            </li>
            <li>
              <p>
                <b>IGTV Downloader</b>
              </p>
              : IGTV is Instagram long time video, this feature allows you to
              download IGTV video from Instagram in high quality: 1080p, 2K, 4K,
              8K without install software.
            </li>
            <li>
              <p>
                <b>Private Downloader</b>
              </p>
              : Allow to download Instagram post content from private account
              without any restrictions, download Videos, Photos, Insta Reels,
              Story and IGTV from private Instagram account for free.
            </li>
          </ul>
        </div>
        <div class="ig-section guide-area ig-gr-content">
          <h2 class=" my-4 font-bold text-xl">
            How to download Instagram photos and videos with SaveIG
          </h2>
          <p className="text-lg py-2">
            <b>Step 1</b>: Open the Instagram app on your phone or go to the
            Instagram.com website and log in to your account.
          </p>
          <p className="text-lg py-2">
            <b>Step 2</b>: Find the content you want to download and click on
            the icon (...) above the post and then continue pressing the{" "}
            <strong>Copy Link</strong> option.
          </p>
          <p className="text-lg py-2">
            <b>Step 3</b>: Go to the website{" "}
            <a target="_blank" href="https://insta-saver.vercel.app/">
              <b>SaveIG</b>
            </a>
            , paste the Instagram link you just copied into input box and press
            the <strong>Download</strong> button.
          </p>
          <p className="text-lg py-2">
            <b>Step 4</b>: Tap the <b>Download Video</b> or{" "}
            <b>Download Photo</b> button, then the file will be saved to your
            device.
          </p>
          <p className="text-lg py-2">
            <i>
              With SaveIG you can download any Instagram content (Videos,
              Photos, Reels, Story, IGTV). We will continuously upgrade to bring
              you the best experience! Please share this tool with friends and
              family. Thank you!
            </i>
          </p>
          <div class="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg py-2">
              Our download tool is designed to assist you in downloading videos
              and images posted by your own account. However, we reserve the
              right not to provide the service if you use this tool to violate
              the privacy and materials of others.
            </p>
            <p className="text-lg py-2">
              Read our Terms of Service{" "}
              <Link href={"/terms-and-services"}>👉here👈</Link>
            </p>
          </div>
        </div>
        <div class="ig-section section-left ig-gr-content">
          <section itemscope="" itemtype="https://schema.org/FAQPage">
            <div class="section_faq">
              <h3 class=" my-4 font-semibold text-xl">FAQ</h3>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name">What is Instagram Downloader?</h4>
                <div
                  class="faq_item_content"
                  id="divId1"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text">
                    Instagram Downloader is an Instagram post content
                    downloader, you can download Instagram video, Photo,
                    Stories, Insta Reels and IGTV in highest quality.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name">
                  How to download Instagram photos and videos online?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId2"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text">
                    <ul className="text-lg py-2">
                      <li>
                        Step 1: Paste the Instagram url into the input box and
                        press the <strong>Download</strong> button.
                      </li>
                      <li>
                        Step 2: Tap the <b>Download Video</b> or{" "}
                        <b>Download Photo</b> button, then the file will be
                        saved to your device.
                      </li>
                      <li>
                        <i>
                          (SaveIG works well on all devices (PC, Mac,
                          Android, iOS).)
                        </i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  How to download Instagram photos/videos on iPhone?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId3"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    For iPhone, you need to use <b>Safari</b> browser on iOS 13
                    or get <b>Documents by Readdle</b> app and go to SaveIG
                    → Paste Instagram video link → Download (
                    <a
                      target="_blank"
                      href="https://insta-saver.vercel.app/how-to-download-instagram-videos-on-iphone"
                    >
                      see instructions here
                    </a>
                    ).
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  How to download Instagram photos/videos on Android?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId4"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Copy the Instagram link → Go to SaveIG → Paste the
                    copied Instagram link into the input box → Download.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Can I download Instagram photos and videos from a private
                  account?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId5"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Absolutely, you can use{" "}
                    <a
                      target="_blank"
                      href="https://insta-saver.vercel.app/instagram-private-downloader"
                    >
                      <b>Private Downloader</b>
                    </a>{" "}
                    feature to download Instagram videos, photos, stories, Insta
                    Reels and IGTV from private accounts without any problem.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Can I download videos and photos directly on Instagram?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId6"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Unfortunately, <b>Instagram</b> does not allow you to
                    download any content. You can go to the{" "}
                    <a target="_blank" href="https://insta-saver.vercel.app/">
                      SaveIG
                    </a>{" "}
                    website and follow the instructions to download any content
                    on IG.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Do I have to pay to use SaveIG to download Instagram photos
                  and videos?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId7"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Absolutely not, SaveIG is a free Instagram downloader. You
                    can download any Instagram video, photo, story, Insta Reels
                    and IGTV without paying any cost.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Where are Instagram videos and photos saved after downloading?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId8"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Please check the "Downloads" folder in your phone or the
                    "download history" section of your browser.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
