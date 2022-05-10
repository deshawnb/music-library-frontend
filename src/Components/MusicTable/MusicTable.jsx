import axios from "axios";

const  MusicTable = (props) => {


    async function deleteSong(id){
        await axios.delete(`http://127.0.0.1:8000/api/music/24/${id}/`);
        // setStatus('Delete successful');
      }


    return ( 
        <table className="table"> 
            <thead>
            <tr>
                <th>Song Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((song) => {
                return (
                <tr>
                    <td>{song.id}</td>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <button>update</button>
                    <button>delete</button>
                </tr>
                )
            })}
            </tbody>
        </table>
     );
}
 
export default MusicTable;