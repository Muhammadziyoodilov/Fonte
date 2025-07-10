import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact bg-[#1C1C1C] py-[100px]">
        <div className="container contact-container">
          <div className="contact-top mb-[94px] flex justify-between">
            <div className="contact-left">
              <img src="/images/svg/Frame 1.svg" alt="" className="mb-[50px]" />

              <h3 className="contact-title mb-[7px]">
                Задайте нам любой вопрос
              </h3>
              <p className="contact-info mb-[41px]">+7 701 776 24 20</p>
              <h3 className="contact-title mb-[7px]">Электронная почта</h3>
              <p className="contact-info mb-[41px]">client@fonte.kz</p>
              <h3 className="contact-title mb-[7px]">Юридический адрес</h3>
              <p className="contact-info contact-info-2">
                050040/A15E3H4, проспект Аль-Фараби, 77/7​, 10 этаж, Алматы,
                Казахстан Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346,
                Астана, Казахстан
              </p>
            </div>
            <div className="contact-right">
              <input type="text" placeholder="Имя Фамилия" required />
              <input type="text" placeholder="Email" required />
              <input type="text" placeholder="Телефон" required />
              <button className="btn2">Отправить</button>
            </div>
          </div>
          <div className="contact-bottom">
            <div>
              <img src="/images/png/map1.png" alt="" className="mb-[15px]" />
              <div className="contact-city">Астана</div>
            </div>
            <div>
              <img src="/images/png/map2.png" alt="" className="mb-[15px]" />
              <div className="contact-city">Алматы</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
