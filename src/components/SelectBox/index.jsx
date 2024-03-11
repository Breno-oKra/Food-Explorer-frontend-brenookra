import { useState } from "react";
import { Container } from "./style";
import { Circle } from "@phosphor-icons/react";
import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";

export function SelectBox({ value }) {
  const { signOut } = useAuth();
  const [status, setStatus] = useState(value.status);
  const colorStatus = {
    pending: "#AB222E",
    preparing: "#FBA94C",
    delivered: "#04D361",
  };

  async function handleStatus(st) {
    try {
      await api.post(
        `/historic/status`,
        { id: value.id, status:st },
        { withCredentials: true }
      ) 
    } catch (error) {
      if(error.response.status == 401){
        alert("Você foi Deslogado")
        signOut()
        
      }
      alert("Não Foi Possivel Mudar Status")
      return
      
    }
  }
  return (
    <Container>
      <Circle color={colorStatus[status]} weight="fill" />
      <select
        name=""
        id=""
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          handleStatus(e.target.value)
        }}
      >
        <option value="pending">Pendente</option>
        <option value="preparing">Preparando</option>
        <option value="delivered">Entregue</option>
      </select>
    </Container>
  );
}
