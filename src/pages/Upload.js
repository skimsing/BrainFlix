import publishIcon from '../assets/images/Icons/publish.svg';
import vidThumbnail from "../assets/images/Images/Upload-video-preview.jpg"
import {useNavigate} from  'react-router-dom';
import axios from 'axios';

export default function Upload(props){
    const navigate = useNavigate();
    function formSubmitHandler(data){
        data.preventDefault();
        let item = {
            "title": data.target.title.value,
            "description": data.target.description.value,
        }

        axios.post('http://localhost:8080/videos', item)
        .then(
            alert("thanks for upload"),
            navigate("/")
        );
    }

    return(
        <div className="upload">

            <div className="upload__heading">
                <h1>Upload Video</h1>
            </div>

            <div className='upload__videoItems'>
                <div className="upload__thumbnail">
                    <p>Video Thumbnail</p>
                    <img className="upload__thumbnailImg" src={vidThumbnail}></img>
                </div>

                <form className="upload__form" onSubmit={(e)=>{formSubmitHandler(e)}}>
                    <div className="upload__formItem">
                        <label className="upload__vidTitle">Title your Video</label>
                        <input className="upload__titleInput" name="title" type={props.text} placeholder="Add a title to your video"></input>
                    </div>

                    <div className="upload__formItem">
                        <label className="upload__vidDesc">Add a Video Description</label>
                        <textarea className="upload__descriptionInput" name="description" placeholder='Add a description to your video'></textarea>
                    </div>

                    <div className='upload__formButtons'>
                        <button className='upload__publishBtn'>
                            <img className="upload__publishBtnIcon" src={publishIcon}></img>
                            Publish
                        </button>
                        <button className="upload__cancelBtn">Cancel</button>
                    </div>
                </form>
            </div>
    </div>
    )
}