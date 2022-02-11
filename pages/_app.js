import { GlobalStyle } from '../src/styles/global';
import './_app.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;