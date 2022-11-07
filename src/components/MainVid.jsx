import viewsIcon from '../assets/images/Icons/views.svg';
import likesIcon from '../assets/images/Icons/likes.svg';
import formatDate from '../helpers/formatDate';

function MainVid(props){

    return(

        <div className="video">
            <div className="video__nowPlaying">
                <video className="video__vidPoster" poster={props.video.image} controls></video>
            </div>

            {/* <div className="video__infoContainer">

                <div>
                    <h2 className="video__title">{props.video.title}</h2>
                </div>

                <div className="video__info">
                    <div className="video__details">
                        <div> 
                            <p className="video__author">By {props.video.channel}</p>
                        </div>
                            <div className="video__date">
                                <p>{formatDate(props.video.timestamp)}</p>
                            </div>
                    </div>

                    <div className="video__details">
                        <div className="video__views">
                            <img className="video__viewIcon" src={viewsIcon} alt="views icon" />
                            <p>{props.video.views}</p>
                        </div>

                        <div className="video__likes">
                            <img className="video__likeIcon" src={likesIcon} alt="likes icon"></img>
                            <p>{props.video.likes}</p>
                        </div>
                    </div>
                </div>

                <div className="video__desc">
                    <p>{props.video.description}</p>
                </div>
            </div> */}
        </div>
    )
}

export default MainVid;