import React from 'react';
import homepageImage from './homepage-image.jpg'; // Import the image file

function HomePage() {
  return (
    <div>
      <h2>Welcome to Our Website!</h2>
      <p>This is the homepage of our app.</p>
      <img src={homepageImage} alt="Homepage" />
    </div>
  );
}

export default HomePage;