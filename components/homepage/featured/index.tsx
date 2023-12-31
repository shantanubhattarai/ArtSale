import Card from "../../common/card";
import Image from "next/image";
import { ReactElement } from "react";
import FeaturedPicks from "./featured-picks";
import { IProduct } from "@/types";
const data = {
  id: 1,
  imageUrl:
    "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  author: {
    name: "Caleb Edwards",
    address: "San Francisco",
  },
};
type Props = {
  addToShoppingCart: (product: IProduct) => void;
};
export default function Featured({ addToShoppingCart }: Props): ReactElement {
  return (
    <>
      <Card className="h-[320px] my-[80px]">
        <div className="relative w-full h-full">
          <Image
            src={data.imageUrl}
            alt="Featured Artist"
            className="hidden object-cover w-full md:block"
            style={{ objectPosition: "0px -175px" }}
            fill={true}
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-gray-900">
            <div className="absolute right-20 bottom-10">
              <h3 className={` text-white font-bold text-[40px]`}>
                {data.author.name}
              </h3>
              <p className={`text-white text-[24px]`}>{data.author.address}</p>
            </div>
          </div>
        </div>
      </Card>
      <FeaturedPicks
        featuredAuthor={data}
        addToShoppingCart={addToShoppingCart}
      />
    </>
  );
}
