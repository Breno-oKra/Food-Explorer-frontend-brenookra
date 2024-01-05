import { Container, Image,InputCamp,ButtonOut } from "./style";
import BannerAdmin from "../../assets/logo-admin.svg";
import BannerCustomer from  "../../assets/logo.svg";
import { MagnifyingGlass,Receipt,SignOut } from "@phosphor-icons/react";
import theme from "../../styles/theme";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
export function Header() {
  const { user,signOut } = useAuth();
  const navigate = useNavigate()
  function SignOutBack(){
    
    navigate("/")
    signOut()
   
  }
  return (
    <Container>
       {user.role == "admin" ?  <Image src={BannerAdmin} alt="" width={300} /> : <Image src={BannerCustomer} alt="" width={300} />}
     
      <InputCamp>
        <MagnifyingGlass size={24} color={theme.LIGHT_400} />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </InputCamp>
      {
        user.role == "admin"? <Button title="Novo Prato" to="/new"/> : <Button title="Pedidos(0)" icon={Receipt} />
      }
     
      <ButtonOut onClick={SignOutBack}><SignOut size={32} color={theme.LIGHT_400}/></ButtonOut>
    </Container>
  );
}
