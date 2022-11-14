import {Link} from 'react-router-dom';

function NextVideo({videos}){

    return(
        <div className="nextVideo">
            <p className="nextVideo__header">Next Videos</p>

        {videos.map((e) => {
     
            return(
                <Link className='nextVideo__vidLinks' to={`/videos/${e.id}`} key={e.id}>
                    <div className="nextVideo__vidContainer">
                        <img className="nextVideo__vidThumb" src={e.image}></img>
                        <div className="nextVideo__vidLabel">
                            <p className="nextVideo__vidTitle">{e.title}</p>
                            <p className="nextVideo__vidChannel">{e.channel}</p>
                        </div>
                    </div>
                </Link>
            );
        })}
           
        </div>
    );
}

export default NextVideo;
