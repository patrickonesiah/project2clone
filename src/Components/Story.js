import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Story({ stories, onDeleteStories }) {
    const { id, storyTitle, storyDescription, childFirstName, childLastName, authorFirstName, authorLastName, relationship, writtenDate, numberOfLikes, birthOrder, whoHasSeen, storyMainImage } = stories;

    function handleDate() {

    }

    function handleNumberOfLikes() {

    }
    async function handleDelete() {
        const storiesResponse = await fetch(`http://localhost:3001/stories/${id}`, { method: "DELETE" })
        const stories = await storiesResponse.json()
        onDeleteStories(id)
        console.log(`Delete =${id}`)
    }

    const[storyID, setStoryID] = useState(0)

    function handleID(){
        setStoryID(id)
    }

    return (
        <div className="App-story">
            <Link to={`/DisplayStory/${id}`}> 
            <div className="App-story-top" onClick={handleID}>
                <h2>{childFirstName} {childLastName} - {birthOrder} child</h2>
                <img className="App-story-image" src={storyMainImage} alt="{description}" />
                <h1>{storyTitle}</h1>
                <p>{storyDescription}</p>
            </div>
            </Link>
            <div className="App-story-bottom">
                <span className="authorName">Shared by {authorFirstName} {authorLastName}</span>
                <span className="writtenDate">{writtenDate}</span>
                <span className="numberOfLikes">{numberOfLikes}</span>
                <button className="deleteButton" onClick={handleDelete}>🗑</button>
            </div>
        </div>
    );
}

export default Story;