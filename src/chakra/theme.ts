// 1. Import the extendTheme function
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#FFEAEC', // Lavender Blush - background, text in headers
    200: '#301A4B', // Russian Violet - headers, text in body
    300: '#6DB1BF', // Maximum Blue - highligth primary
    400: '#F56476', // Fiery Rose - highlight secondary
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
  components: {},
};

export const theme = extendTheme({ colors });
