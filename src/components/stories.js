import React, { useState } from 'react';

function Stories(props) {

  const [isStories, setStories] = useState([0,1,2,3,4,5,6,7,8,9,10])

  const user = {
    username: 'nathanchow',
    profile_picture: '',
    story: [
      {
        video: '',
        date: '',
        time: ''
      }
    ],
    post: [
      {
        post_image: [
          {
            image_id: '',
            image_location: '',
          }
        ],
        post_date: '',
        likes: '',
        post_details: '',
        comments: [
          {
            user_comment: '',
            date: '',
            replies: '',
            like: '',
          }
        ]
      }
    ]
  }

  const stories = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  console.log(stories);

  return (
    <div className="stories-container">
      {stories.map((number, index) => (
        <div key={number} className="user-story">{number}</div>
      ))}
    </div>
  )
}

export default Stories;

