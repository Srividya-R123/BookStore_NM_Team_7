import React from 'react';
import Unavbar from './Unavbar';
import './uhome.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const Uhome = () => {
  return (
    <div>
      <Unavbar />
      <div id="home" className="home-container">
        <p className="book-count">OVER 20,000+ BOOKS AVAILABLE</p>
        <h1 className="title">Find Your Next Favorite Book</h1>
      </div>

      {/* Best Sellers Section */}
      <Section title="Best Seller">
        {[
          {
            title: 'Rich Dad Poor Dad',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg',
          },
          {
            title: 'Think and Grow Rich',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg',
          },
          {
            title: "Don't Let Her Stay",
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg',
          },
          {
            title: 'Killing the Witches',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg',
          },
        ]}
      </Section>

      {/* Top Recommendations Section */}
      <Section title="Top Recommendation">
        {[
          {
            title: 'Harry Potter',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg',
          },
          {
            title: 'Elon Musk',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg',
          },
          {
            title: 'The Mosquito',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg',
          },
          {
            title: 'Journey on the James',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg',
          },
        ]}
      </Section>

      <Footer />
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-center" style={{ fontSize: '50px' }}>
      {title}
    </h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {children.map((book, index) => (
        <Card
          key={index}
          style={{
            width: '18rem',
            margin: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Link to="/uproducts">
            <Card.Img
              variant="top"
              src={book.img}
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </Link>
          <Card.Body>
            <Card.Title className="text-center">{book.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  </div>
);

export default Uhome;
