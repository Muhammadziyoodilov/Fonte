import axios from "axios";
import React, { useEffect, useState } from "react";

const Comand = () => {
  const [sponsor, setSponsor] = useState();
  useEffect(() => {
    axios
      .get("https://6870179f7ca4d06b34b5f537.mockapi.io/fonte/comand")
      .then((res) => setSponsor(res.data));
  }, []);
  return (
    <>
      <div className="comand">
        <div className="container comand-container mt-[75px] mb-[163px]">
          <img src="/images/png/line.png" alt="" className="comand-line" />
          <img src="/images/png/line.png" alt="" className="comand-line-2" />
          <img src="/images/svg/Frame 1 (2).svg" alt="" className="mb-[30px]" />
          <p className="comand-info max-w-[840px] mb-[80px]">
            Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании
            – это ценный актив в рабочем процессе фонда. Наша цель – создание
            такой рабочей атмосферы и условий, которые позволят максимально
            раскрыть потенциал каждого сотрудника для достижения максимального
            результата.
          </p>
          <div className="comand-mid flex justify-around flex-wrap gap-[20px] mb-[60px]">
            {sponsor &&
              sponsor.map((item) => (
                <div className="comand-sponsor text-center gap-[20px] flex flex-col items-center">
                  <img src={item.image} alt="" className="comand-sponsor-img" />
                  <h4 className="comand-sponsor-name">{item.title}</h4>
                </div>
              ))}
          </div>
          <img
            src="/images/svg/Frame 1 (3).svg"
            alt=""
            className="mb-[40px] partners"
          />
          <div className="flex gap-[50px] items-center">
            <a href="#" className="comand-link">
              SeedBox
            </a>
            <a href="#" className="comand-link">
              Freedom Finance
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comand;
