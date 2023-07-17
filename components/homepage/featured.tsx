import Image from "next/image";
import {ReactElement} from 'react';

export default function Featured(): ReactElement {
  return (
    <div className="w-full p-4 border border-gray-400 h-[320px] my-[80px]">
      <div className="relative w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Featured Artist"
          className="object-cover w-full"
          style={{ objectPosition: "0px -175px" }}
          fill={true}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-gray-900 ">
          <div className="absolute right-20 bottom-10">
            <h3 className={` text-white font-bold text-[40px]`}>
              Caleb Edwards
            </h3>
            <p className={`text-white text-[24px]`}>San Fransisco</p>
          </div>
        </div>
      </div>
    </div>
  );
}
