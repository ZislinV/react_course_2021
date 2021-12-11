import React from "react";

type ProductCounterPropsType = {
  product: { productName: string; count?: number };
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  // const productName=props.productName
  const {
    product: { productName, count = "No value" },
  } = props;

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <span>{count}</span>
    </div>
  );
};

export default ProductCounter;
