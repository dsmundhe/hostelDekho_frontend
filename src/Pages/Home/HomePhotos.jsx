import React from 'react';
import './HomePhotos.css';

const photos = [
  {
    url: "https://i.pinimg.com/736x/cb/a3/b4/cba3b4cf005683bb227c1879eea57d48.jpg",
    name: "Modern Hostel Room"
  },
  {
    url: "https://i.pinimg.com/736x/af/21/56/af2156be969753406aa224f843d9b27a.jpg",
    name: "Study Area"
  },
  {
    url: "https://i.pinimg.com/736x/d4/0f/04/d40f04b1389aa255c45a22e2b0130fc9.jpg",
    name: "Dining Space"
  },
 
  {
    url: "https://i.pinimg.com/736x/0e/11/74/0e1174c23aa86618758927ea8f2581a9.jpg",
    name: "Reception Area"
  },
  {
    url: "https://i.pinimg.com/736x/07/c4/27/07c4274df3896387819b5bf1d99b59cf.jpg",
    name: "Lounge"
  },
];

const HomePhotos = () => {
  return (
    <div className="photo-gallery">
      {photos.map((item, index) => (
        <div key={index} className="photo-card">
          <img src={item.url} alt={item.name} />
          <div className="overlay">
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePhotos;
