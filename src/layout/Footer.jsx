import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top bg-[#141414] pt-[65px] pb-[70px]">
        <div className="container flex justify-between">
          <Link>
            <img src="/images/svg/logo (2).svg" alt="" />
          </Link>
          <div className="footer-right ml-[15px]">
            <div className="footer-mid flex w-full max-w-[303px] justify-between">
              <div className="flex flex-col gap-[20px]">
                <Link to={"/about"}>О нас</Link>
                <Link to={"/comand"}>Команда</Link>
                <Link to={"/blog"}>Блог</Link>
                <Link to={"/products"}>Продукты</Link>
                <Link to={"/contact"}>Контакты</Link>
              </div>
              <div className="flex flex-col gap-[20px]">
                <Link to={"/about"}>Terms and conditions</Link>
                <Link to={"/comand"}>Privacy policy</Link>
              </div>
            </div>
            <div className="flex items-center gap-[15px] h-[40px] mb-[25px]">
              <a href="#">
                <img
                  width={40}
                  height={40}
                  src="/images/svg/social/fb.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  width={40}
                  height={40}
                  src="/images/svg/social/inst.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  width={40}
                  height={40}
                  src="/images/svg/social/twitter.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fotoer-bottom bg-[#0A0A0A] pt-[32px] pb-[70px]">
        <div className="container">
          <h4 className="footer-bottom-title mb-[39px]">
            © 2022 • Fonte • All rights reserved
          </h4>
          <p className="footer-info mb-[18px] max-w-[1000px]">
            Частная компания «FONTE Capital Ltd.», зарегистрированная по адресу:
            Есильский район, г. Нур-Султан, Мангилик Ел, 55/20, офис 345-346,
            БИН 220140900035, осуществляет свою деятельность в соответствии с
            законодательством Международного Финансового центра «Астана» (МФЦА)
            имеет право осуществлять регулируемую деятельность по управлению
            коллективными инвестициями – на основании лицензии №
            AFSA-A-LA-2022-0004, от 27 января 2022 года на бессрочной основе
          </p>
          <p className="footer-info max-w-[1000px]">
            Стоимость инвестиции инвестора в инвестиционный фонд может
            увеличиваться или уменьшаться. Результаты инвестирования в прошлом
            не определяют доходы в будущем. Управляющая компания инвестиционного
            фонда или МФЦА не гарантируют доходности инвестиций. Инвестору
            необходимо ознакомиться с Уставом (Constitution) и Инвестиционным
            меморандумом (Offering Memorandum) инвестиционного фонда, его
            инвестиционной декларацией и определенными рисками перед
            инвестированием активов в инвестиционный фонд.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
