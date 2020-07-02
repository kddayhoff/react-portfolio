import React from "react"
// import CardDeck from 'react-bootstrap/CardDeck'
import Card from "react-bootstrap/Card"
// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import ProfilePic from ".src/assets/profilepicture.jpg"

//flex cards / grid

function Project(props) {
    return (
       
       
        <Card>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
              {props.live}
              {props.repo}
            </Card.Text>
          </Card.Body>
        </Card>
        


    )
  }

export default Project;
