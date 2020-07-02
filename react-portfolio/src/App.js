import React, {Component} from 'react';
import About from "./components/About/About";
import ContactCard from "./components/ContactCard/Contact";
import Project from "./components/ProjectCardContent";
import "./assets/style.css";
import "./App.css";

// body in css put in app.css global styling


class App extends Component {
  render (){
    return (
      <body>
      <div>
        <About />
        <ContactCard />
        <Project />
    </div>
    </body>
    );
  }
}

export default App;


