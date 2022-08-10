import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

/* Toggle function for dark mode and light mode */
const ToggleColorMode = () => {
  /* Declare the color mode and togglecolor mode */
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    /* Return this icon button component that holds the toggle color mode */
    <IconButton
      variant='outline'
      border='none'
      size='lg'
      icon={
        /* If color mode is light, change the icon and color, same with the dark mode. */
        colorMode === 'light' ? (
          <MoonIcon color='gray' />
        ) : (
          <SunIcon color='yellow' />
        )
      }
      isRound='true'
      alignSelf='flex-end'
      /* Trigger the button whenever click it using onClick function */
      onClick={toggleColorMode}
    />
  );
};

export default ToggleColorMode;
