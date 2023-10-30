import React from 'react'

export const NextToPay = ({texto}) => {
  return (
  <>
    <div>
    <span>Produtos: (3 itens)</span>
    <span>R$ 624,80</span>
  </div>
  <div>
    <span>Frete:</span>
    <span>R$ 624,80</span>
  </div>
  <div>
    <span>Desconto:</span>
    <span id='desconto-color'>R$ 4,80</span>
  </div>
  <div id='totalDiv'>
    <span>Subtotal:</span>
    <span>R$ 624,80</span>
  </div>
  <button>{texto}</button>
  </>
  )
}
