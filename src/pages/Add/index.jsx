import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Box, Form,ContainerButton } from "./style";
import { ButtonInput } from "../../components/ButtonInput";
import { Button } from "../../components/Button";

export function Add() {
  return (
    <Container>
      <Header />
      <Box>
        <button>
          <CaretLeft /> voltar
        </button>
        <h2>Adicionar prato</h2>
        <Form>
          <div className="align-1">
            <fieldset>
              <legend>imagem do prato</legend>
              <label htmlFor="imgFood">
                <div>
                  <UploadSimple />
                  <span>Selecione imagem</span>
                </div>
                <input type="file" id="imgFood" placeholder="Selecione Imagem" />
              </label>
            </fieldset>
            <fieldset>
              <legend>Nome</legend>
              <input type="text" placeholder="Ex: Salada Ceasar" />
            </fieldset>
            <fieldset>
              <legend>Categoria</legend>

              <select name="category" id="1" defaultValue="Refeição">
                <option value="Refeição">Refeição</option>
                <option value="Janta">Janta</option>
              </select>
            </fieldset>
          </div>
          <div className="align-2">
            <fieldset>
              <legend>Ingredients</legend>
              <div>
                <ButtonInput title="Pão Naan"/>
                <ButtonInput title="" isNew/>
              </div>
            </fieldset>
            <fieldset>
              <legend>Preço</legend>
              <input type="text" value={"R$ 00,00"} />
            </fieldset>
          </div>
          <fieldset>
            <legend>Descrição</legend>
            <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </fieldset>
          <ContainerButton>

          <Button title="Excluir prato" color="#0D161B"/>
          <Button title="Salvar alterações" color="#AB4D55"/>
          </ContainerButton>
        
        </Form>
      </Box>
      <Footer />
    </Container>
  );
}
