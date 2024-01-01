import React from 'react';

function UserProfile() {
  return (
    <div className="App-user-profile">
        <div className="App-user-profile-left">
            <img className="App-user-profile-img" src="./images/userProfileImage.png" alt="{description}" />
        </div>
        <div className="App-user-profile-middle">
            <h2>Phil Dunphy</h2>
            <button>Edit</button>
        </div>
        <div className="App-user-profile-right">

        </div>
    </div>
  );
}

export default UserProfile;