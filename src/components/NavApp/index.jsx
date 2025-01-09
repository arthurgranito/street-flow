import React from "react";
import { PiSneaker } from "react-icons/pi";
import {
  Home,
  LogOutIcon,
  Package,
  Search,
  Settings2,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NavApp = () => {
  return (
    <>
      <div className="p-4 sticky top-0 left-0 flex items-center justify-between sm:ml-14">
        <div>
          <h1 className="text-3xl font-extrabold text-[#313131]">
            Street Flow
          </h1>
        </div>

        <Avatar className="sm:hidden">
          <AvatarImage src="https://github.com/arthurgranito.png" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>

        <form className="hidden sm:flex items-center justify-between border rounded-lg">
          <input
            type="text"
            placeholder="Buscar Produto"
            className="p-2 outline-none w-full"
          />
          <Button variant="ghost" className="w-10 h-10" type="submit">
            <Search className="w-5 h-5" />
          </Button>
        </form>
      </div>

      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
                >
                  <Avatar>
                    <AvatarImage src="https://github.com/arthurgranito.png" />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="right"
                className="bg-white shadow-md px-2 py-1 text-muted-foreground rounded-lg"
              >
                Perfil
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Início</span>
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="right"
                className="bg-white shadow-md px-2 py-1 text-muted-foreground rounded-lg"
              >
                Início
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Shirt className="h-5 w-5" />
                  <span className="sr-only">Vestuário</span>
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="right"
                className="bg-white shadow-md px-2 py-1 text-muted-foreground rounded-lg"
              >
                Vestuário
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <PiSneaker className="h-5 w-5" />
                  <span className="sr-only">Calçados</span>
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="right"
                className="bg-white shadow-md px-2 py-1 text-muted-foreground rounded-lg"
              >
                Calçados
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Meu Carrinho</span>
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="right"
                className="bg-white shadow-md px-2 py-1 text-muted-foreground rounded-lg"
              >
                Meu Carrinho
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="absolute bottom-0 border-t w-full left-0 sm:hidden">
        <nav className="p-2 flex items-center gap-3 justify-center">
          <div className="flex flex-col items-center">
            <button className="h-10 w-10 flex items-center justify-center">
              <Home className="text-2xl" />
            </button>
            <span className="sr-only ">Início</span>
          </div>

          <div className="flex flex-col items-center">
            <button className="h-10 w-10 flex items-center justify-center">
              <Shirt className="text-2xl" />
            </button>
            <span className="sr-only">Vestuário</span>
          </div>

          <div className="flex flex-col items-center">
            <button className="h-10 w-10 flex items-center justify-center">
              <Search className="text-2xl" />
            </button>
            <span className="sr-only">Buscar</span>
          </div>

          <div className="flex flex-col items-center">
            <button className="h-10 w-10 flex items-center justify-center">
              <PiSneaker className="text-2xl" />
            </button>
            <span className="sr-only">Tênis</span>
          </div>

          <div className="flex flex-col items-center">
            <button className="h-10 w-10 flex items-center justify-center">
              <ShoppingCart className="text-2xl" />
            </button>
            <span className="sr-only">Carrinho</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavApp;
