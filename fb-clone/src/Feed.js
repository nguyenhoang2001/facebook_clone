import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic = 'https://pbs.twimg.com/profile_images/1093639847250722816/-A8kf6-1_400x400.jpg'
                message = 'That is my son'
                timestamp = 'timestamp'
                username = 'Don'
                image = 'https://lh3.googleusercontent.com/-j2BBSuMrv7U/Wli8TKU6twI/AAAAAAAAK44/mCbHmulacYECNvad_67p_H3lYvfDE-PlgCHMYCw/s1600/FB_IMG_1515764773864.jpg'
            />
            <Post
                profilePic = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg'
                message = 'Graduate in University of North Carolina'
                timestamp = 'timestamp'
                username = 'Jordan'
                image = 'https://static.independent.co.uk/2021/05/09/12/GettyImages-648090854-1.jpg?width=982&height=726&auto=webp&quality=75'
            />
        </div>
    )
}

export default Feed
