import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SearchBar from './Components/SearchBar/SearchBar';
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

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  return (
    <div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <MusicTable parentEntries={songs} />
      </div>
      <div>
        <NavigationBar addNewSong={createSong}/>
      </div>
    </div>
  );
}

export default App;
