import NewComment from './NewComment';
import btnIcon from '../assets/images/Icons/add_comment.svg'
import iconImg from '../assets/images/Images/Mohan-muruge.jpg';
import viewsIcon from '../assets/images/Icons/views.svg';
import likesIcon from '../assets/images/Icons/likes.svg';
import formatDate from '../helpers/formatDate';

function VidAndCom(props){
    return(
        <div className='vidAndCom'>
            <div className="video__infoContainer">
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
            </div>

            <div className='comment'>
                <div className="addComment__container">
                    <div className="addComment__addComment">
                        <img className="addComment__icon" src={iconImg} alt="headIcon"></img>
                        
                        <form className="addComment__form">  
                                <label className="addComment__commentLabel" for="commentText">Join the conversation</label>
                            <div className='addComment__commentWrapper'>
                                <textarea className="addComment__commentBox" name="commentText" id="commentText" placeholder="Add a new comment"></textarea>
                                <button className="addComment__btn" type="submit" name="btn">
                                    <img className="addComment__btnIcon" src={btnIcon} alt="add comment icon"></img>
                                    Comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {props.video.comments.map(comment=>{
                    return <NewComment comment={comment} />
                })}
            </div>
        </div>

    )

}

export default VidAndCom;