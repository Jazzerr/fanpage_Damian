
import React from 'react';
import './Home.css';
import { FaInstagram, FaSnapchat, FaPhoneAlt } from 'react-icons/fa';
import profilePic from './IMG_0473.JPG';

const Home = () => {
  return (
    <div className="container">
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <p className="profile-name">Damian</p>
      </div>
      <h1>Social Media & Contact</h1>
      <div className="icon-container">
        <div className="icon-item">
          <a href="https://www.instagram.com/_dzikuuuu_" target="_blank" rel="noopener noreferrer" className="icon instagram">
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
        <div className="icon-item">
          <a href="https://snapchat.com/t/BpkxHQIf" target="_blank" rel="noopener noreferrer" className="icon snapchat">
            <FaSnapchat />
            <span>Snapchat</span>
          </a>
        </div>
        <div className="icon-item">
          <a href="tel:+48726101312" className="icon phone">
            <FaPhoneAlt />
            <span>Telefon</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
