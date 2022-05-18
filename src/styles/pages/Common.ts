import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #121214;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 4rem 0;
  } 
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 2rem;
  margin: 0 auto;

  min-height: 500px;

  border-radius: 0.5rem;
  background-color: #1e1e20;

  @media (max-width: 1100px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    min-height: none;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  margin-top: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);  
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  
  }  
  
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);  
  }
`;
