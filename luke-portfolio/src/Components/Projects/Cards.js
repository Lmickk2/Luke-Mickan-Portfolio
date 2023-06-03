import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import SPWideImage from "../../images/SP-Wide.png";
import KKWideImage from "../../images/KK-Wide.png";
import TheEggWide from "../../images/TheEgg-Wide.png"
import GenieWide from "../../images/Genie-Wide.png";
import PWWide from "../../images/PW-wide.png";

function Cards() {
  function handleProjectHover(project, skills) {
    const skillElements = skills.map((skill) => document.getElementById(skill));
  
    if (window.innerWidth >= 900) {
      project.addEventListener("mouseenter", () => {
        skillElements.forEach((element) => {
          element.style.color = "#303030";
        });
      });
  
      project.addEventListener("mouseleave", () => {
        skillElements.forEach((element) => {
          element.style.color = "";
        });
      });
    } else if (window.innerWidth <= 1024) {
      skillElements.forEach((element) => {
        element.style.color = "#303030";
      });
    }
  }
  
  

  function handleHoverEvent(event) {
    const project = document.getElementById(event.target.id);
    let skills = [];
    switch (event.target.id) {
      case "project1":
        skills = ["react", "css", "js", "graphql", "node", "github", "mongo"];
        break;
      case "project2":
        skills = ["react", "css", "js", "graphql", "node", "github", "mongo"];
        break;
      case "project3":
        skills = ["react", "css", "js", "graphql", "node", "github", "mongo"];
        break;
      case "project4":
        skills = ["html", "css", "js", "react", "node"];
        break;
        case "project5":
        skills = ["html", "css", "js", "sql", "node", "github", "hbs"];
        break;
      default:
        break;
    }
    handleProjectHover(project, skills);
  }

  const [cardsToShow, setCardsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cards = document.querySelectorAll(".single-project");
    setCards(cards);
  
    if (window.innerWidth < 900) {
      setCardsToShow(1);
    } else {
      setCardsToShow(3);
    }
  }, []);
  

  const updateCards = (cardsToShow) => {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsToShow) {
        card.style.display = "inline-block";
      } else {
        card.style.display = "none";
      }
    });
  };

  useEffect(() => {
    updateCards(cardsToShow);
  }, [cardsToShow, currentIndex]);

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsToShow);
    }
  };

  const next = () => {
    if (currentIndex + cardsToShow < cards.length) {
      setCurrentIndex(currentIndex + cardsToShow);
    }
  };

  useEffect(() => {
    updateCards(cardsToShow);
  }, [cardsToShow, currentIndex]);

  return (
    <div className="projects appear">
      <div className="navCard">
        <a href="#" id="prev" onClick={previous}>
          &laquo;
        </a>
      </div>
      <div className="single-project">
        <Link to="/codegenie">
          <img
            src={GenieWide}
            className="project-image"
            onMouseEnter={handleHoverEvent}
            id="project1"
          ></img>
          <p className="project-description">
            <b>Full Stack Coding Forum/A.I. Application</b>
            <br></br>- MERN Stack, CSS, GraphQL -
          </p>
        </Link>
      </div>
      <div className="single-project">
        <Link to="/plotweave">
          <img
            src={PWWide}
            className="project-image"
            onMouseEnter={handleHoverEvent}
            id="project2"
          ></img>
          <p className="project-description">
            <b>Full Stack Reading/Writing App</b>
            <br></br>- MERN Stack, CSS, GraphQL -
          </p>
        </Link>
      </div>
      <div className="single-project">
        <Link to="/theegg">
          <img
            src={TheEggWide}
            className="project-image"
            onMouseEnter={handleHoverEvent}
            id="project3"
          ></img>
          <p className="project-description">
            <b>Full Stack Restaurant Application</b>
            <br></br>- MERN Stack, CSS, GraphQL -
          </p>
        </Link>
      </div>

      <div className="single-project">
        <Link to="/skullpatrol">
          <img
            src={SPWideImage}
            className="project-image"
            onMouseEnter={handleHoverEvent}
            id="project4"
          ></img>
          <p className="project-description">
            <b>Full Stack DeFi Minting Application</b>
            <br></br>- HTML, CSS, JS, DeFi -
          </p>
        </Link>
      </div>
      <div className="single-project">
        <Link to="/knickknack">
          <img
            src={KKWideImage}
            className="project-image"
            onMouseEnter={handleHoverEvent}
            id="project5"
          ></img>
          <p className="project-description">
            <b>Full Stack Ecommerce Application</b>
            <br></br>- HTML, CSS, JS, SQL -
          </p>
        </Link>
      </div>
      <div className="navCard">
        <a href="#" id="nxt" onClick={next}>
          &raquo;
        </a>
      </div>
    </div>
  );
}

export default Cards;
