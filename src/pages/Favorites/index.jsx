import { Header } from "../../components/Header";
import { Container, Box, BoxFood } from "./style";

import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function Favorites() {
  const { signOut } = useAuth();
  const [foods, setFoods] = useState([]);
  const [controlData,setControlData] = useState(false)
  useEffect(() => {
    async function dataLoad() {
      try {
        await api
          .get(`/foods/favorite`, { withCredentials: true })
          .then((res) => {
            setFoods(res.data.foodsFavorites);
          });
      } catch (error) {
        if (error.response?.status === 401) { 
          alert("Você Foi Deslogado");
          return signOut();
          
        }
        return
      
      }
    }
    dataLoad();
  }, [controlData]);
  async function HandleDelete(id) {
  
    const confirm = window.confirm("Deseja remover esta Comida dos Favoritos?");
    if (confirm) {
      try {
        await api
          .delete(`/foods/favorite/${id}`, { withCredentials: true })
          setControlData(!controlData)
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <Container>
      <Header />
      <Box>
        <div>
          <h2>Meus favoritos</h2>
          <BoxFood>
            {foods &&
              foods.map((item) => (
                <div key={item.id}>
                  <Link  to={`/details/${item.id}`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${item.image}`}
                      alt=""
                    />
                  </Link>
                  <div>
                    <h3>{item.name}</h3>
                    <button type="button" onClick={() => HandleDelete(item.idFavorite)}>
                      Remover dos Favoritos
                    </button>
                  </div>
                </div>
              ))}
          </BoxFood>
        </div>
      </Box>
      <Footer />
    </Container>
  );
}
