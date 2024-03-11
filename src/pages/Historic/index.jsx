import { Header } from "../../components/Header";
import { Container, Box, BoxFood, BoxMobile } from "./style";

import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";

import { Circle } from "@phosphor-icons/react";
import { SelectBox } from "../../components/SelectBox";

export function Historic() {
  const [historic, setHistoric] = useState([]);
  const { user, signOut } = useAuth();

  useEffect(() => {
    async function dataLoad() {
      try {
        await api.get(`/historic`, { withCredentials: true }).then((res) => {
          setHistoric(res.data);
        });
      } catch (error) {
        if (error.response?.status === 401) {
          alert("Você Foi Deslogado");
          return signOut();
        }
        return;
      }
    }
    dataLoad();
  }, []);
  function filterStatus(status) {
    switch (status) {
      case "pending":
        return (
          <p>
            <Circle color="#AB222E" weight="fill" /> Pendente
          </p>
        );

      case "preparing":
        return (
          <p>
            <Circle color="#FBA94C" weight="fill" /> Preparando
          </p>
        );

      case "delivered":
        return (
          <p>
            <Circle color="#04D361" weight="fill" /> Entregue
          </p>
        );

      default:
        break;
    }
  }
  function FormatDate(date) {
    const dateNow = new Date(date);

    let day = dateNow.getDate().toString().padStart(2, "0");
    let month = String(dateNow.getMonth() + 1).padStart(2, "0");
    let Hours = dateNow.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${day}/${month} às ${Hours}`;
  }
  return (
    <Container>
      <Header />
      <Box>
        <div>
          <h2>Histórico de pedidos</h2>
          <BoxFood>
            <table>
              <thead>
                <tr>
                  <th>
                    <div>status</div>
                  </th>

                  <th>
                    <div>Código</div>
                  </th>

                  <th>
                    <div>Detalhamento</div>
                  </th>
                  <th>
                    <div>{user.role == "admin" ? "Cliente" : "Loja"}</div>
                  </th>
                  <th>
                    <div>Data e hora</div>
                  </th>
                </tr>
              </thead>
              {historic &&
                historic.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <td>
                        {user.role == "admin" ? (
                          <SelectBox value={item} />
                        ) : (
                          <div className="status">
                            {filterStatus(item.status)}
                          </div>
                        )}
                      </td>
                      <td>
                        <div>{item.id}</div>
                      </td>
                      <td>
                        <div>
                          <p>
                            {JSON.parse(item.description).map((i, index) => {
                              if (index + 1 == item.description.length) {
                                return `${i.quant} x ${i.name}`;
                              }
                              return `${i.quant} x ${i.name}, `;
                            })}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div>{item.cliOrSale}</div>
                      </td>
                      <td>
                        <p>{FormatDate(item.created_at)}</p>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
            <BoxMobile>
              {historic &&
                historic.map((item) =>
                  user.role == "admin" ? (
                    <div key={item.id}>
                      <div>
                        <p>{item.id}</p>
                        <p>{FormatDate(item.created_at)}</p>
                      </div>
                      <p>
                        {JSON.parse(item.description).map((i, index) => {
                          if (index + 1 == item.description.length) {
                            return `${i.quant} x ${i.name}`;
                          }
                          return `${i.quant} x ${i.name}, `;
                        })}
                      </p>
                      <div>
                        <SelectBox value={item} />
                      </div>
                    </div>
                  ) : (
                    <div key={item.id}>
                      <div>
                        <p>{item.id}</p>
                        <div className="status">
                          {filterStatus(item.status)}
                        </div>
                        <p>
                       
                       {FormatDate(item.created_at)}
                     </p>
                      </div>
                      <p>
                        {JSON.parse(item.description).map((i, index) => {
                          if (index + 1 == item.description.length) {
                            return `${i.quant} x ${i.name}`;
                          }
                          return `${i.quant} x ${i.name}, `;
                        })}
                      </p>
                    </div>
                  )
                )}
            </BoxMobile>
          </BoxFood>
        </div>
      </Box>
      <Footer />
    </Container>
  );
}
