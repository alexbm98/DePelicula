import { useState, useEffect } from "react";
import { AnimeCard } from "./AnimeCard";
import { NavigationBar } from "./NavigationBar";
import styles from "./MoviesGrid.module.css";

export function AnimesGrid({ token })
{
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/animes')
        .then(response => response.json())
        .then(data => setAnimes(data))
        }, []);

    return (
        <div>
            <NavigationBar token={token}></NavigationBar>
            <ul className={styles.moviesGrid}>
                {animes.map((anime) => {
                    return <AnimeCard anime={anime}></AnimeCard>
                })}
            </ul>
        </div>
    );
}