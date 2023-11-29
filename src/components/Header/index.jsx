import { Container, Image,InputCamp,ButtonOut } from "./style";
import logoAdmin from "../../assets/logo-admin.svg";
import { MagnifyingGlass,Receipt,SignOut } from "@phosphor-icons/react";
import theme from "../../styles/theme";
import { Button } from "../Button";
export function Header() {
  return (
    <Container>
      <Image src={logoAdmin} alt="" width={300} />
      <InputCamp>
        <MagnifyingGlass size={24} color={theme.LIGHT_400} />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </InputCamp>
      <Button title="Pedidos(0)" icon={Receipt} />
      <ButtonOut><SignOut size={32} color={theme.LIGHT_400}/></ButtonOut>
    </Container>
  );
}
