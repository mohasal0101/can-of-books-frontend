import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './welcome';
import { useAuth0 } from '@auth0/auth0-react';

function App () {
  const { isAuthenticated } = useAuth0();


  return (
    <>
      <Header />
      {isAuthenticated &&
        <BestBooks />
      }
      {!isAuthenticated &&
        <Welcome />
      }
      <Footer />

    </>
  );
}

export default App;