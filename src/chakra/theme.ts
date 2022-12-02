import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { extendTheme } from '@chakra-ui/react';
import { Button } from './button';

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#FFEAEC', // Lavender Blush - background, text in headers
      200: '#301A4B', // Russian Violet - headers, text in body
      300: '#6DB1BF', // Maximum Blue - highligth primary
      400: '#F56476', // Fiery Rose - highlight secondary
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: 'brand.100',
      },
    }),
  },
  components: {
    Button,
  },
});
