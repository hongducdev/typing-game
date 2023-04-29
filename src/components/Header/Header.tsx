import React from "react";
import { Link } from "react-router-dom";
import { TbKeyboard, TbSettingsFilled } from "react-icons/tb";

const Header = () => {
  return (
    <header className="p-4 fixed top-0 w-full">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-x-5">
            <TbKeyboard className="text-5xl text-ctp-green" />
            <span className="text-2xl text-white font-semibold">Typing Buddy</span>
          </div>
        </Link>
        <Link to="/setting">
          <TbSettingsFilled className="text-2xl text-white" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
