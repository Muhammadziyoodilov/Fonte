import React from "react";

const About = () => {
  return (
    <>
      <div className="about mt-[75px] mb-[62px] bg-[#141414]">
        <img src="/images/png/line.png" alt="" className="comand-line" />
        <div className="container about-container">
          <img src="/images/svg/title.svg" alt="" className="mb-[32px]" />
          <div className="about-wrp flex justify-between">
            <img src="/images/png/image 18.png" alt="" className="about-img" />
            <div className="about-right ml-[20px]">
              <p className="about-info mb-[30px]">
                Наша Команда успешно осуществляет деятельность на нескольких
                рынках инвестиций. Богатство выбора инструментов этих рынков
                позволяет Нам успешно сохранять и преумножать капитал клиентов.
              </p>
              <p className="about-info mb-[30px]">
                Вступить в партнерство с Fonte могут как профессиональные
                инвестора, так и частные лица, только начинающие открывать для
                себя новые перспективы. Наша юрисдикция - Международный
                финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и
                регуляторные политики обеспечивают необходимые свободы и
                преимущества для достижения целей инвестиций
              </p>
              <p className="about-info mb-[30px]">
                В партнерстве с Fonte Capital LTD, инвесторы имеют возможность
                воспользоваться не только проверенными стратегиями, но и смогут
                совместно разработать персональные инвестиционные решения.
              </p>
              <button className="btn flex items-center gap-[10px]">
                <img src="/images/svg/Group 50.svg" alt="" />
                Лицензии
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
