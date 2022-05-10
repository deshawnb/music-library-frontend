import React, { useState } from "react"


const SearchBar = (props) => {

    const [filter1, setLike] = useState("");
    const [filter2, setDislike] = useState("");


    return (
        <form >
            <label>Song Filters</label>
            <select name="props">
                <option value="all">All</option>
                <option value={filter1}>Title</option>
                <option value={filter1}>Album</option>
                <option value={filter1}>Artist</option>
                <option value={filter1}>Genre</option>
                <option value={filter1}>Date</option>
            </select>
            <input type='text' value={filter2} ></input>
            <button type="submit">filter</button>
        </form>
    )
}

export default SearchBar;