import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  return (
    <div>
      <MusicTable parentEntries={songs} />
    </div>
  );
}

export default App;
