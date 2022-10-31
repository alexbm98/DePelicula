import { Link, useParams } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import styles from "./MovieDetails.module.css";

export function MovieDetails()
{
    const {filmId} = useParams();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/films/' + filmId)
        .then(response => response.json())
        .then(data => setMovie(data))
        }, []);

    const poster_image = "https://image.tmdb.org/t/p/w300" + movie.poster;

    return (
        <div className={styles.movieDetailsPlace}>
            <img className={styles.movieDetailsPoster} src={poster_image}></img>
            <ul className={styles.detailsList}>
                <li className={styles.detailsElement}><strong>Title</strong></li>
                <li className={styles.detailsElement}>{movie.title}</li>
                <li className={styles.detailsElement}><strong>Genre</strong></li>
                <li className={styles.detailsElement}>{movie.genre}</li>
                <li className={styles.detailsElement}><strong>Release date</strong></li>
                <li className={styles.detailsElement}>{movie.release_date}</li>
                <li className={styles.detailsElement}><strong>Summary</strong></li>
                <li className={styles.detailsElement}>{movie.summary}</li>
            </ul>
            <Link to={"/films/" + filmId + "/trailer"}>
                <button className={styles.trailerButton}>Watch trailer</button>
            </Link>
            <Link to="/films">
                <button className={styles.cancelButton}>Go back</button>
            </Link>
        </div>
    )
}