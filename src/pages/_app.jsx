import { Provider as ReduxProvider } from 'react-redux';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '../app/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ReduxProvider store={store}>
      <NextAuthProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </NextAuthProvider>
    </ReduxProvider>
  );
};

export default MyApp;
