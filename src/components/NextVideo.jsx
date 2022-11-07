function NextVideo(props){
    //get list of videos
    
    //add event listener
    //return video list
    //return selected video

    return(
        <div className="nextVideo">
            <p className="nextVideo__header">Next Videos</p>

        {props.videos.map((e) => {
            if(e.id === props.currentVidId){
                return <> </>;
            }
            return(
                <div key={e.id} onClick={() => props.onClickNextVid(e.id)} className="nextVideo__vidContainer">
                    <img className="nextVideo__vidThumb" src={e.image}></img>
                    <div className="nextVideo__vidLabel">
                        <p className="nextVideo__vidTitle">{e.title}</p>
                        <p className="nextVideo__vidChannel">{e.channel}</p>
                    </div>
                </div>
            );
        })
        }
           
        </div>
    );
}

export default NextVideo;
