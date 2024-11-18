import React, { createContext, useState, useContext } from "react";

// Create the context
const FavoritesContext = createContext();

// Provide the context
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Add a movie to favorites
    const addToFavorites = (movie) => {
        if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };

    // Remove a movie from favorites
    const removeFromFavorites = (movieID) => {
        setFavorites(favorites.filter((movie) => movie.imdbID !== movieID));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Custom hook for accessing the context
export const useFavorites = () => useContext(FavoritesContext);
