// src/pages/SearchPage.jsx
import React, { useState, useEffect } from "react";
import { fetchMovies } from "../api/omdbApi";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [initialMovies, setInitialMovies] = useState([]); // State for initial movies
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch a set of movies on initial load
    useEffect(() => {
        const loadInitialMovies = async () => {
            const data = await fetchMovies("Avengers", currentPage); // Change "Avengers" to any other keyword if needed
            setInitialMovies(data);
        };
        loadInitialMovies();
    }, [currentPage]);

    // Function to handle search
    const handleSearch = async () => {
        if (searchTerm) {
            const data = await fetchMovies(searchTerm, currentPage);
            setMovies(data);
        }
    };

    return (
        <div className="p-4">
            <div className="flex items-center space-x-2 mb-4">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Search
                </button>
            </div>

            {/* Display search results */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                            <div className="border rounded p-2">
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="w-full h-48 object-cover"
                                />
                                <h2 className="text-lg font-semibold">{movie.Title}</h2>
                                <p>{movie.Year}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No search results found.</p>
                )}
            </div>

            {/* Display initial movies below the search results */}
            <h2 className="text-2xl font-semibold mb-4">Popular Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {initialMovies.map((movie) => (
                    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                        <div className="border rounded p-2">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-48 object-cover"
                            />
                            <h2 className="text-lg font-semibold">{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="bg-gray-400 text-white p-2 rounded"
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="bg-gray-400 text-white p-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchPage;
