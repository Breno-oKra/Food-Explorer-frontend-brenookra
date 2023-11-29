import { Button } from "../../components/Button";
import { Container, Form } from "./style";
import Logo from "../../assets/logo.svg";
export function SingIn() {
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
          <Button title="Criar conta" />
          <a href="#">Já tenho uma conta</a>
        </Form>
      </div>
    </Container>
  );
}
