import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`sidebar container pt-[43px] ${
          isOpen == true ? "active" : ""
        }`}
      >
        <div className="sidebar-top flex justify-between items-center mb-[72px]">
          <NavLink className="logo-link" to="/">
            <img src="/images/svg/logo.svg" alt="Logo" className="logo-img" />
          </NavLink>
          <img
            src="/images/svg/x.svg"
            alt=""
            className="sidebar-close cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="sidebar-bottom">
          <nav className="sidebar-nav">
            <ul className="sitenav-list flex items-left gap-[30px] mb-[50px] flex-col">
              <li className="sitenav-item">
                <NavLink
                  onClick={onClose}
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
                  onClick={onClose}
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
                  onClick={onClose}
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
                  onClick={onClose}
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
                  onClick={onClose}
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

          <div className="sidebar-links-wrp flex items-left gap-[30px] flex-col">
            <button className="btn w-[125px]">Войти</button>
            <a href="#" className="lang-link underline">
              Русский
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
