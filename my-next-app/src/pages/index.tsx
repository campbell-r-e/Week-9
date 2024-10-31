import { useEffect, useState } from 'react';
import { queryvideo } from '../pages/api/handler';
export default function Home() {
    const [videos, setVideos] = useState<any[]>([]);
  
    useEffect(() => {
      async function fetchVideos() {
        const videoData = await queryvideo();
        setVideos(videoData);
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
            {videos.map((video, index) => (
              <li key={index}>{video.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading</p>
        )}
      </div>
// above from online resource


);



}