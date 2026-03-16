import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router";
import BreadCrum from "../components/BreadCrum";
import ProductDisplay from "../components/ProductDisplay";
import DiscriptionBox from "../components/DiscriptionBox";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
