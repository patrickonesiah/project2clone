import React, { useState } from 'react';

function Like({ id , numberOfLikes }) {

    const [newNumberOfLikes, setNewNumberOfLikes] = useState(numberOfLikes)

    function handleNumberOfLikes() {
        setNewNumberOfLikes((newNumberOfLikes) => {

            newNumberOfLikes = newNumberOfLikes + 1

            fetch(`https://narrativegrovedb.onrender.com/stories/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    numberOfLikes: newNumberOfLikes,
                }),
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                })

            return newNumberOfLikes
        });
    }

    return (
        // Fragment was used to not add extra div to the DOM
        <React.Fragment>
            <span className="numberOfLikes">{newNumberOfLikes}</span>
            <img className="numberOfLikes-image" onClick={handleNumberOfLikes} src="../images/heart.png" alt="Like" width="30" />
        </React.Fragment>
    );
}

export default Like;