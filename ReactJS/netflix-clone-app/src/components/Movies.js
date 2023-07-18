import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import API_KEY from './config.js';


function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${props.genreNo}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (title) => {
    // movieTrailer(title, { id: true, multi: true })
      movieTrailer(title)
      .then((response) => {
        console.log(response);
        const videoId = new URLSearchParams(new URL(response).search).get("v");
        console.log(videoId);
        setTrailerId(videoId);
        // setTrailerId(response[0]);
        setIsModalOpen(true);
      })
      .catch((err) => console.log(err));
  };

  const controls = {
    height: "500px",
    width: "1000px",
    playerVars: {autoplay: 1},
  };

  return (
    <div>
      <h3 className="movie-list-title">{props.title}</h3>
      <div className="movie-list">
        {movies.map((movie) => {
          return (
            <div
              className="movie-container"
              onClick={() => handleClick(movie.title)}
            >
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie poster"
              />
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <Youtube videoId={trailerId} opts={controls} />
        </div>
      )}
    </div>
  );
}

export default Movies;
