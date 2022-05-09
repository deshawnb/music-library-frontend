const  MusicTable = (props) => {
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
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                </tr>
                )
            })}
            </tbody>
        </table>
     );
}
 
export default MusicTable;