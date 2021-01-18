import styled from 'styled-components';

const Button = styled.div `
  a{
    cursor:pointer; 
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    background-color: #ccc;
    padding:10px;
    border: 1px solid #666;
    border-radius: 10px;
  }
  div:hover{
    background-color: #666;
  }
  
`

export default Button;