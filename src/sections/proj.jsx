import React from 'react';
import { Link } from 'react-router-dom';
import '../style/portfolio.css';
import Calculator from '../images/cal.png';
import que from '../images/que.png';
import timer from '../images/timer.png';
import grow from '../images/grow.png';

function Proj() {
    const projects = [
        {
            id: 1,
            title: 'Calculator',
            image: Calculator,
            description: 'A cartoon like basic calculator (TRY ME)',
            link: '/calc'
        },
        {
            id: 2,
            title: 'Questionnaire',
            image: que,
            description: 'A cartoon like design simple questions (TRY ME)',
            link: '/que'
        },
        {
            id: 3,
            title: 'Timer',
            image: timer,
            description: 'A cartoon like design timer (TRY ME)',
            link: '/timer'
        },
        {
            id: 4,
            title: 'We-GROW',
            image: grow,
            description: 'A Healthy website recipe',
            link: 'https://ustp.abovedigital.co/bombeo-daguinotas/'
        }
    ];

    return (
        <div id="proj">
            <h1>My Projects</h1>
            <div className="project-grid">
                {projects.map(project => (
                    project.link.startsWith('http') ? (
                        <a key={project.id} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
                            <h3>{project.title}</h3>
                            <img src={project.image} alt="img" />
                            <p className="description">{project.description}</p>
                        </a>
                    ) : (
                        <Link key={project.id} to={project.link} className="project-card">
                            <h3>{project.title}</h3>
                            <img src={project.image} alt="img" />
                            <p className="description">{project.description}</p>
                        </Link>
                    )
                ))}
            </div>
        </div>
    );
}

export default Proj;

