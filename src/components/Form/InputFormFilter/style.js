import styled from 'styled-components';
import { theme } from '../../../theme';

export const Input = styled.input`
/* width: 30%; */
background-color: ${(props) => (props.readOnly ? `${theme.inputLock}`: `#fff`)};
border-radius: 10px;
border: 2px solid #ccc;
box-shadow: 2px 2px 3px #ccc;
height: 38px;
font-family: Arial, sans-serif;
font-size: 16px;
color: #333;
transition: all 0.9s ease-in-out;
padding:10px;

&&:focus{
    border: 2px solid ${theme.primaryDark};
    transition: all 0.9s ease-in-out;
}
`; 

export const ContainerFormSmall = styled.div`
width: 20%;
display: flex;
flex-direction: column;
transition: all 2s ;
transform: rotate(-360deg);
margin:0 10px;
/* @media (max-width: 860px) {
    width: 95%;
    transition: all 2s ;
    transform: rotate(360deg);
  } */

`; 
export const ContainerFormMedium = styled.div`
width: 30%;
display: flex;
transition: all 2s ;
transform: rotate(-360deg);
z-index: 1;
margin:0 10px;
flex-direction: column;
/* @media (max-width: 860px) {
    width: 95%;
    transition: all 2s ;
    transform: rotate(360deg);

  } */

`; 
export const ContainerFormBig = styled.div`
width: 90%;
display: flex;
flex-direction: column;
transition: all 2s ;
transform: rotate(-360deg);
margin:0 10px;
/* @media (max-width: 860px) {
    width: 95%;
    transition: all 2s ;
    transform: rotate(360deg);

  } */

`; 
export const Title = styled.label`
font-family: Monospace;
font-weight: 700;
font-size: 15px;
`; 
export const Space = styled.label`
font-family: Monospace;
font-weight: 900;
`; 
