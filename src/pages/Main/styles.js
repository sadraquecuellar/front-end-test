import styled from 'styled-components';
// #333132
// #c41610
// #faa61b
// #f7ec32


export const Text = styled.h1 `
  font-weight: 400;
  margin: 5px;
  font-size:20px;
  text-transform: uppercase;
  display:flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const TextCard = styled.h4 `
  font-weight: 500;
  margin: 5px;
  font-size:18px;
  display:flex;
  align-items: center;
  justify-content: center;
  color: #000;
  
`;

export const Header = styled.div `
  width: 100%;
  padding:5px;
  font-size: 24px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  color: #fff;
  div{
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    }
  }
  .leftSide{
    border-right: 1px solid #ccc;
  }
  .rightSide{
    border-left: 1px solid #ccc;

    a{ 
      display:flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
    }
  }
`;

export const HeaderTitle = styled.div `
  padding:20px 30px 20px 30px;
  font-size: 72px;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #c41610, #faa61b );
  -webkit-background-clip: text;
  color: transparent;
  /* color: #333132; */
  @media (max-width: 800px){
    font-size: 50px;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content:center;
  margin-bottom:20px;
`;

export const InputTask = styled.div`
  margin-top:20px;
  margin-bottom: 20px;
  width: 80%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content:space-between;
  @media (max-width: 800px){
    width:100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content:center;
  }
  textarea{
    background-color:#d2d2d2;
    border-radius: 5px;
    font-size: 22px;
    width: 80% !important;
    height: 100px !important;
    @media (max-width: 800px){
      height: 120px !important;
      margin-bottom: 15px !important;
    }
  }
`;

export const Tasks = styled.div `
  width:100%;
  display: grid;
  flex-flow:row;
  align-items: center;
  justify-content:center;
	grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 800px){
    width:100%;
    display: flex;
    flex-flow:column;
    align-items: center;
    justify-content:center;
  }
`;
export const Card = styled.div`
  position: relative;
  padding:5px;
  height:170px;
  border: 1px solid #faa61b;
  background:#faa61b;
  border-radius:10px;
  margin:10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 800px){
    width:80%;
  }

  i{
    cursor: pointer;
  }

  div{
    border-top: 1px dashed #999;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    display: flex;
    flex-flow:row;
    align-items: center;
    justify-content: space-around;
    padding:3px 15px 0 15px;
  }
`