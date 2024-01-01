import React from 'react';

function Story({stories}) {
    const {id, storyTitle, storyDescription, childFirstName, childLastName, authorFirstName, authorLastName, relationship, writtenDate, numberOfLikes, birthOrder, whoHasSeen, storyMainImage} = stories;

    function handleDate(){

    }

    function handleNumberOfLikes(){
        
    }

    function handleViewStory(){
        console.log("Open model and view entire story")
    }

  return (
    <div className="App-story" onClick={handleViewStory}>
        <div className="App-story-top">
            <h2>{childFirstName} {childLastName} - {birthOrder} child</h2>
            <img  className="App-story-image" src={storyMainImage} alt="{description}" />
            <h1>{storyTitle}</h1>
            <p>{storyDescription}</p>
        </div>
        <div className="App-story-bottom">
            Shared by {authorFirstName} {authorLastName}
        {writtenDate}
        {numberOfLikes}
        {/* <p>{whoHasSeen}</p> */}
        </div>
    </div>
  );
}

export default Story;