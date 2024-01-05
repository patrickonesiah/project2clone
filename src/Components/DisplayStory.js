import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
function DisplayStory() {
    const [project, setProject] = useState(null);
    const {id} = useParams()
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:3001/stories/${id}`)
            .then(r => r.json())
            .then(data => setProject(data))
    }, [id])
    
    if (!project) return <h2>Loading...</h2>
    
    const { storyTitle } = project

    function handleNewStoryTitle(){
        history.push(`/EditStory/${id}`)
    }
    
    return (
        <div>
            <h1>{storyTitle}</h1>
            <button onClick={handleNewStoryTitle}>Edit</button>
        </div>
    );
}

export default DisplayStory;