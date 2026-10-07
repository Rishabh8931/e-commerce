import { type PropsWithChildren } from "react";
import { products } from "../assets/frontend_assets/assets";
import { shopContext } from "./context";

const ShopContextProvider = ({ children }: PropsWithChildren) => {
  const currency = "₹";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
