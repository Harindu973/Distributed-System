import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "..//../assets/images/login.png";
import { useAuth } from "../../contexts/AuthContext";

import { Form, Container } from "./styles";

const SignIn = () => {
    var history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [email_err, setEmailErr] = useState("");
    const [password_err, setPasswordErr] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();

    useEffect(() => {
        document.title = "homephysioAdmin - Login";
    }, []);

    async function handleLogIn(e) {
        e.preventDefault();
        if (email.length == 0) {
            setEmailErr("Eneter the email");
        }

        if (password.length == 0) {
            setPasswordErr("Eneter the password");
        }

        if (!email || !password) {
            setError("User Name or password empty ");
        } else {
            try {
                await login(email, password);
                history.push("/");
            } catch (err) {
                setError("Email or password incorret");
            }
        }
    }

    return (
        <div style={{ backgroundColor: "#FEB8C3" }}>
            <Container style={{ height: "100vh", padding: "0 10px" }}>
                <Form autoComplete="off" onSubmit={handleLogIn}>
                    <img src={Logo} alt="HomePhysio" />
                    <div style={{ paddingBottom: 20 }}> <h2>HOMEPHYISO ADMIN</h2></div>
                    {error && <p>{error}</p>}
                    <input
                        name="userName"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailErr("");
                        }}
                        value={email}
                        className={email_err != "" ? "invalid" : ""}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordErr("");
                        }}
                        value={password}
                        className={password_err != "" ? "invalid" : ""}
                    />
                    <button type="submit">Login</button>
                    <hr />
                </Form>
            </Container>
        </div>
    );
};

export default SignIn;
