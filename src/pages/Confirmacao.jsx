import React from 'react'
import { ContainerPayment,  Section, ContainProducts, CountContainer, DivContainCount, ModalPaymentSucess} from '../Style'
import imagem1 from '../assets/image-1.svg'
import imagem2 from '../assets/image-2.svg'
import imagem3 from '../assets/image.svg'
import { Produto } from '../Components/Produto'
import { NextToPay } from '../Components/NextToPay'
import { HeaderWin } from '../Components/HeaderWin'


export const Confirmacao = () => {
  return (
    <>
    
    <ContainerPayment>
            <HeaderWin/>

            <ModalPaymentSucess>
                <div>
                <h1>Compra efetuada com sucesso</h1>
                <span>****.****.****.4545</span>
                <span>Bruce Wayne</span>
                <span>02/2027</span>
                </div>
                
            </ModalPaymentSucess>

        <Section>
                <h1 id='titleConfirm'>Produtos</h1>
            <ContainProducts>
              
                <Produto imagem={imagem3}  texto={`L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução`}/>
            </ContainProducts>

            <ContainProducts>
                <Produto imagem={imagem1}  texto={'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml'}/>
            </ContainProducts>

            <ContainProducts>
                <Produto imagem={imagem2} texto={'Senscience Inner Restore Intensif - Máscara Capilar 50ml'}/>
            
            </ContainProducts>

        </Section>

        <CountContainer>

            <DivContainCount>
              <NextToPay texto={'Voltar ao início do protótipo'}/>
            </DivContainCount>
             
        </CountContainer>
        
      </ContainerPayment>
    
    
    </>
  )
}
