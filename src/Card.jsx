import React from 'react'

const styles = {
  info: {
    margin: 0,
    color: "#FF0000"
  }
}

export const Card = (props) => {
  return (
    <div>
        <h1 style={styles.info}>Hola {props.nombre}!</h1>
        <h3>Sabemos que tu comida favorita es: </h3>
        <h2>{props.comida}</h2>
    </div>
  )
}


export default Card