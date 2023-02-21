import axios from "axios";
import { useEffect, useState } from "react";
import { API_LINK } from "./cfg";

function Search(props) {
    const [search, setSearch] = useState([])
    const [record, setRecord] = useState([])

    const searchRecord = () => {
        axios.post(`${API_LINK}/api/auth/sergetone?id=${record}`).then(res => {
            setSearch(res.data.data)
        }).catch(error => {
            console.log("err 21 " + error);
        })
    }

    return (
        <>
            <input type="text" onChange={(e) => setRecord(e.target.value)} />
            <button onClick={searchRecord}>Search</button>
            <h1>{search.name}</h1>
            <p>{search.id}</p>
            <img src={`${API_LINK}${search.image}`} alt="rasm" />
        </>
    );
}

export default Search;