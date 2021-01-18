import styled from 'styled-components';

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background: #333132;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content:center;

  @media (min-width: 800px) {
    max-width: 500px;
    min-width: 0;
    min-height: 60vh;
    margin: 40px auto;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

export default Container;