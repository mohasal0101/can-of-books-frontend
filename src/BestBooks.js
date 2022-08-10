/* import { useAuth0 } from "@auth0/auth0-react";
 */import axios from "axios";
import React, { Component} from "react";
/* import Carousel from "react-bootstrap/Carousel";
 */
import "./Styling/BestBooks.css";

class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
 

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books`;
    const books = await axios.get(url);
    this.setState({
      books: books.data,
    });
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    /* TODO: render all the books in a Carousel */

    

    return (
      <div className="books-box">
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        {this.state.books.length > 0 ? (
          <div>
            {this.state.books.map((book) => (
              <div key={book._id} className="books-box">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Book collection is empty</p>
        )}
      </div>
    );
  }
}

export default BestBooks;