import React from 'react';
import video from '../components/video/video.mp4';

const Home = () => {
    return(
        <>
        <div className='video-part'>
        <video src={video} autoPlay loop muted
            className='background-video' id='overlay'/>
    <div>
            
    </div>
        </div>
        </>
    )

}

export default Home;