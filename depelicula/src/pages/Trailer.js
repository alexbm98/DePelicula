import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { NavigationBar } from "../components/NavigationBar";
import styles from "./Trailer.module.css";

export function Trailer({type, token})
{
    const {id} = useParams();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/' + type + id)
        .then(response => response.json())
        .then(data => setMovie(data))
        }, []);

    return (
        <div>
            <NavigationBar token={token}></NavigationBar>
            <div className={styles.container}>
                <iframe
                    width="880" 
                    height="500" 
                    src={movie.trailer_url}
                    title={movie.title} 
                    frameborder="0" 
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
            </div>
        </div>
    );
}