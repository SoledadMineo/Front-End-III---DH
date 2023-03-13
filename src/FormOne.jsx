import React, { useState } from 'react'
import Card from './Card';
import { FormContainer, Button } from './styles/Styled';

const logo = "https://www.topimagenes.net/wp-content/uploads/2016/04/homer-simpson-4-comiendo-rosquilla.jpg";

const FormOne = () => {

  const [nombre, setNombre] = useState("");
  const [comida, setComida] = useState("");
  const [validar, setValidar] = useState("");
  const [card, setCard] = useState("");  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(nombre);
    console.log(comida);

    if(nombre.trim().length>=3 && comida.length>=6){
      setCard(true);
      setValidar(false);
    }else{
      setCard(false);
      setValidar(true);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={100}/>
        <h2 color='#2B3467'>Elige tu comida favorita</h2>
      </div>
      <form id="formulario">
        <div content = "row">
          <input
            type={"text"} placeholder={"Ingresa tu nombre"} value={nombre} onChange={(e) =>setNombre(e.target.value)}
          />
          <input
            type={"text"} placeholder={"Ingresa tu comida favorita"} value={comida} onChange={(e) =>setComida(e.target.value)}
          />
      </div>
      </form>
        <div>
          <Button form='formulario' btn="submit">Enviar</Button>
        </div>
        <div>
          {
            validar && (<p>Por favor chequea que la información sea correcta.</p>)
          }
          {
            card && (<Card nombre={nombre} comida={comida} ></Card>)
          }
      </div>
    </FormContainer>
  )
}

export default FormOne