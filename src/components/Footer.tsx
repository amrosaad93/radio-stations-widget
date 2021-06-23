import React from "react";
import FooterCSS from "./Footer.module.css";
import { useAppSelector } from "../app/hooks";

const Header: React.FC = () => {
  const station = useAppSelector((state) => state.station.station);
  return (
    <div className={FooterCSS.footer}>
      {station !== "" && (
        <>
          <h5>Currently Playing</h5>
          <h4>{station}</h4>
        </>
      )}
    </div>
  );
};

export default Header;
