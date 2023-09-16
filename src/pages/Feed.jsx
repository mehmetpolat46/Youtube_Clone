import { useContext } from 'react';
import SideNav from '../components/SideNav';
import { YoutubeContext } from '../context/youtubeContext';
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';
const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex bg-[#0f0f0f] min-h-screen text-white">
      <SideNav />

      <div className="videos">
        {/*
         * state null'sa loading bas
         * veriler geldiyse sadece type'i video olanları ekrana bas
         */}
        {videos === null ? (
          <Loading />
        ) : (
          videos.map(
            (item) =>
              item.type === 'video' && (
                <VideoCard
                  key={item.video.videoId}
                  video={item.video}
                />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
