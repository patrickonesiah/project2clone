import React, { useState } from 'react';

function UserProfile() {

  const [newName, setNewName] = useState("Phil Dunphy")
  const [isEditable, setEditable] = useState(false)

  function handleEditable() {
    setEditable(!isEditable)
  }

  function handleChangeName(e) {
    setNewName(e.target.value)
  }
  return (
    <div className="App-user-profile">
      <div className="App-user-profile-left">
        <img className="App-user-profile-img" src="./images/userProfileImage.jpg" alt="User profile image" />
      </div>
      <div className="App-user-profile-middle">
        {
          isEditable ?
            (<input className="App-user-name" name={newName} value={newName} onChange={handleChangeName} />)
            : (<h2>{newName}</h2>)
        }
      </div>
      <div className="App-user-editButton">
        <button  onClick={handleEditable}>{isEditable ? "Save" : "Edit"}</button>
      </div>
      <div className="App-user-profile-right">

      </div>
    </div>
  );
}

export default UserProfile;