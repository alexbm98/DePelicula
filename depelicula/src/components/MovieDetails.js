import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import styles from "./MovieDetails.module.css";
import { Button, Modal } from "react-bootstrap";

export function MovieDetails({ token })
{
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [showModal, setShowModal] = useState(false);

    token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        fetch('http://localhost:8080/films/' + id)
        .then(response => response.json())
        .then(data => setMovie(data))
    }, []);

    const poster_image = "https://image.tmdb.org/t/p/w300" + movie.poster;

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    function LoginException() {
        return (
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Oops! Seems you are not logged</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You need to be logged in order to watch trailers.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Link to="/login">
                        <Button variant="primary" type="submit">
                            Go to Login
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        );
    }

    function WatchableTrailer() {
        if (token != null) {
            return (<Link to={"/films/" + id + "/trailer"}>
                        <button className={styles.trailerButton}>Watch trailer</button>
                    </Link>);
        } else {
            return (<button className={styles.trailerButton} onClick={openModal}>Watch trailer</button>);
        }
    }

    return (
        <div className={styles.bg}>
            <NavigationBar token={token}></NavigationBar>
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
                <WatchableTrailer></WatchableTrailer>
                <LoginException></LoginException>
                <Link to="/films">
                    <button className={styles.cancelButton}>Go back</button>
                </Link>
            </div>
        </div>
    )
}