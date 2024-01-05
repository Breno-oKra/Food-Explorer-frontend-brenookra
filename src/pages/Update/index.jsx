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
  const navigate = useNavigate()
  const { user, signOut} = useAuth();
  const params = useParams()
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
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
    console.log(ingredients)
  }
  function RemoveIngredients(ingDelete) {
    setIngredients((prevState) => prevState.filter((ing) => ing !== ingDelete));
  }
 
  async function handleUpdate() {
     
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
        const data = res.data.FoodUpdated
        try {
          
          if (typeof image == "object") {   
            console.log(typeof image)
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", image);
            
            const response = await api.patch(
              `/foods/image/${data.id}`,
              fileUploadForm,{withCredentials:true}
            );
            console.log(response)
            setImage(response.data.avatar);
          
          }
        } catch (error) {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possivel atualizar o perfil");
          }
        } 
       
      });
      
    alert("Comida Criada com sucesso");
    navigate(-1)
  }
  useEffect(() => {
    async function FetchFood(){
      const res = await api.get(`/foods/${params.id}`,{withCredentials:true})
      const result  = res.data
      if(result){
        let ing = []
        setName(result.name)
        setCategory(result.category)
        setDescription(result.description)
        setImage(result.image)
        setPrice(result.value)
        result.ingredients.map((item) => {
          ing.push(item.name)
        })
        setIngredients(ing)
      }
      
    }
    if(params.id){
      FetchFood()
    }
  },[])

  return (
    <Container>
      <Header />
      <Box>
        <button  onClick={() => navigate(-1)}>
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
                defaultValue="Refeição"
                
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Refeição">Refeição</option>
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
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
            <Button title="Excluir prato" color="#0D161B" />
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
