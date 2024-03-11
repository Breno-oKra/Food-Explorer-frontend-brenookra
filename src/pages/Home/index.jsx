import { Header } from "../../components/Header";
import { Container, Box, BoxBanner } from "./style";
import Banner from "../../assets/banner1.png";
import { Section } from "../../components/Sections";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
import { useLocation } from "react-router-dom";

export function Home() {

  const {  signOut } = useAuth();
  const [foods, setFoods] = useState([]);
  const [controlData, setControlData] = useState(false);
  const DataCategory = [
    "Refeição",
    "Sobremesas",
    "Bebidas",
    "Lanches",
    "Janta",
  ];
  const Query = useLocation().search;

  useEffect(() => {
    if (Query) {
     
      dataLoadSearch();
    }else{
      dataLoad();
    }
    async function dataLoad() {
      try {
        await api.get(`/foods/`, { withCredentials: true }).then((res) => {
          setFoods(res.data);
        });
      } catch (error) {
        if (error.response.status == 401) {
          alert("Você Foi Deslogado");
          signOut();
        }
      }
    }
    async function dataLoadSearch() {
      
      try {
        await api
          .get(`/foods/${Query}`, { withCredentials: true })
          .then((res) => {
    
            setFoods(res.data);
         
          });
      } catch (error) {
        if (error.response.status == 401) {
          alert("Você Foi Deslogado");
          signOut();
        }
      }
    }
    
  }, [controlData]);
  function Filtered(catego) {
    const y = foods.filter((food) => food.category == catego);
    if (y.length < 1) {
      return;
    }
    return y;
  }
  return (
    <Container>
      <Header controlData={controlData} setControlData={setControlData} />
      <Box>
        <BoxBanner>
          <img src={Banner} width={500} alt="" />
          <div>
            <strong>Sabores inigualáveis</strong>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </BoxBanner>
        <div>
          {foods.length > 0 ? (
            DataCategory.map(
              (item, index) =>
                Filtered(item) && (
                  <Section
                    key={index}
                    title={item}
                    data={Filtered(item)}
                    AttData={setControlData}
                    AttDataValue={controlData}
                  />
                )
            )
          ) : (
            <div></div>
          )}
        </div>
      </Box>
      <Footer />
    </Container>
  );
}
