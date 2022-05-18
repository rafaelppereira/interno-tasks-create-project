import styled from 'styled-components';

interface ContainerProps {
  readonly disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  border: 2px dashed;
  border-color: #454548;
  padding: 1rem;

  border-radius: 0.5rem;

  cursor: ${props => props.disabled ? 'not-allowed' : ''};

  h2 {
    font-size: 1rem;
    font-weight: 400;
    border-bottom: 1px solid #454548;
    padding-bottom: 1rem;

    opacity: ${props => props.disabled ? '0.5' : '1'};
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: 1rem;
    font-style: italic;
    opacity: ${props => props.disabled ? '0.5' : '1'};
  }

  span {
    margin-top: 1rem;

    display: inline-flex;
    color: #6699ff;
    opacity: ${props => props.disabled ? '0.5' : '1'};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #454548;
  padding-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #ffffff;

    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover {
      filter: brightness(0.9);
    }

    &:first-child {
      background-color: #48BB78; 
    }

    &:last-child {
      background-color: #E53E3E;
    }
  }
`;
