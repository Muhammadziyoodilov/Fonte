import React, { useEffect, useState } from "react";
import Comand from "./comand/Comand";
import About from "./About";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [blog, setBlog] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setBlog(res.data));
  }, []);
  return (
    <>
      <div className="hero pt-[174px] pb-[137px]">
        <div className="container hero-container">
          <h1 className="hero-title mb-[40px]">Хедж-фонд</h1>
          <p className="hero-info mb-[40px] max-w-[500px]">
            Классический выбор профессиональных инвесторов с заданными
            умеренными параметрами риска. Основан на инвестировании в бумаги
            индекса S&P 500 с диверсификацией по 11 секторам экономики.
          </p>
          <Link className="btn" to={"/products/1"}>
            Подробнее
          </Link>
        </div>
      </div>
      <About />
      <div className="senn mt-[150px] pb-[150px]">
        <div className="container senn-container">
          <img src="/images/svg/title (1).svg" alt="" className="mb-[60px]" />
          <div className="senn-content flex justify-around">
            <div className="senn-wrp flex items-start">
              <img src="/images/svg/senn/14.svg" alt="" />
              <div className="flex flex-col gap-[20px]">
                <h2 className="senn-title">Стабильность</h2>
                <p className="senn-info max-w-[326px]">
                  Сохранность капитала клиентов приоритетнее доходности - каждое
                  решение взвешено, обдумано и оценено.
                </p>
              </div>
            </div>
            <div className="senn-wrp flex items-start">
              <img src="/images/svg/senn/41.svg" alt="" />
              <div className="flex flex-col gap-[20px]">
                <h2 className="senn-title">Устойчивость</h2>
                <p className="senn-info max-w-[450px]">
                  Устойчивое развитие — основа нашей бизнес-модели. Начиная с
                  поиска и оценки предоставившихся возможностей для бизнеса до
                  последовательного развития наших проектов и реаллокации
                  капитала в новые возможности.
                </p>
              </div>
            </div>
          </div>
          <div className="senn-content flex justify-around">
            <div className="senn-wrp flex items-start">
              <img src="/images/svg/senn/4.svg" alt="" />
              <div className="flex flex-col gap-[20px]">
                <h2 className="senn-title">Команда</h2>
                <p className="senn-info max-w-[326px]">
                  Команда Fonte Capital LTD – основа успеха. Каждый сотрудник
                  Компании – это ценный актив в рабочем процессе фонда. Наша
                  цель – создание такой рабочей атмосферы и условий, которые
                  позволят максимально раскрыть потенциал каждого сотрудника для
                  достижения максимального результата.
                </p>
              </div>
            </div>
            <div className="senn-wrp flex items-start">
              <img src="/images/svg/senn/12.svg" alt="" />
              <div className="flex flex-col gap-[20px]">
                <h2 className="senn-title">Репутация</h2>
                <p className="senn-info max-w-[450px]">
                  Ответственность и этика – основа нашей деятельности.
                  Деятельность в рамках лучших практик (Корпоративный Кодекс
                  этики и стандарты профессионального поведения) позволяет
                  предлагать клиентам более качественные инвестиционные
                  продукты, отвечающие высоким требованиям и ожиданиям самых
                  требовательных клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comand />
      <div className="blog mb-[109px]">
        <div className="container home-container">
          <img
            src="/images/svg/Frame 1 (5).svg"
            alt=""
            className="home-title mb-[40px]"
          />
          <div className="flex justify-around flex-wrap">
            {blog &&
              blog.map((item) => (
                <div className="h-[351px]">
                  <img
                    src={item.image}
                    alt=""
                    className="home-img w-[320] h-[230px] mb-[20px]"
                  />
                  <div className="flex flex-col justify-between h-[101px]">
                    <h3 className="home-name max-w-[320px]">{item.title}</h3>
                    <Link
                      className="link flex gap-[5px] mt-[auto]"
                      to={`/blog/${item.id}`}
                    >
                      Подробнее
                      <img src="/images/svg/Vector (2).svg" alt="" />
                    </Link>
                  </div>
                </div>
              ))}
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

export default Home;
