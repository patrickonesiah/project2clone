import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Like from './Like';

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
        <div className="Display-story-container">
            <div className="Display-story">

                <div className="Display-story-top">
                    <h2>{childFirstName} {childLastName} - {birthOrder} child</h2>
                    <h1>{storyTitle}</h1>
                    <img className="Display-story-image" src={storyMainImage} alt="{description}" />
                    <p className="Display-story-paragraph">{storyDescription}</p>
                </div>

                <div className="Display-story-bottom">
                    <span className="authorName">Shared by {authorFirstName} {authorLastName}</span>
                    <span className="writtenDate">{writtenDate}</span>
                    <Like id={id} numberOfLikes={numberOfLikes}/>
                    <img className="editButton" onClick={handleNewStoryTitle} src="../images/pen.png" alt="Edit" width="30" />
                </div>
            </div>
        </div>
    );
}

export default DisplayStory;