import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function SeriesCard({ series })
{
    const poster_image = "https://image.tmdb.org/t/p/w300" + series.poster;
    
    return (
        <li className={styles.movieCard}>
            <Link to={"/series/" + series.idfilm}>
                <img className={styles.moviePoster} src={poster_image} alt="image" width={230} height={345}></img>
            </Link>
            <div className={styles.movieName}>
                <strong>{series.title}</strong>
            </div>
        </li>
    );
}