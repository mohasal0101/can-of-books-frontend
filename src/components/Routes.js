import LogInOut from './Auth0Provider';
import UserRender from './profile.js';
import Profile from '../About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddBook from './Add_Books';
import ManageBooks from './ManageBooks';
import UpdateBook from './UpdateBook';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BestBooks from '../BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RouteIf (){

    const {
        isAuthenticated,
      } = useAuth0();
    

    return (
        <Router>
          <Header />
          <Routes>
          <Route 
              exact path="/"
              element={<BestBooks />}
            >
               </Route>
            <Route 
              exact path="/Login"
              element={<LogInOut />}
            >
              
            </Route>
        

            {isAuthenticated && (
                <>
                <Route 
              exact path="/Profile"
              element={<UserRender />}
            >
              
            </Route>
            <Route 
              exact path="/About"
              element={<Profile />}
              
            >

            </Route>
        <Route 
            exact path="/AddBook"
            element={<AddBook />}
            
        >

        </Route>
             <Route 
              exact path="/DeleteBook"
              element={<ManageBooks />}
              
            >
              </Route>
              <Route path='/books/:id' element={<UpdateBook />}>

            </Route>
            
            </>)}
          
          </Routes>
          <Footer />
        </Router>
    )
}