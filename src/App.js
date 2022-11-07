import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

//components
import Header from './components/Header';
import Comment from './components/Comment';
import MainVid from './components/MainVid';
import NextVideo from './components/NextVideo';

// import data from json
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';

//import images
import iconImg from './assets/images/Images/Mohan-muruge.jpg';

//test
import VidAndCom from './components/VidAndCom';

function App() {
  //comments
  
  //main video

  //video list

  //state function for handling vid switching

  //make state fx for main vid
  const [video, setVideo] = useState(videoDetails[0]);

  const setVid = (id) =>{
    const video = (videoDetails.find((videoDetail) => {return videoDetail.id === id;}))
    setVideo(video);
  }

  return (
    <div className="App">
      <Header />
      
      <MainVid video={video} />

      <div className="app__desktopDisplay">
        {/* <Comment commentData={video.comments} /> */}
        <VidAndCom video={video}/>

        <NextVideo videos={videos} onClickNextVid={setVid} currentVidId ={video.id}/>
      </div>
      
    </div>
  );
}

export default App;
