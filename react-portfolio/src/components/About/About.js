import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import profilepic from "../../assets/images/profilepicture.jpg"


const styles = {
  cardPic : {
    background: "gray",
    margin: 20,
    borderStyle: "solid",
    border: 50,
    borderColor: "black",

  },
  cardPicDos: {
    border: "solid",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 5
    
  },
  cardBio : {
    background: "gainsboro",
    opacity: 0.80,
    margin: 21,
    border: "solid",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 5,
    padding: 0,
    fontFamily: 'Sawarabi Gothic'
  },
  cardText: {
    color: "black",
    textStyle: "bold",
    fontStyle: "bold"
  },
  row: {
    margin: "20px"
  }
}


function About() {
  return (
    <Container fluid>
    <CardDeck style={styles.row}>
      <Row >
      <Col xs={8} md={5} lg={3}>
      <Card style={styles.cardPic}id="who" >
        <Card.Img variant="top" style={styles.cardPicDos}
        src={profilepic}/>
      </Card>
      </Col>
      <Col xs={8} md={6} lg={8}>
      <Card style={styles.cardBio}>
        <Card.Body >
          <Card.Title >Who</Card.Title>
          <Card.Text style={styles.cardText}>
          ...am I? Denver born, England educated, Nashville citizen. I first studied history and fine arts with a focus in cermics at Metropolitan State University of Denver, graduating Summa Cum Laude. I left for the UK and obtained my MA in Conservation of Museum and Archaeological Objects. It was this degree that brought me to Nashville, where I worked to help open the new Tennessee State Museum. I am now preparing for my future as full-stack MERN web-developer at Vanderbilt University.{" "}
          </Card.Text>
        </Card.Body>
       
      </Card>
      </Col> 
      </Row>
    </CardDeck>
   
    </Container>
  );
}

export default About;
