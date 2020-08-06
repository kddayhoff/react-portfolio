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
          <Card.Title >Who...</Card.Title>
          <Card.Text style={styles.cardText}>
          ...am I? A full-stack MERN web developer with an interest in cyber security and UI/UX design. Denver born, England educated, Nashville citizen. I first studied history and fine arts at Metropolitan State University of Denver, graduating Summa Cum Laude. I left Denver for the UK and obtained my MA in Conservation of Museum and Archaeological Objects. It was this degree that brought me to Nashville, where I worked to help open the new Tennessee State Museum. After a thrilling experience in this multi-million dollar project, I pursued my certificate in full-stack web develpment at Vanderbilt University in 2020.{" "}
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
