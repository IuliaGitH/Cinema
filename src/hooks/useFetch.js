import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
        const url = `https://api.themoviedb.org/3/${apiPath}`

    useEffect(() => {
        async function fetchMovies(){
            const jwtToken= process.env.REACT_APP_JWT;

          const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "  + jwtToken
            }
          });
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}