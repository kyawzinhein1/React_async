import React from "react";

const ProductCard = ({ product }) => {
  const { title, image, price } = product;
  return (
    <>
        <section className="card-body">
          <img src={image} />
          <h2>{title}</h2>
          <p>$ {price}</p>
        </section>
    </>
  );
};

export default ProductCard;
