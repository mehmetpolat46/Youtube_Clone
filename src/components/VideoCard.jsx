import millify from "millify";
import { Link } from "react-router-dom";
import Loading from "./Loading";


const VideoCard = ({ video }) => {
  //XpC0RUxnbso
  
  return (
<Link to={`/watch/${video?.videoId}`}>
<div>
      {/* resim alanı */}
      <div>
    {video?.thumbnails? (    <img
          className="rounded w-full"
          src={video?.thumbnails?.pop()?.url}
        />):(<Loading/>)}
      </div>
      {/* bilgi alanı */}
      <div className="flex gap-3 mt-5">
        <img
          className="w-12 h-12 rounded-full"
          src={video?.author?.avatar[0].url}
        />
        <div>
          <h4 className="font-bold">{video?.title}</h4>
          <p>{video?.author?.title}</p>
          <div className="flex gap-3">
            <p>{millify(video?.stats?.views)}</p>
            <p> {video?.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
</Link>
  );
};

export default VideoCard;
