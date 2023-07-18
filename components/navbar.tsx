import { ReactElement, useEffect, useState } from "react";

import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Navbar(): ReactElement {
  return (
    <div className={`p-4 w-full`}>
      <div
        className={`hidden w-full max-w-[1416px] bg-[#fff3e4] p-4 mx-auto text-[16px] mt-[48px] border border-gray-400 md:flex md:justify-between items-center`}
      >
        <div className={`${syne.className} font-bold text-[32px]`}>
          <Link href="/">ArtSale</Link>
        </div>
        <div>
          <ul className="flex justify-between gap-8 font-light`">
            <li>
              <Link href="/shopping-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="font-bold text-red-800">
              <Link href="/auth/login">Shop Now</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`w-full max-w-[1416px] bg-[#fff3e4] p-4 mx-auto text-[14px] md:text-[16px] mt-[48px] border border-gray-400 flex flex-col md:hidden justify-between items-center`}
      >
        <div className={`${syne.className} font-bold text-[32px]`}>
          <Link href="/">ArtSale</Link>
        </div>
        <div>
          <ul className="flex justify-between gap-8 font-light`">
            <li>
              <Link href="/shopping-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="font-bold text-red-800">
              <Link href="/auth/login">Shop Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
