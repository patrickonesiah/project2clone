import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditStory() {
    const [project, setProject] = useState(null);
    const [newStoryTitle, setNewStoryTitle] = useState("")
    const { id } = useParams()
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3001/stories/${id}`)
            .then(r => r.json())
            .then(data => {
                setProject(data)
                setNewStoryTitle(data.storyTitle)
            })
    }, [id])

    
    if (!project) return <h2>Loading...</h2>
    const { storyTitle } = project
        



    function handleStoryTitle(e){
        setNewStoryTitle(e.target.value)
    }

    function handleSave(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/stories/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                storyTitle: newStoryTitle,
            }),
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                history.push(`/DisplayStory/${data.id}`)
            })
    }

    return (
        <div className="App-create-a-story">
        <h1>Edit Story</h1>
        <form className="Create-a-story-form" onSubmit={handleSave}>
            <div className="Create-a-story-title">
                <label className="Create-a-story-label" for={storyTitle}>Story title:</label>
                <input className="Create-a-story-input" name={newStoryTitle} value={newStoryTitle} onChange={handleStoryTitle} />
            </div>
            <button className="Create-a-story-submit">Submit</button>
        </form>
        </div>
    );
}

export default EditStory;