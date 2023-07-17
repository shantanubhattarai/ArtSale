import Image from "next/image";
import { ReactElement } from "react";

export default function Toppicks(): ReactElement {
  return (
    <>
      <h2 className="text-[32px] leading-[48px] mb-[80px]">Top Picks</h2>
      <div className="grid w-full grid-cols-3 gap-4">
        <div className="p-4 border border-gray-400">
          <div className="relative w-full h-[365px]">
            <Image
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80"
              alt="Top Art 1"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium">Artpiece 1</p>
              <p className="text-sm text-gray-700">Rs. 45,000</p>
            </div>
            <div>
              <button className="px-8 py-2 bg-white border rounded border-1 hover:shadow-sm hover:shadow-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
                  <path d="M15 6h6m-3 -3v6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-400">
          <div className="relative w-full h-[365px]">
            <Image
              src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
              alt="Top Art 1"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium">Artpiece 2</p>
              <p className="text-sm text-gray-700">Rs. 105,000</p>
            </div>
            <div>
              <button className="px-8 py-2 bg-white border rounded border-1 hover:shadow-sm hover:shadow-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
                  <path d="M15 6h6m-3 -3v6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-400">
          <div className="relative w-full h-[365px]">
            <Image
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Top Art 1"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium">Artpiece 3</p>
              <p className="text-sm text-gray-700">Rs. 25,000</p>
            </div>
            <div>
              <button className="px-8 py-2 bg-white border rounded border-1 hover:shadow-sm hover:shadow-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
                  <path d="M15 6h6m-3 -3v6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
