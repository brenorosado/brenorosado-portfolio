import { GlobalStyle } from '../src/styles/global';
import './_app.css';
import Menu from '../src/components/Menu';
import { useRef } from 'react';

const App = ({ Component, pageProps }) => {
  const pageRef = useRef(null);

  return (
    <>
      <Menu ref={pageRef} />
      <GlobalStyle />
      <Component {...pageProps} ref={pageRef} />
    </>
  );
};

export default App;