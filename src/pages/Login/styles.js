import styled from 'styled-components';

export const HeaderTitle = styled.div `
  padding:0px 30px 10px 30px;
  font-size: 68px;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #c41610, #faa61b );
  -webkit-background-clip: text;
  color: transparent;
  /* color: #333132; */
  @media (max-width: 800px){
    font-size: 60px;
  }
`;

export const HeaderSubTitle = styled.div `
  padding:0px 30px 20px 30px;
  font-size: 45px;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #faa61b, #c41610 );
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 800px){
    font-size: 35px;
  }
`;
export const Text = styled.h3 `
  a{
    font-weight: 400;
    margin: 15px;
    font-size:18px;
    /* text-transform: uppercase; */
    display:flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  
`;

export const Input = styled.div `
  width: 50%;
  height:35px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f2f2;
  border-radius:5px;
  margin-bottom: 15px;
  i{
    width: 7%;
  }
  input{
    margin: 0;
    padding: 0;
    padding-left: 10px;
    width: 85%;
    height: 100%;
    border-left: 1px solid #999 !important;
    border: none;
    background-color: #f2f2f2
  }
  @media(max-width: 800px){
    margin-bottom: 15px;
  }

`;
