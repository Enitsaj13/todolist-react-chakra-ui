import React, { useState, useEffect } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import ToggleColorMode from './Theme/ToggleColorMode';

const App = () => {
  /* Initial data or dummy data */
  const initialTodos = [
    {
      id: 1,
      body: 'Learn React',
    },
    {
      id: 2,
      body: 'Learn Chakra UI',
    },
  ];

  /* State that holds the todos data (dummy data before) */
  const [todos, setTodos] = useState(
    /* Parse the JSON to the localStorage */
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  /* Used the useEffect method to store the data in the localStorage */
  useEffect(() => {
    /* Stringify the JSON and setItem the localStorage */
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /* Delete function */
  function deleteTodo(id) {
    /* Used the filter method to delete the id */
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  /* Add function */
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  /* All the components */
  return (
    <div>
      <VStack p={4}>
        <ToggleColorMode />
        <Heading
          marginTop={4}
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, blue.500, blue.300, green.500)'
          bgClip='text'
        >
          Todo Application
        </Heading>
        <ListTodo todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </div>
  );
};

export default App;
