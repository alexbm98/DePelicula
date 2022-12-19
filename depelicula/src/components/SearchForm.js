import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function SearchForm({ token, setMovies }) {

    let [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        event.preventDefault();
        setSearchTerm(event.target.value);

        if (event.target.value == "") {
            setMovies("%");
        }
        else {
            setMovies(event.target.value);
        }
    };

    return (<Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </Form>
    );
}