import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://687014bd7ca4d06b34b5ee6d.mockapi.io/fonte-api/products")
      .then((res) => {
        const filtered = res.data.find((item) => item.id == id);
        setProduct(filtered);
        console.log(filtered);
      });
  }, [id]);

  if (!product) return <p>Загрузка...</p>;

  return (
    <>
      <div className="product bg-[#1C1C1C] py-[100px]">
        <div className="container product-top">
          <h5 className="inside-link mb-[30px]">
            <Link to={"/products"}>Продукты / </Link>
            {product.title}
          </h5>
          <h3 className="product-title mb-[50px]">{product.title}</h3>
          <div className="flex justify-between mb-[30px] product-wrp">
            <img src={product.image} alt="" className="product-img" />
            <p className="product-info max-w-[583px] ml-[20px]">
              {product.text}
            </p>
          </div>
          <p className="product-info mb-[40px] ">
            {product.text}
            {product.text}
          </p>
          <p className="product-info mb-[50px]">
            {product.text}
            {product.text}
          </p>
          <h3 className="doc mb-[20px]">Документы</h3>
          <div className="flex items-center gap-[20px] mb-[50px] download-wrp">
            <button>
              <img src="/images/png/file.png" alt="" />
            </button>
            <button>
              <img src="/images/png/file (1).png" alt="" />
            </button>
          </div>
          <h2 className="doc mb-[20px]">Лицензии</h2>
          <div className="flex gap-[20px] flex-wrap">
            <div>
              <img src="/files/2.png" alt="" className="doc-img mb-[10px]" />
              <h4 className="doc-name">Сертификат</h4>
            </div>
            <div>
              <img src="/files/2.png" alt="" className="doc-img mb-[10px]" />
              <h4 className="doc-name">Лицензия</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom bg-[#0A0A0A]">
        <div className="container">
          <div className="product-left flex flex-col max-w-[510px] w-full">
            <input
              type="text"
              placeholder="Имя Фамилия"
              className="mb-[10px]"
            />
            <div className="double-input flex gap-[10px]">
              <input
                type="text"
                placeholder="email@example.com"
                className="mb-[10px] mini-input"
              />
              <input
                type="text"
                placeholder="Номер"
                className="mb-[10px] mini-input"
              />
            </div>
            <input
              type="text"
              placeholder="Текст обращения"
              className="pb-[118px] mb-[30px]"
            />
            <button className="btn2 w-[250px] mx-[auto]">
              Получить консультацию
            </button>
          </div>
          <img src="/images/png/Group 40.png" alt="" className="ml-[20px]" />
        </div>
      </div>
    </>
  );
};

export default Product;
