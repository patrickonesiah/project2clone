import React, { useState } from 'react';

// "id": 5,
// "storyTitle": "Animal Sounds",
// "storyDescription": "Learned about animls from the zoo. Cow says \"Moo!\"",
// "childFirstName": "Luke",
// "childLastName": "Dunphy",
// "authorFirstName": "Kate",
// "authorLastName": "Dunphy",
// "relationship": "mother",
// "writtenDate": "2023-04-08T00:00:00.000Z",
// "numberOfLikes": 1,
// "birthOrder": "second",
// "storyMainImage": "https://nurturey.com/blog/wp-content/uploads/2017/07/zoo_sheep.jpg",
// "whoHasSeen": [

function CreateStory() {

  const [myCar, setMyCar] = useState("Volvo");

  const handleSelection = (event) => {
    setMyCar(event.target.value)
  }  

  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleTextArea = (event) => {
    setTextarea(event.target.value)
  }  

  return (
    <div className="App-create-story">
        <h1>Create Story</h1>
        <form>
          <select value={myCar} onChange={handleSelection}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>          
          <textarea value={textarea} onChange={handleTextArea} />
        </form>
    </div>
  );
}

export default CreateStory;