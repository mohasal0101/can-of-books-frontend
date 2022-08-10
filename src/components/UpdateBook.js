import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';


export default function UpdateBook() {

  const {id} = useParams();
  const [book, setBook] = useState();

  async function fetchData() {
    const {data} = await axios.get(`http://localhost:3001/books/${id}`)
    console.log(data);
    setBook(data)
  }

  const update = async (e) => {
    e.preventDefault();
    const data = {
      'title': e.target.title.value,
      'description': e.target.description.value,
      'status': e.target.status.value
    }
    await axios.put(`http://localhost:3001/books/${id}`, {data})
    swal("Book edited successfully!", "click the button to continue!", "success");


  }

useEffect(() => {
    fetchData();
    }, [])


  return (
    <Form style={{margin: "20px 40px"}} onSubmit={update}>
    <Form.Group className="mb-3" >
      <Form.Label>Book Title</Form.Label>
      <Form.Control id="title" type="text" defaultValue={book?.title} placeholder="Enter New Title" />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Book Description</Form.Label>
      <Form.Control id="description" type="text" defaultValue={book?.description} placeholder="Whats new?" />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Book Status</Form.Label>
      <Form.Control id="status" type="text" defaultValue={book?.status} placeholder="Did we miss the status?" />
    </Form.Group>

    <Button variant="primary" type="submit">
    Save Changes
    </Button>
  </Form>

  )
}