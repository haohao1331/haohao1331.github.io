import React from 'react';
import profile_pic from '../profile_pic.jpg'
import '../App.css';

function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={profile_pic} className="Profile-pic" alt="profile pic" />
          <p>
            Leo Li
          </p>
          <p>
            Website under construction. Please come back later! 
          </p>
        </header>
      </div>
    );
  }

export default Home