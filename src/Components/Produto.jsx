import React from 'react'

export const Produto = ({imagem, preco,desconto, texto}) => {
  return (
    <>
    <img src={imagem} alt="" /> 
    <p>{texto}</p>
    <div>
        <span>{desconto}</span>
        <span>{preco}</span>
    </div>
    </>
  )
}
