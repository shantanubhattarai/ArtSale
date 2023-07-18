import { ReactElement } from "react";
import ShoppingCard from "../common/shopping-card";

const forYouData = [
  {
    name: "Artpiece 1",
    price: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80",
    id: "1",
    author: "Author 1",
  },
  {
    name: "Artpiece 2",
    price: 105000,
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    id: "2",
    author: "Author 2",
  },
  {
    name: "Artpiece 3",
    price: 25000,
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    id: "3",
    author: "Author 3",
  },
  {
    name: "Artpiece 4",
    price: 20000,
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    id: "4",
    author: "Author 1",
  },
  {
    name: "Artpiece 5",
    price: 10000,
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    id: "5",
    author: "Author 6",
  },
  {
    name: "Artpiece 6",
    price: 55000,
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80",
    id: "6",
    author: "Author 5",
  },
];

export default function ForYou(): ReactElement {
  return (
    <div>
      <h2 className="section-title">For You</h2>
      <div className="grid w-full grid-cols-3 gap-4">
        {forYouData.map((forYou) => {
          return <ShoppingCard data={forYou} key={`forYou-${forYou.id}`} />;
        })}
      </div>
    </div>
  );
}
