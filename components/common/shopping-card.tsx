import Card from "./card";
import Image from "next/image";
import Button from "./button";
import { ReactElement } from "react";
import Link from "next/link";

type Props = {
  data: { id: string; name: string; price: number; imageUrl: string };
};

export default function ShoppingCard({ data }: Props): ReactElement {
  return (
    <Card>
      <Link href={`/products/${data.id}`}>
        <div className="relative w-full h-[365px]">
          <Image
            src={data.imageUrl}
            alt="Top Art"
            fill={true}
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-gray-700">Rs. {data.price}</p>
        </div>
        <div>
          <Button className="hover:shadow-gray-300" variant="default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart-plus"
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
              <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
              <path d="M15 6h6m-3 -3v6" />
            </svg>
          </Button>
        </div>
      </div>
    </Card>
  );
}
