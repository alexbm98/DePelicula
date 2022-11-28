import styles from "./Login.module.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';

export function Login({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        await fetch('http://localhost:8080/auth/signin',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
          .then(data => {
                if (data.accessToken == null) {
                    setMsg("You have entered wrong username or password")
                }
                else {
                    setToken(data);
                    localStorage.setItem("token", JSON.stringify(data));
                    navigate('/films');
                }
            })
    }

    return (
        <div>
            <div className={styles.centrado}>
                <form className={styles.auth_form} onSubmit={handleSubmit}>
                    <div className={styles.auth_form_content}>
                        <h3 className="Auth-form-title">Log In</h3>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter your username"
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <label style={{ color: 'red', padding: '9px', fontSize: '15px', fontFamily: 'Calibri', fontStretch: '50%' }}>{msg}</label>
                        <hr className="hr"/>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary mt-1">
                                Log In
                            </button>
                        </div>
                        <p className="text-right mt-3">
                            Don't have an account? <a href="/signIn">Sign In</a>
                        </p>
                        <p className="text-right mt-3">
                            <a href="/films">Continue without logging in...</a>
                        </p>
                    </div>
                </form> 
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};