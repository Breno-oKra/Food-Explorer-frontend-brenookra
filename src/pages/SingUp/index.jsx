import { Button } from "../../components/Button";
import { Container, Form } from "./style";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../hooks/api";
export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  function handleSignIn() {
    
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    api.post("/user", { name, email, password },{withCredentials:true})
      .then(() => {
        alert("usuario cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("não possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <div>
        <img src={Logo} />
      </div>
      <div>
        <Form>
          <h3 className="titleForm">Crie sua conta</h3>
          <label htmlFor="name">
            Seu Nome
            <input
              id="name"
              type="text"
              placeholder="Exemplo: Maria da Silva"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              id="password"
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <Button title="Criar conta" onClick={handleSignIn} type="button" />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </div>
    </Container>
  );
}
