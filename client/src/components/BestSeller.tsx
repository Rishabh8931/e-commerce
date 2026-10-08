import { useContext, useEffect, useState } from "react";
import { shopContext, type ShopContextValue } from "../context/context";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSellerProducts, setBestSellerProducts] = useState<
    ShopContextValue["products"]
  >(() => products.filter((product) => product.bestseller));

  useEffect(() => {
    let isCurrent = true;

    Promise.resolve(products.filter((product) => product.bestseller)).then(
      (nextProducts) => {
        if (isCurrent) {
          setBestSellerProducts(nextProducts);
        }
      },
    );

    return () => {
      isCurrent = false;
    };
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BEST" text2="SELLERS" />
        <p className="text-gray-500 text-sm sm:text-base">
          Discover the products our customers love the most.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellerProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;