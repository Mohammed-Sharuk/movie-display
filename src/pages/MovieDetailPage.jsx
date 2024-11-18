// src/pages/MovieDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/omdbApi";

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await fetchMovieDetails(id);
            setMovie(data);
        };

        fetchDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    );
};

export default MovieDetailPage;
