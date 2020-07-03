
import React from "react"
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";


const styles = {
    cardPic : {
      background: "gray",
      margin: 20,
      borderStyle: "solid",
      border: 50,
      borderColor: "black",
      
  
      // width: 300
    },
    cardPicDos: {
      border: "solid",
      borderColor: "black",
      borderWidth: 5,
      borderRadius: 5
      
    },
    cardBio : {
      background: "gainsboro",
      opacity: 0.70,
      margin: 21,
      border: "solid",
      borderColor: "black",
      borderWidth: 5,
      borderRadius: 5,
      padding: 0
    },
    cardText: {
      color: "black",
      textStyle: "bold"
    }
  }

function Contact() {
    return (
            <Container fluid>
              <Col xs={8} md={6} lg={10}>
              
              <Card style={styles.cardBio}>
                <Card.Body >
                  <Card.Title id="how" >How...</Card.Title>
                  <Card.Text style={styles.cardText}>
                  ...To get in contact with me:
                </Card.Text> 

                  <Card.Link href="https://www.linkedin.com/in/kddayhoff/" activeClassName="active">LinkedIn
                  </Card.Link>
                  <Card.Link href="https://github.com/kddayhoff" activeClassName="active">GitHub
                  </Card.Link>
                  <Card.Link href="https://drive.google.com/file/d/18uEETo-tDInBhKMJTRE8y058ieaqAx3z/view?usp=sharing" activeClassName="active">Resume
                  </Card.Link>
                 
                </Card.Body>
               
              </Card>
              </Col>           
           
            </Container>
          );
        }
        
        export default Contact;

