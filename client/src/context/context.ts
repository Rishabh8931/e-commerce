import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export type ShopContextValue = {
  products: typeof products;
  currency: string;
  delivery_fee: number;
};

export const shopContext = createContext<ShopContextValue>({
  products,
  currency: "₹",
  delivery_fee: 10,
});
