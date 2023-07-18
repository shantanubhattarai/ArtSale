import { ReactElement, useCallback } from "react";
import {
  decrementQuantity,
  incrementQuantity,
  selectProducts,
} from "@/redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/common/card";
import Button from "@/components/common/button";
import { IProduct } from "@/types";
import { Dispatch } from "@reduxjs/toolkit";
import Image from "next/image";
export default function ShoppingCart(): ReactElement {
  const shoppingCartState = useSelector(selectProducts);

  const dispatch: Dispatch<any> = useDispatch();
  const increaseQuantity = useCallback(
    (product: IProduct) => {
      dispatch(incrementQuantity(product));
    },
    [dispatch]
  );
  const decreaseQuantity = useCallback(
    (product: IProduct) => {
      dispatch(decrementQuantity(product));
    },
    [dispatch]
  );

  function getTotalPrice(): number {
    let totalSum = 0;
    shoppingCartState.forEach((shoppingCartItem) => {
      totalSum += shoppingCartItem.price * shoppingCartItem.quantity;
    });
    return totalSum;
  }

  return (
    <div>
      <h1 className="text-4xl">Shopping Cart</h1>
      <div className="h-[600px] max-h-full py-4 mb-20">
        <ul>
          {shoppingCartState.map((shoppingCartItem) => {
            return (
              <li
                key={`shopping-cart-item-${shoppingCartItem.id}`}
                className="pb-8"
              >
                <Card>
                  <div className="flex justify-between">
                    <div className="flex justify-between">
                      <Image
                        src={shoppingCartItem.imageUrl}
                        alt="Shopping List Item"
                        width="200"
                        height="100"
                        className="inline-block"
                      />
                      <div>
                        <p className="mx-4 text-xl">{shoppingCartItem.name}</p>
                        <p className="mx-4 text-gray-700 text-md">
                          {shoppingCartItem.author.name}
                        </p>
                        <p className="mx-4 text-sm text-gray-500">
                          {shoppingCartItem.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="py-4 text-lg font-bold text-right">
                        Rs. {shoppingCartItem.price * shoppingCartItem.quantity}
                      </p>
                      <Button
                        variant="default"
                        onClick={() => decreaseQuantity(shoppingCartItem)}
                      >
                        -
                      </Button>
                      <span className="mx-4 tabular-nums">
                        {shoppingCartItem.quantity}
                      </span>
                      <Button
                        variant="default"
                        onClick={() => increaseQuantity(shoppingCartItem)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
          <li className="py-8">
            <div className="flex justify-between">
              <p className="text-md ">Total: </p>
              <p className="text-lg font-bold text-right">
                Rs. {getTotalPrice()}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
