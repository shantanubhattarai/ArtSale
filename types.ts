export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  author: { name: string; address?: string };
  quantity: number;
}

export type ProductState = {
  products: IProduct[];
};

export type ProductAction = {
  type: string;
  payload: IProduct;
};

export type DispatchType = (args: ProductAction) => ProductAction;
