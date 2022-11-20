import {Link} from 'react-router-dom';

function NextVideo({videos, currentVideo}){

    const filteredVideos = videos.filter(nowPlaying => {return nowPlaying.id !== currentVideo});
    
    return(
        <div className="nextVideo">
            <p className="nextVideo__header">Next Videos</p>

            {filteredVideos.map(element => {
                    return(
                        <Link className='nextVideo__vidLinks' to={`/videos/${element.id}`} key={element.id}>
                            <div className="nextVideo__vidContainer">
                                <img className="nextVideo__vidThumb" src={element.image}></img>
                                <div className="nextVideo__vidLabel">
                                    <p className="nextVideo__vidTitle">{element.title}</p>
                                    <p className="nextVideo__vidChannel">{element.channel}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
            
        </div>
    );
}

export default NextVideo;
