import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';

//components
import MainVid from "../components/MainVid";
import VidAndComments from "../components/VidAndComments";
import NextVideo from "../components/NextVideo";

export default function Home(){
    const apiKey = "40028fdb-b130-4b20-949e-8f569f38b0d8";
   
    const {id} = useParams();
    
    const [nextVids, setNextVids] = useState([]);
    const [video, setVideo] = useState(null);
 
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
        

    useEffect(()=>{
        const fetchVid = async () => {
            try {
                const vidResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=${apiKey}`)
                setVideo(vidResponse.data);
                
            } catch (error) {
                console.error("can't get vid by id", error);
            }
        }
                
        fetchVid();     
    }, [id]);
    
    return(
        <>
            {video && <MainVid videoData={video} apiKey={apiKey}/>}
            <div className="app__desktopDisplay">
                {video && <VidAndComments video={video}/>}
                <NextVideo videos={nextVids}/>
            </div>
        </>
    )
}