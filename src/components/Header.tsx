import React from "react";

import Logo from "assets/imgs/logo.png";
import QanteliumIcon from "assets/imgs/qantelium-icon.png";
import LogoGod from "assets/imgs/logo-god.png";

interface HeaderProps {
  scrollH: number;
}

const Header: React.FC<HeaderProps> = ({ scrollH }) => {
  return (
    <div className="header-container relative z-50">
      <div
        className={`flex flex-wrap bg-black w-full px-4 ${
          scrollH > 0 ? "fixed top-0" : "relative"
        }`}
      >
        <div className="w-1/4 pt-[20px] md:pt-1">
          <img src={Logo} alt="logo" width={54} className="p-2" />
        </div>
        <div className="text-center w-1/2">
          <img className="inline" src={LogoGod} width={62} alt="logo-god" />
          <span className="text-white text-22 lg:text-28 tracking-wide">
            BMVerse.io
          </span>
        </div>
        <div className="w-1/4 text-right pt-[20px] md:pt-1">
          <img
            className="inline p-2"
            src={QanteliumIcon}
            alt="qanteliumicon"
            width={54}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
