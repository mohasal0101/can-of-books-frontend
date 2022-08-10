import { Component } from "react";
import axios from "axios";
import AddForm from "./Form";
import swal from 'sweetalert';

export default class AddBook extends Component {

    createBook = async(a) => {
        a.preventDefault();
        const newBook = {
            "title": a.target.bookTitle.value,
            "description": a.target.bookDescription.value,
            "status": a.target.bookStatus.value
          }
          console.log(newBook)
          await axios.post('http://localhost:3001/books', {newBook});

        swal("Book has been added Successfully!", "click the button to continue!", "success");
        
    } 

    render(){
        return (
            <div style={{margin: "10px 30px"}}>
            <AddForm submitBook={this.createBook} />
            </div>
        )
    }
}