import React, { useState, useEffect } from 'react';

const YOUTUBE_PLAYLIST_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const Videos = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const fetchPlaylist = async () => {
    try {
      const response = await fetch(`${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=PLdWX_Dn3YyVZIN3a0szKnOjLxCurEQvrQ&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
      const jsonData = await response.json();
      setPlaylist(jsonData.items);
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Recent Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playlist.map(video => (
          <div key={video.id} className="bg-white rounded shadow p-4">
            <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl font-bold mb-2">{video.snippet.title}</h2>
              <img className="w-full mb-2" src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            </a>
            <p className="text-gray-600">{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;