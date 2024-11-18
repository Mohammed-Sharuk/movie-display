import React from "react";
import { useFavorites } from "../context/FavoritesContext";

const FavoritesPage = () => {
    const { favorites } = useFavorites();

    return (
        <div className="favorites-page">
            <h2>Your Favorites</h2>
            {favorites.length > 0 ? (
                <div className="favorites-grid">
                    {favorites.map((movie) => (
                        <div key={movie.imdbID} className="favorite-card">
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                            <img src={movie.Poster} alt={`${movie.Title} poster`} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorite movies added yet!</p>
            )}
        </div>
    );
};

export default FavoritesPage;
