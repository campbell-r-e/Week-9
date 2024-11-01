// modified from online resorce
import { useEffect, useState } from 'react';

async function fetchData() {
  const response = await fetch('/api/handler'); 
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

export default function Home() {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData(); 
        setData(fetchedData); 
      } catch (err) {
        setError(err.message);
      }
    };

    getData(); 
  }, []); 

  return (
    <div>
      <a className="bg-red-800" href="./pics/pics">photos</a>

      <div className='text-center text-cyan-700'>
      <h1>Video List</h1>
      <br />
      {error ? (
        null
      ) : data.length > 0 ? (
        <ul>
          {data.map((video) => (
            <li key={video.id}>
              <h2>{video.name}</h2> {}
              
            </li>
          ))}
        </ul>
      ) : (
       null
      )}
      </div>

    
      
    </div>
  );
}
// 
