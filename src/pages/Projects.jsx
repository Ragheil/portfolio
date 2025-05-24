import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../styles/Projects.css';

const images = [
  { img: '/images/gadiel.jpg', title: 'Project 1' },
  { img: '/images/mine2.jpg', title: 'Project 2' },
  { img: '/images/mine.jpg', title: 'Project 3' },
  { img: '/images/gadiel2.jpg', title: 'Project 4' },
  { img: '/images/ustp-gang.jpg', title: 'Project 5' },
  { img: '/images/group.jpg', title: 'Project 6' },
];

const videoItems = [
  { video: '/video/PigEx.mp4', title: 'PigEx Demo' },
];

const Projects = () => {
  const [openVideo, setOpenVideo] = React.useState(false);

  return (
    <section className="projects container">
      <h2>Projects</h2>
      <ul>
        <li><strong>Portfolio Website</strong> – A modern React-based personal portfolio.</li>
        <li><strong>PigEx</strong> – Mobile App for Pig farm.</li>
        <li><strong>Task Manager</strong> – A to-do app and deployed it on infinityfreeapp <a href="https://task-sync.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">Click here</a></li>
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

        {/* Show video preview */}
          {videoItems.map((item) => (
            <ImageListItem key={item.video}>
              <video
                src={item.video}
                muted
                loop
                playsInline
                onClick={() => setOpenVideo(true)}
                onLoadedMetadata={(e) => {
                  e.currentTarget.currentTime = 2; // Skip 2 seconds for preview
                }}
                style={{
                  borderRadius: 8,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
              />
            </ImageListItem>
          ))}

      </ImageList>

      {/* Modal Popup */}
      {openVideo && (
        <div className="video-modal" onClick={() => setOpenVideo(false)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setOpenVideo(false)}>×</button>
            <video
              src="/video/PigEx.mp4"
              controls
              autoPlay
              style={{ width: '100%', height: '100%', borderRadius: 12 }}
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
