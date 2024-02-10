import React from 'react';
import homepageImage from './homepage-image.jpg'; // Import the image file
import Tag from '../Tag.input/Tag';
import Pin from '../Pin/Pin';

function HomePage() {
  return (
    <div>
      <h2>Welcome to Our Website!</h2>
      <p>This is the homepage of our app.</p>


      
      <Pin cat='GlutenFree' />


      <img src={homepageImage} alt="Homepage" />
      <Tag name="Gluten Free"/>
      <Tag name="Wheelchair"/>
    </div>
  );
}

export default HomePage;