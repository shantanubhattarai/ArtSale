import { ReactElement, useState } from "react";
// import { useRouter } from "next/router";
import Image from "next/image";
import Card from "@/components/common/card";
import Button from "@/components/common/button";

const data = {
  id: 1,
  name: "Artpiece 1",
  price: "45000",
  imageUrl:
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80",
  author: "Author 1",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi, adipisci beatae deserunt consequuntur tenetur dolorum officiis magni quae optio, quasi totam natus et error eveniet omnis libero, repellendus recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi, adipisci beatae deserunt",
};

const reviews = [
  {
    id: "1",
    content: "Very good art. Loved it.",
    rating: 5,
    username: "randomReviewer",
  },
  {
    id: "2",
    content: "Shipped in perfect condition. Fast too. Would order again.",
    rating: "5",
    username: "just-another-reviewer",
  },
];

export default function Product(): ReactElement {
  // const router = useRouter();
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* {console.log(router.query.id)} */}
      <div className="flex w-full ">
        <Card className="h-[750px] w-3/4">
          <div className="relative w-full h-full">
            <Image src={data.imageUrl} alt="Product" fill={true} />
          </div>
        </Card>
        <div className="w-full p-4">
          <p className="text-4xl font-bold">{data.name}</p>
          <p className="py-2 text-sm text-gray-500">{data.author}</p>
          <p className="py-4 text-2xl font-bold">Rs. {data.price}</p>
          <p className="w-1/2 py-8 leading-[24px]">{data.description}</p>
          <div>
            <span className="mr-4">Quantity:</span>
            <Button
              className="hover:shadow-gray-300"
              onClick={() => (counter > 0 ? setCounter(counter - 1) : 0)}
            >
              -
            </Button>
            <span className="px-8 tabular-nums"> {counter} </span>
            <Button
              className="hover:shadow-gray-300"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </Button>
          </div>
          <div className="py-8">
            <Button className="px-24 py-8 text-white bg-red-800">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="py-8">
        {reviews.map((review) => {
          return (
            <Card key={`review-${review.id}`} className="my-2">
              <div className="flex items-center justify-between">
                <p className="text-gray-500">{review.username}</p>
                <p className="font-bold">{review.rating} / 5</p>
              </div>

              <p className="mt-2">{`"${review.content}"`}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
