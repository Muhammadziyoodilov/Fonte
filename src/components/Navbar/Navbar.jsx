import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isSideOpen, setOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isSideOpen} onClose={() => setOpen(false)} />
      <div className="container navbar-container mt-[25px] pb-[30px] flex justify-between items-center">
        <NavLink className="logo-link" to="/">
          <img src="/images/svg/logo.svg" alt="Logo" className="logo-img" />
        </NavLink>

        <nav className="sitenav">
          <ul className="sitenav-list flex items-center gap-[48px]">
            <li className="sitenav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "sitenav-link active" : "sitenav-link"
                }
              >
                О нас
              </NavLink>
            </li>
            <li className="sitenav-item">
              <NavLink
                to="/comand"
                className={({ isActive }) =>
                  isActive ? "sitenav-link active" : "sitenav-link"
                }
              >
                Команда
              </NavLink>
            </li>
            <li className="sitenav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "sitenav-link active" : "sitenav-link"
                }
              >
                Блог
              </NavLink>
            </li>
            <li className="sitenav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "sitenav-link active" : "sitenav-link"
                }
              >
                Продукты
              </NavLink>
            </li>
            <li className="sitenav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "sitenav-link active" : "sitenav-link"
                }
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar-links-wrp flex items-center gap-[30px]">
          <button className="btn">Войти</button>
          <a href="#" className="lang-link underline">
            Рус
          </a>
        </div>
        <img
          src="/images/svg/menu.svg"
          alt=""
          className="navbar-burger cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
    </>
  );
};

export default Navbar;
