import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  const { isAuthenticated ,user } = useAuth0();
  return isAuthenticated && (<div style={{display: 'flex', justifyContent:'center', margin: '20px 0px'}}>
               
               <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={user.picture} alt={user.name}/>
      <Card.Body>
        <Card.Title>User Information</Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>Joind: {user.updated_at.slice(0,10)}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>);
}

export default Profile;