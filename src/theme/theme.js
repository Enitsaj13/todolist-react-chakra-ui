// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. Create a new theme object
const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
