import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
     width: 23.3125rem;
     height: 40.125rem;
     box-shadow: 2px 2px 20px grey;


`
export const Header = styled.header`
    width: 23.2575rem;
    height: 2.5rem;
    background-color: #FFFF;
    display: flex;
    justify-content: space-evenly;
  


`
export const Anchor = styled(Link)`
        color: #878787;
        font-size: 0.875rem;
        line-height: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        margin-top: 8px;

    &:hover{
        border-bottom: 4px solid black;
        color: #000000;
       
    }

`
export const Section = styled.section`
    width: 22.3125rem;
    height: 20.25rem;
    background-color: #fff;
    margin: 20px 8px;
    box-shadow: 1px 1px 5px #CCCCCC;
    

    h1{
        padding: 12px;
        font-size: 20px;
        font-weight: 400;
    }
    #divContainInput{
        display: flex;
        
    }

`
export const ContainProducts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:  center;
    
    width: 22.525rem;
    padding: 20px 10.5px;
    img{
         width: 60px;
         height: 60px;
         
    }

    p{
        width: 180px;
        margin-top: 10px;
        font-size: 0.75rem;
        font-weight: bold;
    }
    div{
        width: 69px;
        display: flex;
        flex-direction: column;
        font-size: 0.875rem;
        
    }
    

    div :first-child{
        color: #9B9B9B;
        text-decoration: line-through;
        margin-bottom: 5px;
    }
    div :last-child{
        font-weight: bold;

    }
  

`
export const CountContainer = styled.div`
    width: 23.625rem;
    height: 14.875rem;
    margin-top: 20px;
 
`
export const DivContainCount  = styled.div`
    width: 376.52px;
    height: 112.09px;
    padding: 28px 20px;
    margin: 0px auto;

    div{
        display: flex;
        justify-content: space-between;
        margin: 15px 0px;
        font-size: 0.875rem;
        font-family: 'Helvetica', sans-serif;
       
    }
    #totalDiv > span{
        color: black;
        font-weight: bold;
        font-size: 1rem;
    }
    #desconto-color{
        color: #9222DC;
        font-weight: bold;
    }
    button{
        border: 1px solid #9222DC;
        background-color: #9222DC;
        color: white;
        padding: 15px 71px;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.8;
    }
`
export const Label = styled.label`
    display: block;
    font-size: 0.875rem;
    margin: 10px 10px 0px;
    span{
        color: #515151;

    }
`
export const Input = styled.input`
    width: 333.47px;
    height: 44px;
    margin: 5px 10px;
    font-size: 0.875rem;
    padding-left: 8px;
    color: #000;
    font-weight: 400;
    outline: none;
    border: 1px solid rgba(0,0,0,0.18)
    
  
`
export const InputDiferente = styled.input`
    width: 160px;
    height: 44px;
    font-size: 0.875rem;
    margin: 5px 10px;
    padding-left: 8px;
    color: #000;
    font-weight: 400;
    outline: none;
    border: 1px solid rgba(0,0,0,0.18)
    

`