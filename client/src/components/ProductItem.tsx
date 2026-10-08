import { useContext } from "react";
import { shopContext } from "../context/context";
import { Link } from "react-router-dom";

type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  image: string[];
};

const ProductItem = ({ id, name, price, image }: ProductItemProps) => {
  const { currency } = useContext(shopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="transition duration-300 ease-in-out hover:scale-110"
          src={image[0]}
          alt={name}
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price.toFixed(2)}
      </p>
    </Link>
  );
};

export default ProductItem;
