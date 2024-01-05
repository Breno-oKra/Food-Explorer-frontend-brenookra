import { Header } from "../../components/Header";
import { Container, Box, BoxBanner } from "./style";
import Banner from "../../assets/banner1.png";
import { Section } from "../../components/Sections";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    async function dataLoad(){
      await api.get(`/foods/`,{withCredentials:true}).then((res) => {
        setFoods(res.data)
      })
    }
    dataLoad()
  },[])
  function Filtered(catego){
    const y = foods.filter((food) => food.category == catego)
    console.log(y)
    return y
  }
  return (
    <Container>
      <Header />
      <Box>
        <BoxBanner>
          <img src={Banner} width={500} alt="" />
          <div>
            <strong>Sabores inigualáveis</strong>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </BoxBanner>
        <div>
          {foods.length > 0 && (
            <>
              {
                Filtered("Janta") && (
                  <Section title={"Janta"} data={Filtered("Janta")}/>
                )
              }
              
            </>
          )}
        </div>
      </Box>
      <Footer />
    </Container>
  );
}
