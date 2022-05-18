import { Container, ButtonContainer } from "./styles";
import { RiCheckFill, RiDeleteBin7Fill } from 'react-icons/ri';
import { motion } from "framer-motion";

interface CardProps {
  id: string;
  title: string;
  createdAt: string;
  hours: string;
  isComplete: boolean;
  onRemoveTask: (id: string) => void;
  onCompletedTask: (id: string) => void;
}

export function Card({ id, title, createdAt, hours, isComplete, onRemoveTask, onCompletedTask }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <Container disabled={isComplete ? true : false}>
        <h2>{title}</h2>
        <p>
          Tarefa criada em {createdAt}
        </p>
        <span>ás {hours}</span>

        <ButtonContainer>
          <button
            type="button"
            onClick={() => onCompletedTask(id)}
            disabled={isComplete ? true : false}
          >
            <RiCheckFill />
          </button>
          <button
            type="button"
            onClick={() => onRemoveTask(id)}
          >
            <RiDeleteBin7Fill />
          </button>
        </ButtonContainer>
      </Container>
    </motion.div>
  );
}