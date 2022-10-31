import { useState, useEffect, useNavigate } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function SearchForm() {

    let [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        event.preventDefault();
        setSearchTerm(event.target.value);
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
                <Link to={"/films/search/" + searchTerm}>
                    <Button variant="outline-dark">Search</Button>
                </Link>
            </Form>
    );
}