import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import SPWideImage from '../../images/SP-Wide.png';
import KKWideImage from '../../images/KK-Wide.png';
import ExpMiamiWideImage from '../../images/EXP-Wide.png';


function Cards() {

  function handleProjectHover(project, skills) {
    
    const skillElements = skills.map((skill) => document.getElementById(skill));
  
    project.addEventListener('mouseenter', () => {
      skillElements.forEach((element) => {
        element.style.color = 'white';
      });
    });
  
    project.addEventListener('mouseleave', () => {
      skillElements.forEach((element) => {
        element.style.color = '';
      });
    });
  }

  function handleHoverEvent(event) {
    const project = document.getElementById(event.target.id);
    let skills = [];
    switch (event.target.id) {
      case 'project1':
        skills = ['html', 'css', 'js', 'sql', 'node', 'github', 'hbs'];
        break;
      case 'project2':
        skills = ['html', 'css', 'js', 'github'];
        break;
      case 'project3':
        skills = ['html', 'css', 'js', 'react', 'node'];
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
    const cards = document.querySelectorAll('.single-project');
    setCards(cards);

    if (window.innerWidth < 900) {
      setCardsToShow(1);
    }
  }, []);

  const updateCards = (cardsToShow) => {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsToShow) {
        card.style.display = 'inline-block';
      } else {
        card.style.display = 'none';
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
  }, [cardsToShow, currentIndex])
  
    return (
        <div className="projects appear">
 <div className="navCard">
    <a href="#" id="prev" onClick={previous}>&laquo;</a>
    </div>
	<div className="single-project">
		<Link to="/knickknack">
		<img src={KKWideImage} className="project-image" onMouseEnter={handleHoverEvent} id="project1"></img>
		<p className="project-description">
			<b>Full Stack Ecommerce Application</b>
			<br></br>
			- HTML, CSS, JS, SQL -
		</p>
	</Link>
	</div>
	<div className="single-project">
		<Link to="/exploremiami">
		<img src={ExpMiamiWideImage} className="project-image" onMouseEnter={handleHoverEvent} id="project2"></img>
		<p className="project-description">
			<b>Front End Travel Application</b>
			<br></br>
			- HTML, CSS, JS, Third Party APIs -
		</p>
	</Link>
	</div>

	<div className="single-project">
		<Link to ="/skullpatrol">
		<img src={SPWideImage} className="project-image" onMouseEnter={handleHoverEvent} id="project3"></img>
		<p className="project-description">
			<b>Full Stack DeFi Minting Application</b>
			<br></br>
			- HTML, CSS, JS, DeFi -
		</p>
	</Link>
	</div>
	<div className="navCard">
  <a href="#" id="nxt" onClick={next}>&raquo;</a>
</div>
</div>
    )
}

export default Cards