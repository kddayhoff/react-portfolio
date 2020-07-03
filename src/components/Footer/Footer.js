import React from "react";
import Navbar from "react-bootstrap/Navbar"
import iconOne from "../../assets/images/icons8-html-5-48.png"
import iconTwo from "../../assets/images/icons8-javascript-48.png"
import iconThree from "../../assets/images/icons8-css3-48.png"
import iconFour from "../../assets/images/icons8-nodejs-48.png"
import iconFive from "../../assets/images/icons8-mongodb-48.png"
import iconSix from "../../assets/images/icons8-mysql-logo-50.png"
const styles = {
    footer: {
        background: "darkgray",
        border: "solid",
        borderColor:"black",
        borderWidth: "3px"
    }
}

function Footer() {
    return(
        <Navbar fixed="bottom" style={styles.footer}  >
        
          <img
            src={iconOne}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="html5 logo"
          />
           <img
            src={iconThree}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="html5 logo"
          />
           <img
            src={iconTwo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="html5 logo"
          />
           <img
            src={iconFour}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="html5 logo"
          />
           <img
            src={iconFive}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="html5 logo"
          />
           <img
            src={iconSix}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="html5 logo"
          />
      
      </Navbar>
    )};

    export default Footer