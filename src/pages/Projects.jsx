import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../styles/Projects.css'; // Import the CSS

const images = [
  { img: '/images/gadiel.jpg', title: 'Project 1' },
  { img: '/images/mine2.jpg', title: 'Project 2' },
  { img: '/images/mine.jpg', title: 'Project 3' },
  { img: '/images/gadiel2.jpg', title: 'Project 4' },
  { img: '/images/ustp-gang.jpg', title: 'Project 5' },
  { img: '/images/group.jpg', title: 'Project 6' },
  
];

const Projects = () => {
  return (
    <section className="projects container">
      <h2>Projects</h2>
      <ul>
        <li><strong>Portfolio Website</strong> – A modern React-based personal portfolio.</li>
        <li><strong>Weather App</strong> – Real-time weather info using OpenWeather API.</li>
        <li><strong>Task Manager</strong> – A to-do app with React, Firebase, and responsive UI.</li>
      </ul>

      <ImageList
        cols={3}
        rowHeight={164}
        gap={12}
        sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}
      >
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: 8, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
};

export default Projects;
