import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div>
        

<footer class="rounded-lg shadowbg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://insta-saver.vercel.app/" class="flex md:justify-start justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logoinside.jpg" class="h-10" alt="instasaver Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-center text-white">InstaSaver</span>
            </a>
            <ul class="flex flex-wrap mb-6 text-sm font-medium sm:mb-0 text-gray-400 justify-center items-center">
                <li>
                    <Link href={"/about"} class="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href={"/privacypolicy"} class="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href={"/disclaimer"} class="hover:underline me-4 md:me-6">Disclaimer</Link>
                </li>
                <li>
                    <Link href={"/contact"} class="hover:underline me-4 md:me-6">Contact</Link>
                </li>
                <li>
                    <Link href={"/terms-and-services"} class="hover:underline me-4 md:me-6">Terms & Services</Link>
                </li>
            </ul>
        </div>
        <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span class="block text-sm  text-center text-gray-400">© 2024 <Link href={"/"} class="hover:underline">InstaSaver</Link>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer