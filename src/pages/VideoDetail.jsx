import ReactPlayer from "react-player";
import ChannelDetail from "../components/ChannelDetail";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { YoutubeContext } from "../context/youtubeContext";
import { useParams } from "react-router-dom";
import { getData } from "../helpers";
import RelatedContents from "../components/RelatedContents";
import SideNav from "../components/SideNav";
const VideoDetail = () => {
  const [detail, setDetail] = useState(null);
  const [relatedContents, setRelatedContents] = useState(null);
  const { videoId } = useParams();
  //console.log(videoId);

  useEffect(() => {
    setDetail(null);
    setRelatedContents(null);

    //Videoların Detay bilgisini id paramtersi ile çekme
    getData(`/video/details/?id=${videoId}`)
      .then((detail) => setDetail(detail))
      .catch((error) => console.log("detailError", error));

    //Videoyla Alakalı İçerik alma

    getData(`/video/related-contents/?id=${videoId}`).then((relatedData) => {
      console.log("rela", relatedData);
      setRelatedContents(relatedData.contents);
    });
  }, [videoId]);
  //console.log('detailState',detail)
  console.log("statecont", relatedContents);
  return (
    <div className="lg:px-[100px] flex flex-col gap-5 lg:flex-row min-h-[95vh] text-white   bg-[#0f0f0f]">
      <SideNav />
      {/*Player Tarafı*/}
      <div>
        <ReactPlayer
          width={"100%"}
          height={"500px"}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
        />
        {!detail ? <Loading /> : <ChannelDetail detail={detail} />}
      </div>

      {/* Ralated Contents*/}
     {!relatedContents ? (
       <Loading/>
      ) : (
        <RelatedContents contents={relatedContents} />
      )} 
    </div>
  );
};

export default VideoDetail;
