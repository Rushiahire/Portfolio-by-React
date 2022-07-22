import React from 'react';
import video from '../components/video/video.mp4';

const Home = () => {
    return(
        <>
            <video src={video} autoPlay loop muted
            className='background-video'/>

            <div className="content">
                Hello ,
                 My name is Rushikesh Ahire
            </div>
        </>
    )

}

export default Home;