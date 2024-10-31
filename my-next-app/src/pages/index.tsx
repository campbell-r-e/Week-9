import { useEffect, useState } from 'react';
import { queryvideo } from '../pages/api/handler';





interface Video {
  id: number;
  name: string;
  url: string;
  votes: number;
  length: number;
}

export default function Home() {

    const [videos, setVideos] = useState<Video[]>([]);
    
    useEffect(() => {
      async function fetchVideos() {
        const videoData = await queryvideo();
        const mappedVideos: Video[] = videoData.map((video) => ({
          id: video.id,
          name: video.name,
          url: video.url,
          votes: video.votes,
          length: video.length,
      }));
      setVideos(mappedVideos); 
      
      }
      fetchVideos();
    }, []);
    // above from online resource

    return (

        //
        <div>
        <h1>Video List</h1>
        {videos.length > 0 ? (
          <ul>
            {videos.map((video) => (
              <li key={video.id}>{video.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading</p>
        )}
      </div>
// above from online resource


);



}