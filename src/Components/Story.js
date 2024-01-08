import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Like from './Like';

function Story({ stories, onDeleteStories }) {
    const { id, storyTitle, storyDescription, childFirstName, childLastName, authorFirstName, authorLastName, relationship, writtenDate, numberOfLikes, birthOrder, whoHasSeen, storyMainImage } = stories;

    async function handleDelete() {
        if (window.confirm("Are you sure you want to delete?")) {
            const storiesResponse = await fetch(`http://localhost:3001/stories/${id}`, { method: "DELETE" })
            const stories = await storiesResponse.json()
            onDeleteStories(id)
            console.log(`Delete =${id}`)
        }
    }

    return (
        <div className="App-story">
            <Link to={`/DisplayStory/${id}`}>
                <div className="App-story-top">
                    <h2>{childFirstName} {childLastName} - {birthOrder} child</h2>
                    <img className="App-story-image" src={storyMainImage} alt="Story image" />
                    <h1>{storyTitle}</h1>
                    <p>{storyDescription}</p>
                </div>
            </Link>
            <div className="App-story-bottom">
                <span className="authorName">Shared by {authorFirstName} {authorLastName}</span>
                <span className="writtenDate">{writtenDate}</span>
                <Like id={id} numberOfLikes={numberOfLikes} />
                <img className="deleteButton" onClick={handleDelete} src="./images/bin.png" alt="Delete" width="30" />
            </div>
        </div>
    );
}

export default Story;