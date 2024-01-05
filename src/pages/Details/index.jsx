import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, BoxInfos, Infos, Box } from "./style";
import foodPra from "../../assets/food.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { BoxQuant } from "../../components/BoxQuant";

import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const params = useParams();
  const navigate = useNavigate()
  const [newData, setNewData] = useState(null);
  const {user} = useAuth()
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/foods/${params.id}`, { withCredentials: true });

      setNewData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      <Box>
        <button onClick={() => navigate("/")}>
          <CaretLeft /> Voltar
        </button>
        {newData ? (
          <BoxInfos>
            <img
              src={`${api.defaults.baseURL}/files/${newData.image}`}
              alt=""
            />
            <div>
              <Infos>
                <h3>{newData.name}</h3>
                <p>{newData.description}</p>
                <div>
    
                 {newData?.ingredients?.map((item, index) => (
                    <span key={index}>{item.name}</span>
                  ))}
                </div>
              </Infos>
              <div>
                {user.role == "customer"?  <BoxQuant /> : <></> }
               
                <Button title="Editar Prato" to={`/change/${newData.id}`} type="button" />
              </div>
            </div>
          </BoxInfos>
        ) : (
          <></>
        )}
      </Box>
      <Footer />
    </Container>
  );
}
