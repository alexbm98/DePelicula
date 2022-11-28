import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function AnimeCard({anime})
{
    const poster_image = "https://image.tmdb.org/t/p/w300" + anime.poster;
    
    return (
        <li className={styles.movieCard}>
            <Link to={"/animes/" + anime.idanime}>
                <img className={styles.moviePoster} src={poster_image} alt="image" width={230} height={345}></img>
            </Link>
            <div>
                <strong>{anime.title}</strong>
            </div>
        </li>
    );
}