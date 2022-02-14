import { GlobalStyle } from '../src/styles/global';
import './_app.css';
import Footer from '../src/components/Footer';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;