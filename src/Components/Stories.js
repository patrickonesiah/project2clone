import React, {useState, useEffect} from 'react';
import Story from './Story'
import CreateStory from './CreateStory'

function Stories() {
    const [stories,setStories] = useState([]);

    const fetchResources = async () => {
        const storiesResponse = await fetch("http://127.0.0.1:3001/stories")
        const stories = await storiesResponse.json()
        setStories(stories)
    }

    useEffect(() => {
        fetchResources();
    }, []);
 
    const storiesCards = stories.map((storyObj)=>(
        <Story 
        key={storyObj.id}
        stories={storyObj}
        // onDeleteListing={handleDeleteListing}
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