import React from 'react'
import { Header, Anchor } from '../css/style'


export const HeaderWin = () => {
  return (
    <>
        <Header>
            <Anchor href="#">
                Sacola
            </Anchor>  
            <Anchor href="#">
                Pagamento
            </Anchor>  
            <Anchor href="#">
               Confirmação
            </Anchor>  
         </Header>
    </>
  )
}
