import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { NavigationBar } from "./NavigationBar";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid({ token })
{
    const [films, setFilms] = useState([]);
    const [movies, setMovies] = useState("%");

    useEffect(() => {
        fetch('http://localhost:8080/films/filmsSearch', {
            method: 'POST',
            body: movies
        }).then(response => response.json())
        .then(data => {setFilms(data);})
    }, [movies]);

    return (
        <div>
            <NavigationBar token={token} setMovies={setMovies}></NavigationBar>
            <ul className={styles.moviesGrid}>
                {films.map((film) => {
                    return <MovieCard movie={film}></MovieCard>
                })}
            </ul>
        </div>
    );
}