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
import NavInicio from "../NavLandingPage";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import {
  doc,
  getDoc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorret, setIncorrect] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setIncorrect(false);
        navigate("/");
      } else {
        console.error("Dados do usuário não encontrados.");
      }
    } catch (error) {
      console.error("Erro ao logar:", error.message);
      setIncorrect(true);
    }
  };

  return (
    <>
      <NavInicio />
      <div className="main-inicio flex h-screen items-center justify-center bg-primary">
        <div className="container-main flex items-center justify-center w-full">
          <Card className="w-full m-10 max-w-[500px]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Entrar</CardTitle>
              <CardDescription className="text-base">
                Faça login com seu email
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="flex w-full items-center gap-3 mt-2 border p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu email"
                      className="outline-none w-full"
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Sua senha"
                        type={visible ? "text" : "password"}
                        className="w-full outline-none"
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
                  {incorret && <p className="text-red-500 font-semibold mt-2 text-center">Email ou senha incorretos!</p>}
                </div>

                <Button type="submit" className="w-full mb-1">
                  Entrar
                </Button>
              </form>

              <p className="text-center text-sm mt-2 text-muted-foreground">
                Ainda não possui uma conta?{" "}
                <Link to={"/register"} className="text-blue-600 underline">
                  Cadastrar
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
