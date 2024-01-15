import Stories from './Stories';
import UserProfile from './UserProfile';
import React from 'react';

function Home() {
    return (
      <div className="App"> 
        <UserProfile/>
        <Stories/>
      </div>
    );
  }
  
  export default Home;