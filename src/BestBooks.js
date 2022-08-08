import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Styling/BestBooks.css";
import "./Styling/Footer.css"

function BestBooks() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  let books = [];
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  /* TODO: render all the books in a Carousel */

  return isAuthenticated ? (
    <div className="books-box">
      <h2>My Favorite Books</h2>
      {books.length ? (
        <p>Book Carousel coming soon</p>
      ) : (
        <p>No Books Found x_x</p>
      )}
    </div>
  ) : (
    <div className="books">
      <h2>Log in to see your favorite books</h2>
      <button onClick={loginWithRedirect}>Log in</button>
    </div>
  );
}

export default BestBooks;