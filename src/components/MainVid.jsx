export default function MainVid({videoData, apiKey}){
    const {image, video} = videoData;

    return(

        <div className="video">
            <div className="video__nowPlaying">
                <video className="video__vidPoster" poster={image} controls>
                    <source src={`${video}?api_key=${apiKey}`} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}
