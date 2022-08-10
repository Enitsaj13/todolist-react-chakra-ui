import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

/* Add todo function for add the content */
const AddTodo = ({ addTodo }) => {
  /* Declare the toast and its position */
  const toast = useToast();
  const position = 'top-right';

  /* Handle function for submit button */
  function handleSubmit(e) {
    /* Prevent to reload */
    e.preventDefault();
    /* Condition if the the whenever button clicked without fill-out the input */
    if (!content) {
      /* Output the toast */
      toast({
        title: 'Error.',
        status: 'error',
        description: 'Please enter some content 🥺',
        position: position,
        duration: 2000,
        isClosable: false,
      });
      /* Return none */
      return;
    }

    /* Dynamic data */
    const todo = {
      id: Math.random(),
      body: content,
    };
    /* Add the function add todo */
    addTodo(todo);
    /* Clear the content in input */
    setContent('');
  }

  /* State that holds the data */
  const [content, setContent] = useState('');

  return (
    /* Create a form for add */
    <form onSubmit={handleSubmit}>
      {/* Hstack is a div that holds the input and button */}
      <HStack mt={8}>
        <Input
          variant='flushed'
          placeholder='Add you want todo'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='blue' px={8} type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
