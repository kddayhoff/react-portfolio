import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";


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


function What() {
  return (
    <Container fluid>
    <CardDeck style={styles.row}>
      <Row >
      <Col xs={8} md={6} lg={8}>
      <Card style={styles.cardBio}>
        <Card.Body >
          <Card.Title >What</Card.Title>
          <Card.Text style={styles.cardText}>
          ..do I know? Below you will find many projects that show my progression and growth as a full-stack web-developer. Languages and technologies utilized and studied are: HTML, CSS, JavaScript, jQuery, Node.js, Express, MySql, Sequelize, MongoDB, Mongoose, ReactJS, Robo 3T, Bootstrap, Materialize UI, MaterialUI, API{" "}
          </Card.Text>
        </Card.Body>
       
      </Card>
      </Col> 
      </Row>
    </CardDeck>
   
    </Container>
  );
}

export default What;
