import axios from 'axios';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

export default class ManageBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          books: []
        }
      }

    getBooks = async () => {
        const res = await axios.get(`${process.env.REACT_APP_RES_LINK}/books`);
        this.setState({ books: res.data });
        console.log(this.state);
      }
    
    
    componentDidMount() {
        this.getBooks();
      }


    deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        this.getBooks()
      }


  render() {
    return (

        <Table style={{margin: "10px 30px"}} striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Title</th>
          <th>Status</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
      {
          this.state.books.map((item, idx) => 
          <tr>
              
              <td>{idx+1}</td>
              <td>{item.title}</td>
              <td>{item.status}</td>
              <td><button onClick={() => this.deleteBook(item._id)}>delete</button></td>
              <td><Link to={`/books/${item._id}`}><button>Update</button></Link></td>
           
        </tr>
          )
        }
      </tbody>
    </Table>
       
    )
  }
}