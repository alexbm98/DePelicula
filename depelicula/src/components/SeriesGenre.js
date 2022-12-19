import { useState, useEffect } from "react";
import { SeriesCard } from "./SeriesCard";
import { NavigationBar } from "./NavigationBar";
import styles from "./MoviesGrid.module.css";
import { useParams } from "react-router-dom";

export function SeriesGenre({ token })
{
    let {genre} = useParams();

    let [series, setSeries] = useState([]);
    let [search, setSearch] = useState("%");

    useEffect(() => {
        fetch('http://localhost:8080/series/seriesByGenre', {
            method: 'POST',
            body: genre
        }).then(response => response.json())
        .then(data => {setSeries(data);})
    }, [genre]);

    return (
        <div>
            <NavigationBar token={token} setSearch={setSearch}></NavigationBar>
            <ul className={styles.moviesGrid}>
                {series.map((srs) => {
                    return <SeriesCard series={srs}></SeriesCard>
                })}
            </ul>
        </div>
    );
}