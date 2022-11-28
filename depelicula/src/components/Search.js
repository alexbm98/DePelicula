import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { NavigationBar } from "./NavigationBar";
import styles from "./MoviesGrid.module.css";
import stylesMC from "./MovieCard.module.css";

export function Search({ token }) {

    let {filmTitle} = useParams();

    let [movie, setMovie] = useState("");

    console.log(filmTitle);

    useEffect(() => {
        fetch('http://localhost:8080/films/search/' + filmTitle)
        .then(response => response.json())
        .then(data => setMovie(data))
        });

        console.log(movie);

    return (
        <div>
            <NavigationBar token={token}></NavigationBar>
            <ul className={styles.moviesGrid}>
                <li className={stylesMC.movieCard}><MovieCard movie={movie}></MovieCard></li>
            </ul>
        </div>
    );

}