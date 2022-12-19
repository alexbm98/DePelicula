import styles from "./Login.module.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {

    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [passwordConf, setPasswordConf] = useState();
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        if (password == passwordConf) {
            await fetch('http://localhost:8080/auth/signup',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                roles: ["user"]
            })
        }).then(response => response.json())
          .then(async data => {
                if (data.message == "User registered successfully!") {
                    setMsg("User registered successfully!");
                    await timeout(2000);
                    navigate('/login');
                }
                else {
                    setMsg("Error");
                }
            })
        } else {
            setMsg("The password and the confirmation password don't match!");
        }

        
    }

    function SuccessfulReg() {
        if (msg == "User registered successfully!") {
            return (<label style={{ color: 'green', padding: '9px', fontSize: '15px', fontFamily: 'Calibri', fontStretch: '50%' }}>{msg}</label>);
        }
        else {
            return (<label style={{ color: 'red', padding: '9px', fontSize: '15px', fontFamily: 'Calibri', fontStretch: '50%' }}>{msg}</label>);
        }
    }

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    return (
        <div>
            <div className={styles.centrado}>
                <form className={styles.auth_form} onSubmit={handleSubmit}>
                    <div className={styles.auth_form_content}>
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter your email..."
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <label className={styles.warningAdvice}>It must be a valid email</label>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter a valid username..."
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter a valid password..."
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <label className={styles.warningAdvice}>The password must contain letters and numbers</label>
                        <div className="form-group mt-3">
                            <label>Confirm password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter your password again..."
                                onChange={e => setPasswordConf(e.target.value)}
                            />
                        </div>
                        <SuccessfulReg></SuccessfulReg>
                        <hr className="hr"/>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary mt-1">
                                Sign In
                            </button>
                            <button className="btn btn-secondary mt-1" onClick={() => navigate(-1)}>
                                Back
                            </button>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    );
}