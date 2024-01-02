import React, {useState, useEffect} from 'react';
import Story from './Story'
import CreateStory from './CreateStory'

function Stories() {
    const [stories,setStories] = useState([]);

    const fetchResources = async () => {
        const storiesResponse = await fetch("http://localhost:3001/stories")
        const stories = await storiesResponse.json()
        setStories(stories)
    }

    useEffect(() => {
        fetchResources();
    }, []);

    function handleDeleteStories(id) {
        const updatedStoriesArray = stories.filter(
          (story) => story.id !== id
        );
        setStories(updatedStoriesArray);
      } 

 
    const storiesCards = stories.map((storyObj)=>(
        <Story 
        key={storyObj.id}
        stories={storyObj}
        onDeleteStories={handleDeleteStories}
        />
      ));    


  return (
    <div className="App-stories">
        <CreateStory/>
        {storiesCards}
    </div>
  );
}

export default Stories;