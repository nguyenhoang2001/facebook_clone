import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story profileSrc='https://i.pinimg.com/originals/59/52/67/595267d70624f7fc2bed9bf440d90e18.jpg'
                title='Marshall Erikson'
                image='https://i.pinimg.com/originals/5c/fd/f5/5cfdf58a087d788f0f0d92b7a16bec43.jpg'
            />

            <Story profileSrc='https://images4.fanpop.com/image/photos/18200000/Ted-Mosby-ted-mosby-18275839-426-640.jpg'
                title='Ted Mosby'
                image='https://i.pinimg.com/originals/5c/fd/f5/5cfdf58a087d788f0f0d92b7a16bec43.jpg'
            />

            <Story profileSrc='https://i.pinimg.com/originals/0b/0c/85/0b0c8583d98559d60cb2e816bf1f92a4.jpg'
                title='Barney Stinson'
                image='https://i.pinimg.com/originals/5c/fd/f5/5cfdf58a087d788f0f0d92b7a16bec43.jpg'
            />

            <Story profileSrc='https://i.pinimg.com/originals/7f/cc/ef/7fccef28358104ae864cdfe7fbe740d9.jpg'
                title='Lily Aldrin'
                image='https://i.pinimg.com/originals/5c/fd/f5/5cfdf58a087d788f0f0d92b7a16bec43.jpg'
            />

            <Story profileSrc='https://i.pinimg.com/originals/5b/bb/81/5bbb81b04cc8364c38d3d1c49632b289.jpg'
                title='Robin Scherbatsky'
                image='https://i.pinimg.com/originals/5c/fd/f5/5cfdf58a087d788f0f0d92b7a16bec43.jpg'
            />
        </div>
    )
}

export default StoryReel
