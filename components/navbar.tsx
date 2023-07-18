import { Syne } from "next/font/google";
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
const syne = Syne({ subsets: ["latin"] });

export default function Navbar(): ReactElement {
  return (
    <div className={`sticky z-10 p-4 -top-[56px] w-full`}>
      <div
        className={`w-full max-w-[1416px] bg-[#fff3e4] p-4 mx-auto text-[16px] mt-[48px] border border-gray-400 flex justify-between items-center`}
      >
        <div className={`${syne.className} font-bold text-[32px]`}>
          <Link href="/">ArtSale</Link>
        </div>
        <div>
          <ul className="flex justify-between gap-8 font-light`">
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
