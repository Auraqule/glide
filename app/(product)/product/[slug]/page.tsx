import React from "react";
type PageProps = {
  params: {
    slug: string;
  };
};
const Product = ({ params: { slug } }: PageProps) => {
  return <div>Product {slug}</div>;
};

export default Product;
