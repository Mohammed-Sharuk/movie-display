import React from "react";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    return (
        <div className="movie-card border p-4 rounded shadow-sm">
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
                alt={`${movie.Title} poster`}
                className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold">{movie.Title}</h3>
            <p className="text-sm text-gray-500">{movie.Year}</p>
            <button
                onClick={() =>
                    isFavorite ? removeFromFavorites(movie.imdbID) : addToFavorites(movie)
                }
                className={`mt-4 px-4 py-2 rounded ${
                    isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
                }`}
            >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
};

export default MovieCard;
