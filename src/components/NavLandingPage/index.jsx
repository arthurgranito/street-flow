import React from "react";
import { Link } from "react-router-dom";

const NavInicio = () => {
  return (
    <>
      <div className="p-4 bg-transparent flex items-center absolute top-0 z-30 justify-between sm:ml-14">
        <Link to={"/"}>
          <div>
            <h1 className="text-3xl font-extrabold text-primary-foreground">
              Street Flow
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavInicio;
