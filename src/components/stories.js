import React, { useState } from 'react';

function Stories(props) {

  const [isStories, setStories] = useState([0,1,2,3,4,5,6,7,8,9,10])

  const users = [
    {
    username: 'nathanchow',
    profile_picture: '',
    story: [
      {
        video: '',
        date: '',
        time: ''
      }
    ],
    posts: [
      {
        post_image: [
          {
            image_id: '',
            image_location: '',
          }
        ],
        post_date: '',
        likes: ['nathan','anna'],
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
  }]

  return (
    <div className="stories-container">
      {users.map((user, index) => (
        <div key={user.username} className="user-story">{user.username}</div>
      ))}
    </div>
  )
}

export default Stories;

