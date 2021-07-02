import React, { useState } from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {

    const [input, sendInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src = 'https://images4.fanpop.com/image/photos/18200000/Ted-Mosby-ted-mosby-18275839-426-640.jpg'/>
                <form>
                    <input value={input} onChange={(e) => sendInput(e.target.value)} className='messageSender__input' placeholder={`What's on your mind, Ted`}/>
                    <input placeholder={`image URL(Optional)`}/>
                    <button onClick={handleSubmit} type='submit'>Hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} />                 
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />                 
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmotionIcon style={{color: 'orange'}} />                 
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender