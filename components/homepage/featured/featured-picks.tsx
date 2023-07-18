import { ReactElement } from "react";
import ShoppingCard from "../../common/shopping-card";
import { IProduct } from "@/types";

type Props = {
  featuredAuthor: {
    id: number;
    author: { name: string };
  };
  addToShoppingCart: (product: IProduct) => void;
};

const featuredData: IProduct[] = [
  {
    name: "Artpiece 1",
    price: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80",
    id: "1",
    author: { name: "Caleb Edwards" },
    description: "",
    quantity: 1,
  },
  {
    name: "Artpiece 2",
    price: 105000,
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    id: "2",
    author: { name: "Caleb Edwards" },
    description: "",
    quantity: 1,
  },
  {
    name: "Artpiece 3",
    price: 25000,
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    id: "3",
    author: { name: "Caleb Edwards" },
    description: "",
    quantity: 1,
  },
];

export default function FeaturedPicks({
  featuredAuthor,
  addToShoppingCart,
}: Props): ReactElement {
  return (
    <>
      <h2 className="section-title">From {featuredAuthor.author.name}</h2>
      <div className="grid w-full grid-cols-3 gap-4">
        {featuredData.map((featured) => {
          return (
            <ShoppingCard
              product={featured}
              addToShoppingCart={addToShoppingCart}
              key={`featured-${featured.id}`}
            />
          );
        })}
      </div>
    </>
  );
}
