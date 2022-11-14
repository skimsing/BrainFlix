import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';


//components
import MainVid from "../components/MainVid";
import VidAndCom from "../components/VidAndCom";
import NextVideo from "../components/NextVideo";

// import videos from "../data/videos.json";
// import videoDetails from "../data/video-details.json";


export default function Home(){
    const apiKey = "40028fdb-b130-4b20-949e-8f569f38b0d8";

    // const [video, setVideo] = useState(videoDetails[0]);

    // const setVid = (id) =>{
    //   const video = (videoDetails.find((videoDetail) => {return videoDetail.id === id;}))
    //   setVideo(video);
    // }

    // const params = useParams();
    const {id} = useParams();
   

    // const [video, setVideo] = useState(null);
    
    //sets vid as empty array
    const [nextVids, setNextVids] = useState([]);
    const [video, setVideo] = useState(null);
    //add all upcoming videos when component mounts
    //videos only display in sidebar => for NextVideo
    // useEffect(()=>{
    //     axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
    //     .then((response) => {
    //         //loads all vids
    //         setNextVids(response.data);
    //     })
    //     .catch(
    //         console.log("error")
    //         )
    //     },[]);    

    useEffect(() =>{
        const loadVideos = async () => {
            try {
                const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`);
            
                setNextVids(response.data);
        
                const vidId = id ? id : response.data[0].id;
                
                const vidDetails = await axios.get(`https://project-2-api.herokuapp.com/videos/${vidId}?api_key=${apiKey}`);
                setVideo(vidDetails.data);
            
            } catch (error) {
                console.error("initial vid load failed", error);
            }
        }
       
        loadVideos()
    },[]); 
        
        
        //params.id
        //videos/params.id
        //set id when a new video is clicked
        //if have id, display vid with id, or else diplay default
    
    // get updated data from updated url
    //store data in state

    useEffect(()=>{
   
        const fetchVid = async () => {
            try {
                const vidResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=${apiKey}`)
                setVideo(vidResponse.data);
                
            } catch (error) {
                console.error("can't get vid by id", error)
            }
        }
                
        fetchVid();     
        
    }, [id]);
    
        
        //use click handler to get id

        //onClick props.
    // use useEffect to update state
    return(
        <>
        <MainVid video={video} />

        <div className="app__desktopDisplay">
          {/* <Comment commentData={video.comments} /> */}
          {video && 
            <VidAndCom video={video}/>
          }
          
          {/* <NextVideo videos={nextVid} onClickNextVid={setVid} currentVidId ={video.id}/> */}
          <NextVideo videos={nextVids}/>
        </div>
        </>
    )
}