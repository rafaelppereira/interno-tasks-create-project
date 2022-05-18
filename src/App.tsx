import { useState } from "react";
import { Card } from "./components/Card";
import { Title } from "./components/Title";
import { Container, Box, Grid } from "./styles/pages/Common";

import { v4 as createId } from 'uuid';
import toast from "react-hot-toast";

interface TasksProps {
  id: string;
  title: string;
  createdAt: string;
  hours: string;
  isComplete: boolean;
}

function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const handleAddNewTask = (value: string) => {
    const randomNumber = createId();

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const dateFormatted = day+"/"+month+"/"+year;

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const timeFormatted = hours+":"+minutes+":"+seconds;

    setTasks([
      {
        id: randomNumber,
        title: value,
        createdAt: dateFormatted,
        hours: timeFormatted,
        isComplete: false,
      },
      ...tasks
    ]);

    toast.success('Tarefa criada com sucesso');
  }

  const handleCompleteTask = (id: string) => {
    const updateTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    })

    setTasks(updateTasks)
    toast.success('Você completou essa tarefa!');

  }

  const handleRemoveTask = (id: string) => {
    const findTask = tasks.filter((task) => task.id !== id);
    setTasks(findTask);
    toast.success('Tarefa removida com sucesso');
  }

  return (
    <Container>
      <Box>
        <Title 
          title="Todas as tarefas" 
          description="Essas são todas as suas tarefas do dia."
          onAddNewTask={handleAddNewTask} 
        />
      
        <Grid>
          {tasks.map(item => (
            <Card 
              key={item.id} 
              id={item.id}
              title={item.title}
              createdAt={item.createdAt} 
              hours={item.hours} 
              isComplete={item.isComplete}
              onRemoveTask={handleRemoveTask}
              onCompletedTask={handleCompleteTask}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default App;

