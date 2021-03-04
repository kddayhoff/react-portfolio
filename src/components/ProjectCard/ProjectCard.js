import React from "react";
// import CardDeck from 'react-bootstrap/CardDeck'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import ProfilePic from ".src/assets/profilepicture.jpg"

const styles = {
    card: {
        background: "gainsboro",
        opacity: 0.85,
        margin: 21,
        border: "solid",
        borderColor: "black",
        borderWidth: 5,
        borderRadius: 5,
        padding: 0,
        minWidth: 300,
        maxWidth:300,
        fontFamily: 'Sawarabi Gothic',
        flex:1
    },
}

function Project(props) {
  return (
    // <Container className="container-fluid d-inline-flex">
    //   <Row>
    //     <Col fluid xs={8} md={6} lg={6}>
          <Card style={styles.card}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body >
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                <br></br>
                {props.description}
                <br></br>
                <br></br>
                <Card.Link href={props.live}>Deployed Application</Card.Link>
                <br></br>
                <br></br>
                <Card.Link href={props.repo}>Application Code Repository</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Project;
