import React, { useState, useEffect } from 'react';
import Footer from './Footer'
import './Home.css';
import fiction from './fiction.svg';
import mystery from '/mystery.svg?url';
import non from '/non.svg?url';
import children from '/chi.svg?url';
import nf from '/non.jpg?url';
import f from '/f.jpg?url';
import m from '/m.jpg?url';
import c from '/c.jpg?url';
import a1 from "/authors/a1.jpg?url";
const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Fiction');
  const [currentIndex, setCurrentIndex] = useState(0);

  const authors = [
    { name: 'Roddy Doyle', image: a1 }
    // { name: 'Author Two', image: "" },
    // { name: 'Author Three', image: "" },
    // { name: 'Author Four', image: "" },
    // { name: 'Author Five', image: "" },
    // { name: 'Author Six', image: "" },
    // { name: 'Author Seven', image: "" },
    // { name: 'Author Eight', image: "" },
    // { name: 'Author Nine', image: "" },
    // { name: 'Author Ten', image: "" },
  ];

  const categories = [
    { name: 'Fiction', icon: fiction, description: 'Explore the latest bestselling fiction books. From romance to thrillers, we have it all.', image: f },
    { name: 'Non-Fiction', icon: non, description: 'Delve into the world of true stories and factual books that inspire and educate.', image: nf },
    { name: 'Mystery', icon: mystery, description: 'Get lost in suspenseful mystery novels that keep you guessing until the last page.', image: m },
    { name: 'Children\'s Books', icon: children, description: 'Find the best books for children, from fairy tales to fun learning.', image: c },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically move the slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === authors.length - 5 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slides every 3 seconds
  
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [authors.length]);
  


  return (
    <div className="app">
      {/* Navbar Section */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
  <div className="navbar-brand">
    <a href="/" className="brand-link">
      <span className="brand-logo">📚</span> Book Ease
    </a>
  </div>
  <div className="navbar-links">
    <a href="#home" className="nav-link">HOME</a>
    <a href="#categories" className="nav-link">CATEGORIES</a>
    <a href="#authors" className="nav-link">BOOKS</a>
    <a href="#contact" className="nav-link">CONTACT US</a>
  </div>
  <div className="dropdown-container">
    <button className="add-book-btn dropdown-button">Login</button>
    <div className="dropdown-menu">
      <a href="/login" className="dropdown-item">User</a>
      <a href="/slogin" className="dropdown-item">Seller</a>
      <a href="/alogin" className="dropdown-item">Admin</a>
    </div>
  </div>
</nav>


      {/* Home Section */}
      <div id="home" className="home-container">
        <p className="book-count">OVER 20,000+ BOOKS AVAILABLE</p>
        <h1 className="title">Find Your Next Favorite Book</h1>
        <div className="search-container">
          <select className="dropdown">
            <option>All Categories</option>
          </select>
          <input type="text" placeholder="Enter book title" className="input-field" />
          <input type="text" placeholder="Enter book author" className="input-field" />
          <select className="dropdown">
            <option>Price Range</option>
          </select>
          <button className="search-button">Search Now</button>
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="category-section">
        <div className="category-menu">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`category-button ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <img src={category.icon} alt={`${category.name} icon`} className="category-icon" />
              {category.name}
            </button>
          ))}
        </div>
        <div className="category-content">
          <img 
            src={categories.find((category) => category.name === activeCategory)?.image} 
            alt={`${activeCategory} image`} 
            className="img-card" 
          />
          <h2 className="category-title">Bestselling {activeCategory} Novels</h2>
          <p className="category-description">
            {categories.find((category) => category.name === activeCategory)?.description}
          </p>
          <button className="discover-button">Discover More</button>
        </div>
      </div>

      {/* Authors Section */}
      <div className="authors-section">
      <h2>Featured Authors</h2>
      <div className="author-slider-container">
        <div className="author-slider">
          {authors.map((author, index) => (
            <div key={index} className="author-slide">
              <img src={author.image} alt={`${author.name}`} className="author-image" />
              <p className="author-name">{author.name}</p>
            </div>
          ))}
          {/* Repeat the authors once more for smooth scroll transition */}
          {authors.map((author, index) => (
            <div key={`duplicate-${index}`} className="author-slide">
              <img src={author.image} alt={`${author.name}`} className="author-image" />
              <p className="author-name">{author.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Contact Section */}
      <Footer/>
    </div>
  );
};

export default Home;
