import React from "react";
import HeaderCSS from "./Header.module.css";
import { BsPower, BsChevronLeft } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <div className={HeaderCSS.header}>
      <BsChevronLeft size={30} />
      <h2 data-testid="title" className={HeaderCSS.title}>
        Stations
      </h2>
      <BsPower size={30} />
    </div>
  );
};

export default Header;
