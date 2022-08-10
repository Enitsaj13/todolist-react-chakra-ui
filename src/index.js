import React from 'react';
import ReactDOM from 'react-dom/client';

/* import `ChakraProvider` component*/
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

/* import the `theme` */
import theme from './theme/theme';

/* import the `App` component */
import App from './App';

/* import the css */
import './index.css';

/* font */
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
