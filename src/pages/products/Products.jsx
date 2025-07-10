import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [getProduct, setProduct] = useState();
  useEffect(() => {
    axios
      .get("https://687014bd7ca4d06b34b5ee6d.mockapi.io/fonte-api/products")
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <div className="products py-[100px] bg-[#1C1C1C]">
        <div className="container products-container">
          <img
            src="/images/png/products/section 1.svg"
            alt=""
            className="mb-[50px]"
          />
          <div className="products-cards flex flex-col gap-[50px]">
            {getProduct &&
              getProduct.map((product) => (
                <div className="products-card pt-[36px] pb-[47px] pl-[47px] bg-[#272628]">
                  <h3 className="products-title mb-[20px]">{product.title}</h3>
                  <p className="products-info mb-[20px]">{product.text}</p>
                  <Link to={`/products/${product.id}`}>Подробнее</Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
