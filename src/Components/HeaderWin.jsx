import React from 'react'
import { Header, Anchor } from '../Style'
import { Link } from 'react-router-dom'



export const HeaderWin = () => {
  return (
    <>
        <Header>
        
            <Anchor to='/' >
                Sacola
            </Anchor>  
            <Anchor to='/Pagamento'>
                Pagamento
            </Anchor>  
            <Anchor to='/confirmacao'>
               Confirmação
            </Anchor>  
      
         </Header>
    </>
  )
}
