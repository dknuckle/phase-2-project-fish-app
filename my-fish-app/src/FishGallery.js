import React from 'react';

const FishGallery = ({ fishData, handleLike }) => {
  return (
    <div>
      <h2>Fish Gallery</h2>
      {fishData.map((fish) => (
        <div key={fish.id}>
          <h3>{fish.name}</h3>
          <img src={fish.image} alt={fish.name} />
          <p>Likes: {fish.likes}</p>
          <button onClick={() => handleLike(fish.id)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default FishGallery;
