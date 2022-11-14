import NewComment from './NewComment';
import btnIcon from '../assets/images/Icons/add_comment.svg'
import iconImg from '../assets/images/Images/Mohan-muruge.jpg';
import viewsIcon from '../assets/images/Icons/views.svg';
import likesIcon from '../assets/images/Icons/likes.svg';
import formatDate from '../helpers/formatDate';

function VidAndCom({video}){

    const {title, channel, timestamp, views, likes, description, comments} = video;

    return(
        <div className='vidAndCom'>
            <div className="video__infoContainer">
                    <div>
                        <h2 className="video__title">{title}</h2>
                    </div>

                    <div className="video__info">
                        <div className="video__details">
                            <div> 
                                <p className="video__author">By {channel}</p>
                            </div>
                                <div className="video__date">
                                    <p>{formatDate(timestamp)}</p>
                                </div>
                        </div>

                        <div className="video__details">
                            <div className="video__views">
                                <img className="video__viewIcon" src={viewsIcon} alt="views icon" />
                                <p>{views}</p>
                            </div>

                            <div className="video__likes">
                                <img className="video__likeIcon" src={likesIcon} alt="likes icon"></img>
                                <p>{likes}</p>
                            </div>
                        </div>
                    </div>

                    <div className="video__desc">
                        <p>{description}</p>
                    </div>
            </div>

            <div className='comment'>
                <div className='comment__count'>{comments.length} Comments</div>
                
                <div className="addComment__container">
                    <div className="addComment__addComment">
                        <img className="addComment__icon" src={iconImg} alt="headIcon"></img>
                        

                        <form className="addComment__form">  
                                <label className="addComment__commentLabel" htmlFor="commentText">Join the conversation</label>
                            <div className='addComment__commentWrapper'>
                                <textarea className="addComment__commentBox" name="commentText" id="commentText" placeholder="Add a new comment"></textarea>
                                <button className="addComment__btn" onClick={e => e.preventDefault()} type="submit" name="btn">
                                    <img className="addComment__btnIcon" src={btnIcon} alt="add comment icon"></img>
                                    Comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

              {comments.map(commentData=>{
                    return <NewComment comment={commentData} key={commentData.id} />
                })}

            </div>
        </div>

    )

}

export default VidAndCom;