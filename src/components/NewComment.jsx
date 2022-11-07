import formatDate from "../helpers/formatDate";

function NewComment(props){
    return(
      <div className="comment__displayed">
        <div className="comment__icon"></div>
        <div className="comment__details">
            <div className="comment__label">
                <div className="comment__name">{props.comment.name}</div>
                <div className="comment__date">{formatDate(props.comment.timestamp)}</div>
            </div>
            <div className="comment__text">{props.comment.comment}</div>
        </div>
    </div>
    );
}

export default NewComment;