import React from "react";
import NavInicio from "../NavLandingPage";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <NavInicio />

      <main className="p-4 main-inicio w-full h-screen absolute top-0 flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold text-center text-primary-foreground titulo">
          Conheça a melhor loja de StreetWear
        </h1>
        <h3 className="text-2xl font-thin text-yellow-200 p-2 rounded-lg mt-4 titulo">
          Entregamos em todo o Brasil!
        </h3>
        <h2 className="text-xl text-center text-primary-foreground my-4 titulo">
          Crie sua conta e venha conhecer nossos produtos!
        </h2>
        <div className="flex gap-4 w-full items-center justify-between max-w-[400px] sm:max-w-[500px]">
          <Link to={'/register'}  className="w-full">
            <Button variant="outline" className="w-full">
              Cadastrar
            </Button>
          </Link>
          <Link to={"/login"} className="w-full">
            <Button className="w-full">Entrar</Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
