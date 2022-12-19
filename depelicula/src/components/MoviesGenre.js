import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { NavigationBar } from "./NavigationBar";
import styles from "./MoviesGrid.module.css";
import { useParams } from "react-router-dom";

export function MoviesGenre({ token })
{
    let {genre} = useParams();

    let [films, setFilms] = useState([]);
    let [movies, setMovies] = useState("%");

    useEffect(() => {
        fetch('http://localhost:8080/films/filmsByGenre', {
            method: 'POST',
            body: genre
        }).then(response => response.json())
        .then(data => {setFilms(data);})
    }, [genre]);

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