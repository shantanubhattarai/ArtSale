import { Dispatch } from "@reduxjs/toolkit";
import Featured from "@/components/homepage/featured";
import ForYou from "@/components/homepage/for-you";
import { IProduct } from "@/types";
import { ReactElement } from "react";
import { addProduct } from "@/redux/reducers";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function Homepage(): ReactElement {
  const dispatch: Dispatch<any> = useDispatch();
  const addToShoppingCart = useCallback(
    (product: IProduct) => {
      dispatch(addProduct(product));
    },
    [dispatch]
  );
  return (
    <>
      <Featured addToShoppingCart={addToShoppingCart} />
      <ForYou addToShoppingCart={addToShoppingCart} />
    </>
  );
}
