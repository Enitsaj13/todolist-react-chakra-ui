import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from '@chakra-ui/react';

/* Todo List function that holds the todos (data) and deleteTodo came from the App file */
const ListTodo = ({ todos, deleteTodo }) => {
  /* If no todos, result is the badge component */
  if (!todos.length) {
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No todos yet
      </Badge>
    );
  }

  /* Return if there is a List of todo */
  return (
    /* Return this vstack component that holds the list data */
    <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {/* Loop through the todos */}
      {todos.map((todo) => (
        /* Return this hstack component that holds the todo data */
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<DeleteIcon />}
            size='sm'
            isRound='true'
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default ListTodo;
