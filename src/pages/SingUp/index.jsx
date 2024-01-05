import { Button } from "../../components/Button";
import { Container, Form } from "./style";
import Logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
export function SingUp() {
  const email = "breno@gmail.com";
  const password = "123";
  const { login } = useAuth();
  function handleSignIn() {
    login({ email, password });
  }
  
  return (
    <Container>
      <div>
        <img src={Logo} />
      </div>
      <div>
        <Form>
          <h3>Crie sua conta</h3>
          <label htmlFor="name">
            Seu Nome
            <input
              id="name"
              type="text"
              placeholder="Exemplo: Maria da Silva"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              id="password"
              type="password"
              placeholder="No mínimo 6 caracteres"
            />
          </label>
          <Button title="Criar conta" onClick={handleSignIn} type="button" />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </div>
    </Container>
  );
}
