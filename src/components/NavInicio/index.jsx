import React from "react";
import { Button } from "../ui/button";

const NavInicio = () => {
  return (
    <>
      <div className="p-4 bg-transparent flex items-center absolute top-0 z-30 justify-between sm:ml-14">
        <div>
          <h1 className="text-3xl font-extrabold text-primary-foreground">
            Street Flow
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavInicio;
