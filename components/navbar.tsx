import { Syne } from "next/font/google";
import { ReactElement } from "react";
import Link from "next/link";
const syne = Syne({ subsets: ["latin"] });

export default function Navbar(): ReactElement {
  return (
    <div className="p-4">
      <div
        className={`w-full max-w-[1416px] p-4 mx-auto text-[16px] m-[48px] border border-gray-400 flex justify-between items-center`}
      >
        <div className={`${syne.className} font-bold text-[32px]`}>
          <Link href="/">Art Sale</Link>
        </div>
        <div>
          <ul className="flex justify-between gap-8 font-light`">
            <li>Contact Us</li>
            <li>About Us</li>
            <li className="font-bold text-red-800">Shop Now</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
