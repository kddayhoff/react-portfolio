import React, {Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import ProjectCard from './ProjectCard/ProjectCard';
import Container from 'react-bootstrap/Container';


const projects = [
  {
    id: 1,
    title: "Route 404",
    image: require("../assets/images/route-404.png"),
    description: "Track your travels with this app. Create a unique user login, search the location of your choosing, and write notes about your journey. Full-stack application utilizing HTML5, CSS3, JavaScript, Express, Node.js, and Sequelize",
    live: "https://route-404.herokuapp.com/",
    repo: "https://github.com/kddayhoff/route-404"
  }, 
  {
  id: 2,
  title: "Space! Project",
  image: require("../assets/images/space.png"),
  description: "This project was created by four brilliant people. It allows you to select planets within our solar system and learn about them, see pictures of them, and compare them! HTML5, CSS3, JavaScript",
  live: "https://kddayhoff.github.io/space/",
  repo: "https://github.com/kddayhoff/space"
  },
  {
  id: 3,
  title: "Person Directory App",
  image: require("../assets/images/person-directory.png"),
  "description": "This app gives you the ability to search for persons in a database by name, email, or number and sort them alphabetically. HTML5, CSS3, JavaScript, ReactJS",
  live: "https://kddayhoff.github.io/person-directory/",
  repo: "https://github.com/kddayhoff/person-directory"
  },
  {
  id: 4,
  title: "Random Password Generator",
  image: require("../assets/images/password-generator.png"),
  description: "Create a unique, more secure password with this password-generator. HTML5, CSS3, JavaScript",
  live: "https://kddayhoff.github.io/Random-Password-Generator/",
  repo: "https://github.com/kddayhoff/Random-Password-Generator"
  },
  // {
  // s
  {
  id: 6,
  title: "Notetaker App",
  image: require("../assets/images/notetaker.png"),
  description: "Take notes with this application. A user has the ability to save notes and view them later. HTML5, CSS3, JavaScript, Express, Node.",
  live: "https://note-taker-kdd.herokuapp.com/",
  repo: "https://github.com/kddayhoff/express-note-taker"
  },
  
  ];

class cardContent extends Component {
    
  constructor(props) {
        super(props); this.state ={projects}
      }
      render(){
    return (
        <Container>
        <CardDeck>
            {this.state.projects.map(project => (
              <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              live={project.live}
              repo={project.repo}
              /> 
            ))}  
          </CardDeck>
        </Container>
    )
}
}
export default cardContent;