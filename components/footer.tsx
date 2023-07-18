import Link from "next/link";
import { ReactElement } from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Footer(): ReactElement {
  return (
    <div className="p-4">
      <div
        className={`w-full text-white max-w-[1416px] p-4 mx-auto text-[16px] mt-[48px] border border-red-900 flex justify-between gap-4 lg:gap-48 bg-red-800 flex-col lg:flex-row`}
      >
        <div className="w-full">
          <Link href="/">
            <span className={`${syne.className} font-bold text-[32px]`}>
              ArtSale
            </span>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            similique unde inventore voluptatem est nihil libero facere soluta
            temporibus ut repellendus expedita quas, laudantium dolorem, iure
            aperiam consequuntur obcaecati voluptate.
          </p>
        </div>
        <div className="w-full">
          <ul className="mt-[48px]">
            <li className="py-1">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className="py-1">
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <ul className="mt-[48px]">
            <li className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline mr-2 icon icon-tabler icon-tabler-phone"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              +977 9867673555
            </li>
            <li className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline mr-2 icon icon-tabler icon-tabler-mail"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              dev.bshantanu@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
