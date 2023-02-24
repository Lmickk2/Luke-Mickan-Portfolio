import SPWideImage from '../../images/SP-Wide.png';
import KKWideImage from '../../images/KK-Wide.png';
import ExpMiamiWideImage from '../../images/EXP-Wide.png';

import { useState, useEffect, useRef } from 'react';

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
  
  handleProjectHover(document.getElementById('project1'), ['html', 'css', 'js', 'sql', 'node', 'github', 'hbs']);
  handleProjectHover(document.getElementById('project2'), ['html', 'css', 'js', 'github']);
  handleProjectHover(document.getElementById('project3'), ['html', 'css', 'js', 'react', 'node']);
  
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

  const updateCards = () => {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsToShow) {
        card.style.display = 'inline-block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsToShow);
      updateCards();
    }
  };

  const next = () => {
    if (currentIndex + cardsToShow < cards.length) {
      setCurrentIndex(currentIndex + cardsToShow);
      updateCards();
    }
  };

    return (
        <div className="projects appear">
 <div className="navCard">
    <a href="#" id="prev" onClick={previous}>&laquo;</a>
    </div>
	<div className="single-project">
		<a href="./KnickKnack.html">
		<img src={KKWideImage} className="project-image" onMouseEnter={handleProjectHover} id="project1"></img>
		<p className="project-description">
			<b>Full Stack Ecommerce Application</b>
			<br></br>
			- HTML, CSS, JS, SQL -
		</p>
	</a>
	</div>
	<div className="single-project">
		<a href="./exploreMiami.html">
		<img src={ExpMiamiWideImage} className="project-image" onMouseEnter={handleProjectHover} id="project2"></img>
		<p className="project-description">
			<b>Front End Travel Application</b>
			<br></br>
			- HTML, CSS, JS, Third Party APIs -
		</p>
	</a>
	</div>

	<div className="single-project">
		<a href="./skullPatrol.html">
		<img src={SPWideImage} className="project-image" onMouseEnter={handleProjectHover} id="project3"></img>
		<p className="project-description">
			<b>Full Stack DeFi Minting Application</b>
			<br></br>
			- HTML, CSS, JS, DeFi -
		</p>
	</a>
	</div>
	<div className="navCard">
  <a href="#" id="nxt" onClick={next}>&raquo;</a>
</div>
</div>
    )
}

export default Cards