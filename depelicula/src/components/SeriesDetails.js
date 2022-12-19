import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import styles from "./MovieDetails.module.css";
import { Button, Modal } from "react-bootstrap";
import NetflixLogo from '../images/netflix_logo.png';
import HBOLogo from '../images/hbo_logo.jpeg';
import AmazonLogo from '../images/amazonprime_logo.webp';
import DisneyLogo from '../images/disney_logo.jpg';
import AppleTVLogo from '../images/appletv_logo.png';

export function SeriesDetails({ token })
{
    const {id} = useParams();

    const [series, setSeries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        fetch('http://localhost:8080/series/' + id)
        .then(response => response.json())
        .then(data => setSeries(data))
    }, []);

    const poster_image = "https://image.tmdb.org/t/p/w300" + series.poster;

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
            return (<Link to={"/series/" + id + "/trailer"}>
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
                    <li className={styles.detailsElement}>{series.title}</li>
                    <li className={styles.detailsElement}><strong>Genre</strong></li>
                    <li className={styles.detailsElement}>{series.genre}</li>
                    <li className={styles.detailsElement}><strong>Seasons</strong></li>
                    <li className={styles.detailsElement}>{series.seasons}</li>
                    <li className={styles.detailsElement}><strong>Release date</strong></li>
                    <li className={styles.detailsElement}>{series.release_date}</li>
                    <li className={styles.detailsElement}><strong>Summary</strong></li>
                    <li className={styles.detailsElement}>{series.summary}</li>
                </ul>
                <WatchableTrailer></WatchableTrailer>
                <LoginException></LoginException>
                <button className={styles.cancelButton} onClick={() => navigate(-1)}>Go back</button>
            </div>
            <div className={styles.whereToWatch}>
                <span>Watch now on:</span>
                <div className={styles.logo_text}>
                    <ul>
                        {String(series.platforms).split(",").map((platform) => {
                            if (platform == "Netflix") {
                                return <a href="https://www.netflix.com/es/"><img className={styles.platform_icon} src={NetflixLogo}></img></a>
                            } else if (platform == "HBOMax") {
                                return <a href="https://www.hbomax.com/es/es"><img className={styles.platform_icon} src={HBOLogo}></img></a>
                            } else if (platform == "AmazonPrime") {
                                return <a href="https://www.primevideo.com/"><img className={styles.platform_icon} src={AmazonLogo}></img></a>
                            } else if (platform == "Disney+") {
                                return <a href="https://www.disneyplus.com/es-es"><img className={styles.platform_icon} src={DisneyLogo}></img></a>
                            } else if (platform == "AppleTV") {
                                return <a href="https://www.apple.com/es/apple-tv-plus/"><img className={styles.platform_icon} src={AppleTVLogo}></img></a>
                            } else {
                                return <span>Only in theaters</span>
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}