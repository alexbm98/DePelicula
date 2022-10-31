import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid({isSearch})
{
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/films')
        .then(response => response.json())
        .then(data => setMovies(data))
        }, []);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => {
                return <MovieCard movie={movie}></MovieCard>
            })}
        </ul>
    );
}