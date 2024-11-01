import {useEffect, useState } from 'react';







interface Video {
  id: number;
  name: string;
  url: string;
  votes: number;
  length: number;
}
//
async function fetchData() {
  const response = await fetch('/api/handler');
  const data = await response.json();
  return data;
}
// from online resource 


export default function Home() {
  
    const [videos, setVideos] = useState<Video[]>([]);
    
    
    useEffect(() => {
      async function fetchVideos() {
        const videoData = await fetchData();
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
        <br></br>
        {videos.length > 0 ? (
          <ul>
            {videos.map((video) => (
              <li key={video.id}>{video.name}</li>
            ))}
          </ul>
        ) : (
          null
        )}

        <h1>Photos</h1>
        <div>
        <img src = './image.jpg' alt="radio"/>
        <img src = './j.jpg' alt="radio"/>
        <img src = './radio.jpg' alt="radio"/>

        </div>
       
      </div>
// above from online resource


);



}