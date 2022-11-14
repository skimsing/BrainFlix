import publishIcon from '../assets/images/Icons/publish.svg';

export default function UploadStuff(){
    return(
        <div className="upload">
            <h1>Upload Video</h1>

            <div className="upload__thumbnail">
                <p>Video Thumbnail</p>
            </div>

            <form>
                <label></label>
                <input type={text}></input>
                <label></label>
                <textarea></textarea>

                <button>
                    <img src={publishIcon}></img>
                    Publish
                </button>
            </form>
        </div>
    ) 
}