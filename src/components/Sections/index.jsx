import { Container, Box } from "./style";
import {
  HeartStraight,
  CaretLeft,
  CaretRight,
  PencilSimple,
} from "@phosphor-icons/react";
import { BoxQuant } from "../BoxQuant";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../hooks/api";
import { useRef } from "react";
export function Section({ title, data,AttData,AttDataValue}) {
  const { user } = useAuth();
  const section = useRef(null)
  async function handleFavorite(id) {
    const confirm = window.confirm("Deseja Favoritar essa comida");
    if (confirm) {
      await api.post(`/foods/favorite`,{id,user_id:user.id},{ withCredentials: true });
      AttData(!AttDataValue)
    }
  }
  async function handleFavoriteDelete(id) {
   
    const confirm = window.confirm("Deseja remover esta Comida dos Favoritos?");
    if (confirm) {
      await api
      .delete(`/foods/favorite/${id}`, { withCredentials: true })
      AttData(!AttDataValue)
     
    }
  }
  return (
    <Container>
      <h3>{title}</h3>
      <div>
        <button onClick={() => {
            
            section.current.scrollLeft -= 300;
        }}>
          <CaretLeft />
        </button>
        <div ref={section}>
          {data.map((item) => (
            <Box key={item.id}>
              <div className="icon-flut">
                  {user.role == "customer" ? (
                    <button
                      type="button"
                      onClick={ item.favorite?  () => handleFavoriteDelete(item.idFavorite) : () => handleFavorite(item.id)}
                    >
                      {item.favorite? <HeartStraight color="#E1E1E6" weight="fill" /> : <HeartStraight /> }
                    </button>
                  ) : (
                    <Link to={`/change/${item.id}`}>
                      <PencilSimple />
                    </Link>
                  )}
                </div>
              <Link to={`/details/${item.id}`}>
                <img src={`${api.defaults.baseURL}/files/${item.image}`} alt="" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <strong>R$ {item.value}</strong>
                
              </Link>
              <div className="actions">
                {user.role == "customer" && (
                  <>
                    <BoxQuant food={item} />
                  </>
                )}
              </div>
            </Box>
          ))}
        </div>
        <button onClick={() =>  section.current.scrollLeft += 300}>
          <CaretRight />
        </button>
      </div>
    </Container>
  );
}
