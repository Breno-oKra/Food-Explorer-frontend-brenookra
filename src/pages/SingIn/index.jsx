import { Button } from "../../components/Button";
import { Container, Form } from "./style";
import Logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
export function SingIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] =  useState("")
  const { login } = useAuth();
  const[status,setStatus] = useState(true)
  function handleSignIn() {
    setStatus(false)
    try{
      login({ email, password })
    }catch(error){
      alert(error)
      setStatus(true)
    }
  
  }

  return (
    <Container>
      <div>
        <img src={Logo} />
      </div>
      <div>
        <Form>
          <h3 className="titleForm">Faça Login</h3>

          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              id="password"
              type="password"
              placeholder="No mínimo 6 caracteres"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          {
            status?  <Button title="Faça login" onClick={handleSignIn} type="button" /> :  <Button title="Carregando..." />
          }
         
         
          <Link to="/register">Criar uma conta</Link>
        </Form>
      </div>
    </Container>
  );
}
