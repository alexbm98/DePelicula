import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({movie})
{
    const poster_image = "https://image.tmdb.org/t/p/w300" + movie.poster;
    
    return (
        <li className={styles.movieCard}>
            <Link to={"/films/" + movie.idfilm}>
                <img className={styles.moviePoster} src={poster_image} alt="image" width={230} height={345}></img>
            </Link>
            <div>
                <strong>{movie.title}</strong>
            </div>
        </li>
    );
}