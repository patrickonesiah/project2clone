import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
function DisplayStory() {
    const [project, setProject] = useState(null);
    const { id } = useParams()
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:3001/stories/${id}`)
            .then(r => r.json())
            .then(data => setProject(data))
    }, [id])

    if (!project) return <h2>Loading...</h2>

    const { storyTitle, storyDescription, childFirstName, childLastName, authorFirstName, authorLastName, relationship, writtenDate, numberOfLikes, birthOrder, whoHasSeen, storyMainImage } = project;
    function handleNewStoryTitle() {
        history.push(`/EditStory/${id}`)
    }

    return (
        <div className="App-stories">
            <div className="App-story">
                <h1>{storyTitle}</h1>

                <div className="Display-story-top">
                    <h2>{childFirstName} {childLastName} - {birthOrder} child</h2>
                    <img className="App-story-image" src={storyMainImage} alt="{description}" />
                    <p>{storyDescription}</p>
                </div>

                <div className="App-story-bottom">
                    <span className="authorName">Shared by {authorFirstName} {authorLastName}</span>
                    <span className="writtenDate">{writtenDate}</span>
                    <span className="numberOfLikes">{numberOfLikes}</span>
                    {/* <button className="deleteButton" onClick={handleDelete}>🗑</button> */}
                </div>

                <button onClick={handleNewStoryTitle}>Edit</button>
            </div>
        </div>
    );
}

export default DisplayStory;