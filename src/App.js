import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
import { upload } from '@testing-library/user-event/dist/upload';

//pages
import Upload from './pages/Upload.js';
import Home from './pages/Home.js';

function App() {

  // const [video, setVideo] = useState(videoDetails[0]);

  // const setVid = (id) =>{
  //   const video = (videoDetails.find((videoDetail) => {return videoDetail.id === id;}))
  //   setVideo(video);
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/upload' element={<Upload />}></Route>
            <Route path='/videos/:id' element={<Home />}></Route>
        </Routes>

        
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
