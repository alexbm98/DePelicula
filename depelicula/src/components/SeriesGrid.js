import { useState, useEffect } from "react";
import { SeriesCard } from "./SeriesCard";
import { NavigationBar } from "./NavigationBar";
import styles from "./MoviesGrid.module.css";

export function SeriesGrid({ token })
{
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState("%");

    useEffect(() => {
        fetch('http://localhost:8080/series/seriesSearch', {
            method: 'POST',
            body: search
        }).then(response => response.json())
        .then(data => {setSeries(data);})
    }, [search]);

    return (
        <div>
            <NavigationBar token={token} setMovies={setSearch}></NavigationBar>
            <ul className={styles.moviesGrid}>
                {series.map((srs) => {
                    return <SeriesCard series={srs}></SeriesCard>
                })}
            </ul>
        </div>
    );
}