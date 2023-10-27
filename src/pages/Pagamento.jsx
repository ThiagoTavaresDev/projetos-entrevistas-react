
import { HeaderWin } from '../Components/HeaderWin' 
import { NextToPay } from '../Components/NextToPay'
import { Container ,  Section, CountContainer, DivContainCount, Label, Input, InputDiferente} from '../Style'


export const Pagamento = () => {
  return (
    <>
        
        <Container>
            <HeaderWin/>
            
        <Section>
        <h1>Cartão de Crédito</h1>
        <Label >  
           
            <span>Número</span>
         </Label > 
            <Input />
            <Label >  
           
           <span>Nome do titular do cartão</span>
        </Label > 
           <Input />

           
         
           <div id='divContainInput'>
            
            <div>
            <Label>
            <span>Data de validade</span>
           </Label>
                <InputDiferente />
            </div>
            
            <div>
            <Label>
            <span>Código CVV</span>
           </Label>
                <InputDiferente />
            </div>
            </div>
        

        </Section>

        <CountContainer>

            <DivContainCount>
              <NextToPay/>
            </DivContainCount>
             
        </CountContainer>
        
      </Container>
    
    
    </>
  )
}
