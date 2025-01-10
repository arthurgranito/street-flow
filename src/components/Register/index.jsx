import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import NavInicio from "../NavInicio";
import googleIcon from "../Login/google-icon.png";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <NavInicio />
      <div className="main-inicio flex min-h-screen items-center justify-center bg-primary">
        <Card className=" w-full m-10 max-w-[500px]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Cadastrar</CardTitle>
            <CardDescription className="text-base">
              Cadastre-se com seu email ou Google
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <div className="flex w-full items-center gap-3 mt-2 border p-2 rounded-lg">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    id="nome"
                    placeholder="Seu nome completo"
                    className="outline-none"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <div className="flex w-full items-center gap-3 mt-2 border p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Seu email"
                    className="outline-none"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="senha">Senha</Label>
                <div className="flex w-full items-center justify-between gap-3 mt-2 border p-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                    <input
                      id="senha"
                      placeholder="Sua senha"
                      type={visible ? "text" : "password"}
                      className="outline-none"
                    />
                  </div>
                  {visible ? (
                    <Eye
                      className="w-5 h-5 text-gray-600"
                      onClick={() => setVisible(!visible)}
                    />
                  ) : (
                    <EyeClosed
                      className="w-5 h-5 text-gray-600"
                      onClick={() => setVisible(!visible)}
                    />
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full mb-1">
                Cadastrar
              </Button>
            </form>

            <div className="flex items-center gap-4 mt-4">
              <Separator />
              <span className="text-xs text-muted-foreground">OU</span>
              <Separator />
            </div>

            <Button className="mt-5 w-full" variant="outline">
              <img src={googleIcon} className="w-4 h-4" />
              Cadastre-se com o Google
            </Button>

            <p className="text-center text-sm mt-2 text-muted-foreground">
              Já possui uma conta?{" "}
              <Link to={"/login"} className="text-blue-600 underline">
                Entrar
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RegisterPage;
