import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-bottom">
        <h1>Drums.com</h1>
          <p>&copy; {new Date().getFullYear()} Drums.com. All rights reserved.</p>
        </div>
      
    </footer>
  );
};

export default Footer;
