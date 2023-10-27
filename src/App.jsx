
import { Container ,  Section, ContainProducts, CountContainer, DivContainCount} from './style'
import imagem1 from './assets/image-1.svg'
import imagem2 from './assets/image-2.svg'
import imagem3 from './assets/image.svg'
import { Produto } from './Components/Produto'
import { NextToPay } from './Components/NextToPay'
import { HeaderWin } from './Components/HeaderWin'

function App() {
 
  return (
    <>
      <Container>
            <HeaderWin/>
            
        <Section>

            <ContainProducts>
                <Produto imagem={imagem3}  preco={'R$ 200,00'} desconto={'R$ 225,00'} texto={`L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução`}/>
            </ContainProducts>

            <ContainProducts>
                <Produto imagem={imagem1} preco={'R$ 299,00'} texto={'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml'}/>
            </ContainProducts>

            <ContainProducts>
                <Produto imagem={imagem2} preco={'R$ 99,90'} texto={'Senscience Inner Restore Intensif - Máscara Capilar 50ml'}/>
            
            </ContainProducts>

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

export default App
