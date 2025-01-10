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
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import {
  doc,
  setDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { PiIdentificationCard } from "react-icons/pi";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState(false);
  const [userInUse, setUserInUse] = useState(false);

  const checkUsernameAvailability = async (username) => {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty; // Retorna true se o nome de usuário está disponível
  };

  const handleSignUp = async () => {
    if (name == "" || username == "" || email == "" || password == "") {
      setEmpty(true);
    } else {
      try {
        const isAvailable = await checkUsernameAvailability(username);
        if (!isAvailable) {
          setUserInUse(true);
          return;
        } else{
          setUserInUse(false);
        }

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Salva os dados adicionais no Firestore
        await setDoc(doc(db, "users", user.uid), {
          name,
          username,
          email,
          password,
        });

        navigate("/");
      } catch (error) {
        console.error("Erro ao cadastrar:", error.message);
      }
    }
  };

  return (
    <>
      <NavInicio />
      <div className="main-inicio flex min-h-screen items-center justify-center bg-primary">
        <div className="w-full flex items-center justify-center container-main">
          <Card className=" w-full m-10 max-w-[500px]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Cadastrar</CardTitle>
              <CardDescription className="text-base">
                Cadastre-se com seu email ou Google
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignUp();
                }}
              >
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <div className="flex w-full items-center gap-3 mt-2 border p-2 rounded-lg">
                    <PiIdentificationCard className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="outline-none w-full" 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="username">Nome de Usuário</Label>
                  <div className="flex w-full items-center gap-3 mt-2 border p-2 rounded-lg">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="username"
                      placeholder="Seu nome de usuário"
                      className="outline-none w-full"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="flex w-full items-center gap-3 mt-2 border p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
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
                        className="outline-none w-full"
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

                  {empty && <p className="text-red-500 font-semibold mt-2 text-center">Preencha todos os campos!</p>}

                  {userInUse && <p className="text-red-500 font-semibold mt-2 text-center">Este nome de usuário já está sendo utilizado!</p>}
                </div>

                <Button type="submit" className="w-full mb-1">
                  Cadastrar
                </Button>
              </form>
              <p className="text-center text-sm mt-2 text-muted-foreground">
                Já possui uma conta?{" "}
                <Link to={"/login"} className="text-blue-600 underline">
                  Entrar
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
