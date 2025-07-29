import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import Sorting from "./Sorting";

const Header = () => {
  return (
    <>
      {/* NavBar */}
      <Nav />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        {/* SideBar */}
        <SideBar />
        <Sorting/>
      </div>
    </>
  );
};

export default Header;
