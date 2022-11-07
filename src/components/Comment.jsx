import NewComment from './NewComment';
import btnIcon from '../assets/images/Icons/add_comment.svg'
import iconImg from '../assets/images/Images/Mohan-muruge.jpg';
function Comment(props){

    return(
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
                            Comment</button>
                        </div>
                    </form>
                </div>
            </div>

            {props.commentData.map(comment=>{
                return <NewComment comment={comment} />
            })}
        </div>
    );
}

export default Comment;