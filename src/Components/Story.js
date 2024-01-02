import React from 'react';

function Story({stories, onDeleteStories}) {
    const {id, storyTitle, storyDescription, childFirstName, childLastName, authorFirstName, authorLastName, relationship, writtenDate, numberOfLikes, birthOrder, whoHasSeen, storyMainImage} = stories;

    function handleDate(){

    }

    function handleNumberOfLikes(){
        
    }
    async function handleDelete(){
        const storiesResponse = await fetch(`http://localhost:3001/stories/${id}`, {method: "DELETE"})
        const stories = await storiesResponse.json()
        onDeleteStories(id)
        console.log(`Delete =${id}`)
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
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
        </div>
    </div>
  );
}

export default Story;