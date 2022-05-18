import { useState } from "react";
import { Container, Data, InputContainer } from "./styles";

import { RiSendPlaneFill } from 'react-icons/ri';

interface TitleProps {
  title: string;
  description: string;
  onAddNewTask: (value: string) => void;
}

export function Title({ title, description, onAddNewTask }: TitleProps) {
  const [input, setInput] = useState('');

  return (
    <Container>
      <Data>
        <h2>{title}</h2>
        <p>{description}</p>
      </Data>
      <InputContainer>
        <input type="text" placeholder="Digite uma nova tarefa..." onChange={(e) => setInput(e.target.value)} />
        <button
          type="button"
          disabled={input == '' && true}
          onClick={() => onAddNewTask(input)}
          title="Digite no campo para enviar"
        >
          <RiSendPlaneFill />
        </button>
      </InputContainer>
    </Container>
  );
}