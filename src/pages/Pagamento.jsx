
import { useState } from 'react'
import { HeaderWin } from '../Components/HeaderWin' 
import { NextToPay } from '../Components/NextToPay'
import { Container ,  Section, CountContainer, DivContainCount, Label, Input, InputDiferente} from '../Style'


export const Pagamento = (props) => {
    const [valueInput, setValueInput] = useState('')
 
    function handleVerify(event){

        setValueInput(event.target.value)
        const regex = /^4[0-9]{12}(?:[0-9]{3})?$/g
        const regexName = /^[A-Z-a-z]/g
        if(valueInput.match(regex) || valueInput.match(regexName)){

        }
    

    }


  return (
    <>
        
        <Container>
            <HeaderWin/>
            
        <Section>
        <h1>Cartão de Crédito</h1>
        <Label >  
           
            <span>Número</span>
         </Label > 
            <Input onChange={handleVerify}/>
            <Label >  
           
           <span>Nome do titular do cartão</span>
        </Label > 
           <Input onChange={handleVerify}/>

           
         
           <div id='divContainInput'>
            
            <div>
            <Label>
            <span>Data de validade</span>
           </Label>
                <InputDiferente onChange={handleVerify}/>
            </div>
            
            <div>
            <Label>
            <span>Código CVV</span>
           </Label>
                <InputDiferente onChange={handleVerify}/>
            </div>
            </div>
        

        </Section>

        <CountContainer>

            <DivContainCount>
              <NextToPay texto={'Finalizar pedido'}/>
            </DivContainCount>
             
        </CountContainer>
        
      </Container>
    
    
    </>
  )
}
