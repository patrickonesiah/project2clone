import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function CreateAStory() {

  const history = useHistory();

  const [storyTitle, setStoryTitle] = useState("My story title");

  const handleStoryTitle = (event) => {
    setStoryTitle(event.target.value)
  }

  const [childFirstName, setChildFirstName] = useState("");
  const [childLastName, setChildLastName] = useState("");

  const handleChildName = (event) => {
    const childname = event.target.value.split(' ')
    setChildFirstName(childname[0])
    setChildLastName(childname[1])
  }

  // const [writtenDate, setstoryTitle] = useState("");
  // const [numberOfLikes, setstoryTitle] = useState("");

  const [authorFirstName, setAuthorFirstName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");

  const handleAuthorName = (event) => {
    const fullname = event.target.value.split(' ')
    setAuthorFirstName(fullname[0])
    setAuthorLastName(fullname[1])
  }

  const [childOrder, setChildOrder] = useState("first");

  const handleChildOrder = (event) => {
    setChildOrder(event.target.value)
  }

  const [story, setStory] = useState(
    "Write your story here..."
  );

  const handleStory = (event) => {
    setStory(event.target.value)
  }
  const [relationship, setRelationship] = useState("father");

  const handleRelationship = (event) => {
    setRelationship(event.target.value)
  }
  
  // const [selectedImage, setSelectedImage] = useState();
  
  // const getImage = (event) => {
  //   setSelectedImage(event.target.files[0])
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const itemData = {
      storyTitle: storyTitle,
      storyDescription: story,
      childFirstName: childFirstName,
      childLastName: childLastName,
      authorFirstName: authorFirstName,
      authorLastName: authorLastName,
      relationship: relationship,
      // storyMainImage: selectedImage,
      // writtenDate: "2023-04-08T00:00:00.000Z",
      // numberOfLikes: 1,
      birthOrder: childOrder,
    };

    fetch("http://localhost:3001/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      // call the onAddItem prop with the newItem
      .then((newItem) => {
        history.push(`/DisplayStory/${newItem.id}`)
        console.log(newItem)
      });
  }

  return (
    <div className="App-create-a-story">
      <h1>Create A Story</h1>
      <form className="Create-a-story-form" onSubmit={handleSubmit}>
        <div className="Create-a-story-title">
          <label className="Create-a-story-label" for={storyTitle}>Story title:</label>
          <input className="Create-a-story-input" name={storyTitle} onChange={handleStoryTitle} />
        </div>
        <div className="Create-a-story-author">
          <label className="Create-a-story-label">Author:</label>
          <input className="Create-a-story-input" name="author" onChange={handleAuthorName} />
        </div>
        <div className="Create-a-story-childname">
          <label className="Create-a-story-label">Child name:</label>
          <input className="Create-a-story-input" name="childname" onChange={handleChildName} />
        </div>
        <textarea className="Create-a-story-text-area" value={story} onChange={handleStory} />
        <div className="Create-a-story-childNumber">
          <label className="Create-a-story-label">Child no:</label>
          <select className="Create-a-story-input" value={childOrder} onChange={handleChildOrder}>
            <option value="first">First</option>
            <option value="second">Second</option>
            <option value="third">Third</option>
            <option value="fourth">Fourth</option>
            <option value="fifth">Fifth</option>
            <option value="sixth">Sixth</option>
            <option value="seventh">Seventh</option>
            <option value="eighth">Eighth</option>
            <option value="ninth">Ninth</option>
            <option value="tenth">Tenth</option>
          </select>
        </div>
        <div className="Create-a-story-relationship">
          <label className="Create-a-story-label">Relationship:</label>
          <select className="Create-a-story-input" value={relationship} onChange={handleRelationship}>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
          </select>
        </div>
        <button className="Create-a-story-submit">Submit</button>
        {/* <input
          type="file"
          name="myImage"
          onChange={getImage}
        /> */}
      </form>
    </div>
  );
}

export default CreateAStory;