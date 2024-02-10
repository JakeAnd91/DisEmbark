import './App.css'

import React from 'react';

// Header component
const Header = () => {
  return (
    <header>
      <nav>
        <ul class="navbar">
          <li class="icon"><a href="/"><img src="https://cdn2.iconfinder.com/data/icons/ui-kit-developer-glyphs/16/GlyphIcons-Home-512.png" alt="Home" /></a></li>
          <li class="icon"><a href="/about">About</a></li>
        </ul>
      </nav>
      <h1>DisEmbark</h1>
    </header>
  );
};

// Main content component
const MainContent = () => {
  return (
    <main>
      <h2>Disability Access Service</h2>
      <p>TUTORIAL STUFF HERE</p>
    </main>
  );
};

// Footer component with navigation bar
const Footer = () => {
  return (
    <footer>
      <nav>
        <ul class="navbar">
          <li class="icon"><a href="/">Account</a></li>
          <li class="icon"><a href="/about">Home</a></li>
          <li class="icon"><a href="/contact">Favorites</a></li>
        </ul>
      </nav>
    </footer>
  );
};

// App component
const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
