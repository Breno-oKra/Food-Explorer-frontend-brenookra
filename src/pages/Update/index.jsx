import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Box, Form, ContainerButton } from "./style";
import { ButtonInput } from "../../components/ButtonInput";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";

export function Update() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const params = useParams();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
    /* const imagePreview = URL.createObjectURL(file); */
  }
  function AddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredients]);
    setNewIngredients("");
   
  }
  function RemoveIngredients(ingDelete) {
    setIngredients((prevState) => prevState.filter((ing) => ing !== ingDelete));
  }
  String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
  };
  function mascaraMoeda(evento) {

    let priceString = evento.target.value.replace(/[^\d]+/gi, "").reverse()
    var resultado = "";
    var mascara = "##.###.###,##".reverse();

    for (var x = 0, y = 0; x < mascara.length && y < priceString.length;) {
      
      if (mascara.charAt(x) != "#") {
        resultado += mascara.charAt(x);
        x++;
        
      } else {
        resultado += priceString.charAt(y);
        
        y++;
        x++;
      }
    }
    
    setPrice(resultado.reverse())
  }
  async function handleUpdate() {
    try {
      await api
      .post(
        `/foods/${params.id}`,
        {
          name,
          description,
          value: price,
          user_id: user.id,
          category,
          ingredients,
        },
        { withCredentials: true }
      )
      .then(async (res) => {   
        try {    
          const data = res.data.FoodUpdated;
         
          if (typeof image == "object") {
           
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", image);
            
            const response = await api.patch(
              `/foods/image/${data.id}`,
              fileUploadForm,
              { withCredentials: true }
            );
          
            setImage(response.data.avatar);
          }
          alert("Comida Atualizada com sucesso");
          navigate(-1);
        } catch (error) {
          if (error.response.status == 401) {
            alert("Não Autorizado");
          }
        }
      });
    } catch (error) {
      if(error.response.status == 401){
        alert("Usuario Deslogado, Por favor faça login novamente")
        signOut()
        navigate("/")
        return
      }
      
      alert("Não foi Possivel Atualizar essa comida")
      
    }
   
  }
  async function handleDelete() {
    const confirm = window.confirm("Deseja remover esta Comida?");
    if (confirm) {
      await api.delete(`/foods/${params.id}`, { withCredentials: true });
      navigate("/");
    }
  }
  useEffect(() => {
    async function FetchFood() {
      try {
        const res = await api.get(`/foods/${params.id}`, {
          withCredentials: true,
        });
        const result = res.data;
        if (result) {
          let ing = [];
          setName(result.name);
          setCategory(result.category);
          setDescription(result.description);
          setImage(result.image);
          setPrice(result.value);
          result.ingredients.map((item) => {
            ing.push(item.name);
          });
          setIngredients(ing);
        }
      } catch (error) {
        if(error.response.status == 401){
        navigate("/")
          alert("Você foi Deslogado")
          signOut()
         
        }
   
        
      }
    }
    if (params.id) {
      FetchFood();
    }
  }, []);

  return (
    <Container>
      <Header />
      <Box>
        <button onClick={() => navigate(-1)}>
          <CaretLeft /> voltar
        </button>
        <h2>Editar prato</h2>
        <Form>
          <div className="align-1">
            <fieldset>
              <legend>imagem do prato</legend>
              <label htmlFor="imgFood">
                <div>
                  <UploadSimple />
                  <span>Selecione imagem</span>
                </div>
                <input
                  type="file"
                  id="imgFood"
                  placeholder="Selecione Imagem"
                  onChange={handleChangeImage}
                />
              </label>
            </fieldset>
            <fieldset>
              <legend>Nome</legend>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Salada Ceasar"
              />
            </fieldset>
            <fieldset>
              <legend>Categoria</legend>

              <select
                name="category"
                id="1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Refeição">Refeição</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Lanches">Lanches</option>
                <option value="Janta">Janta</option>
                
              </select>
            </fieldset>
          </div>
          <div className="align-2">
            <fieldset>
              <legend>Ingredients</legend>
              <div>
                {ingredients.map((name, index) => (
                  <ButtonInput
                    key={String(index)}
                    title={name}
                    onclick={() => RemoveIngredients(name)}
                  />
                ))}

                <ButtonInput
                  title={newIngredients}
                  onChange={(e) => setNewIngredients(e.target.value)}
                  onclick={AddIngredients}
                  isNew
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Preço</legend>
              <input
                id="inputMoney"
                type="Text"
                onChange={(e) => mascaraMoeda(e)}
                value={price}
              />
            </fieldset>
          </div>
          <fieldset>
            <legend>Descrição</legend>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </fieldset>
          <ContainerButton>
            <Button
              title="Excluir prato"
              color="#0D161B"
              onClick={handleDelete}
            />
            <Button
              title="Salvar alterações"
              color="#AB4D55"
              onClick={handleUpdate}
            />
          </ContainerButton>
        </Form>
      </Box>
      <Footer />
    </Container>
  );
}
