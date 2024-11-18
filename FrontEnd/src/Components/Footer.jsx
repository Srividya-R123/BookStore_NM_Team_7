import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <div>
        
        <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: info@bookease.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Book Street, Novel City, Fictionland</p>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2023 Book Ease. All rights reserved.</p>
      </footer>
    </div>
  
   
  )
}

export default Footer