import React from 'react';
import profile_pic from '../profile_pic.jpg'
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="App">
          <img src={profile_pic} className="Profile-pic" alt="profile pic" />
          <p>
            Leo Li
          </p>
          <p>
            Website under construction. Please come back later! 
          </p>
          <div className='Link-Row'>
            <Link to="/about">About</Link>
            <Link to="/tools">Tools</Link>
          </div>
      </div>
    );
  }

export default Home