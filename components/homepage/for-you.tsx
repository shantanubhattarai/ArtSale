import { ReactElement } from "react";
import ShoppingCard from "../common/shopping-card";
import { IProduct } from "@/types";

const forYouData: IProduct[] = [
  {
    name: "Artpiece 1",
    price: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80",
    id: "1",
    author: { name: "Author 1" },
    description: "",
    quantity: 1,
  },
  {
    name: "Artpiece 2",
    price: 105000,
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    id: "2",
    description: "",
    author: { name: "Author 2" },
    quantity: 1,
  },
  {
    name: "Artpiece 3",
    price: 25000,
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    id: "3",
    description: "",
    author: { name: "Author 3" },
    quantity: 1,
  },
  {
    name: "Artpiece 4",
    price: 20000,
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    id: "4",
    description: "",
    author: { name: "Author 1" },
    quantity: 1,
  },
  {
    name: "Artpiece 5",
    price: 10000,
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    id: "5",
    description: "",
    author: { name: "Author 6" },
    quantity: 1,
  },
  {
    name: "Artpiece 6",
    price: 55000,
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80",
    id: "6",
    description: "",
    author: { name: "Author 5" },
    quantity: 1,
  },
];

type Props = {
  addToShoppingCart: (product: IProduct) => void;
};

export default function ForYou({ addToShoppingCart }: Props): ReactElement {
  return (
    <div>
      <h2 className="section-title">For You</h2>
      <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {forYouData.map((forYou) => {
          return (
            <ShoppingCard
              product={forYou}
              addToShoppingCart={addToShoppingCart}
              key={`forYou-${forYou.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
