// src/api/omdbApi.js
const API_KEY = "e09d4e76"; // Your new OMDB API key
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchTerm, page = 1) => {
    try {
        const response = await fetch(
            `${BASE_URL}?s=${searchTerm}&page=${page}&apikey=${API_KEY}`
        );
        const data = await response.json();
        if (data.Response === "True") {
            return data.Search;
        } else {
            console.error("API Error:", data.Error);
            return [];
        }
    } catch (error) {
        console.error("Network Error:", error);
        return [];
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await fetch(
            `${BASE_URL}?i=${movieId}&apikey=${API_KEY}`
        );
        const data = await response.json();
        if (data.Response === "True") {
            return data;
        } else {
            console.error("API Error:", data.Error);
            return null;
        }
    } catch (error) {
        console.error("Network Error:", error);
        return null;
    }
};
