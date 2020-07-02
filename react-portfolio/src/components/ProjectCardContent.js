import React, {Component} from 'react';

import ProjectCard from './ProjectCard/ProjectCard';

const projects = [{
    id: 1,
    title: "Route 404",
    image: require("../assets/images/route-404.png"),
    description: "Track your travels with this app. Create a unique user login, search the location of your choosing, and write notes about your journey. Full-stack application utilizing HTML5, CSS3, JavaScript, Express, Node.js, and Sequelize",
    live: "https://route-404.herokuapp.com/",
    repo: "https://github.com/kddayhoff/route-404"
  }, 
  {
  id: 2,
  title: "Space!",
  image: require("../assets/dev-page.PNG"),
  description: "This project was created by four brilliant people. It allows you to select planets within our solar system and learn about them, see pictures of them, and compare them! HTML5, CSS3, JavaScript",
  live: "https://kddayhoff.github.io/space/",
  repo: "https://github.com/kddayhoff/space"
  },
  {
  id: 3,
  title: "Employee Template Generator App",
  image: require("../assets/meet-between-preview.PNG"),
  "description": "Use a Command Line Interface (CLI) to create a client-side employee generator.",
  repo: "https://github.com/kddayhoff/template-engine"
  },
  {
  id: 4,
  title: "Password Generator",
  image: require("../assets/password-generator-screenShot.PNG"),
  description: "Use a Command Line Interface (CLI) to create a client-side employee generator.",
  live: "https://armcbride.github.io/password-generator/",
  repo: "https://github.com/armcbride/password-generator/"
  },
  {
  id: 5,
  title: "Save Your Thoughts",
  image: require("../assets/thought-demo.PNG"),
  description: "Keep your thoughts organized in one place with this NodeJs and Express application",
  live: "https://thought-saver.herokuapp.com/",
  repo: "https://github.com/armcbride/thought-saver"
  },
  {
  id: 6,
  title: "Slasher Fic",
  image: require("../assets/slasher-front.PNG"),
  description: "This Slasher-fic starter is a table top game for up to 6 adult players. The rules are loosely based on the well known Dungeons and Dragons stats and dice rolling mechanics. This fic is based loosely off of H.H. Holmes and his murder hotel. The application features HTML, CSS, and Javascript. ",
  live: "https://armcbride.github.io/slasher-fic/",
  repo: "https://github.com/armcbride/slasher-fic"
  },
  {
  id: 7,
  title: "Track That Workout",
  image: require("../assets/track-that-main.PNG"),
  description: "Stay organized on your daily workouts with a simple Mongo and Express application",
  live: "https://track-that-workout.herokuapp.com/",
  repo: "https://github.com/armcbride/track-that"
  }
  ];

class cardContent extends Component {
    
  constructor(props) {
        super(props); this.state ={projects}
      }
      render(){
    return (
        <>
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
        </>
    )
}
}
export default cardContent;