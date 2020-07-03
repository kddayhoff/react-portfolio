import React, {Component} from 'react';
import About from "./components/About/About";
import ContactCard from "./components/ContactCard/Contact";
import Project from "./components/ProjectCardContent";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./assets/style.css";
import "./App.css";

// body in css put in app.css global styling


class App extends Component {
  render (){
    return (
      
     
      <body>
        <Navbar>
      </Navbar>
      <div>
        <About />
        <Project /> 
        <ContactCard />
    </div>
        <Footer />
    </body>
     
    );
  }
}

export default App;


