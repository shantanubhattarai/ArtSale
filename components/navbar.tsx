import {Syne} from "next/font/google";
import {ReactElement} from 'react';

const syne = Syne({subsets: ["latin"]});

export default function Navbar(): ReactElement {
    return (
        <div
            className={`w-full max-w-[1416px] p-4 mx-auto text-[16px] m-[48px] border border-gray-400 flex justify-between items-center`}
        >
            <div className={`${syne.className} font-bold text-[32px]`}>Art Sale</div>
            <div>
                <ul className="flex justify-between gap-8 font-light`">
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li className="font-medium text-blue-600">Shop Now</li>
                </ul>
            </div>
        </div>
    );
}
