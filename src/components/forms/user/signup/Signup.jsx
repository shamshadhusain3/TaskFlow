import React, { useState } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../../../constants';
import { signup } from '../../../../util/APIUtils';
import fbLogo from '/images/fb-logo.png';
import googleLogo from '/images/google-logo.png';
import githubLogo from '/images/github-logo.png';
import Alert from 'react-s-alert';

const Signup = (props) => {
    if (props.authenticated) {
        return (
            <Redirect
                to={{
                    pathname: "/",
                    state: { from: props.location }
                }}
            />
        );
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="signup-title">Signup with SpringSocial</h1>
                <SocialSignup />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm {...props} />
                <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
            </div>
        </div>
    );
};

const SocialSignup = () => (
    <div className="social-signup">
        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
            <img src={googleLogo} alt="Google" /> Sign up with Google
        </a>
        <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
            <img src={fbLogo} alt="Facebook" /> Sign up with Facebook
        </a>
        <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
            <img src={githubLogo} alt="Github" /> Sign up with Github
        </a>
    </div>
);

const SignupForm = (props) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const signUpRequest = { ...formState };

        signup(signUpRequest)
            .then(response => {
                Alert.success("You're successfully registered. Please login to continue!");
                props.history.push("/login");
            })
            .catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
            </div>
        </form>
    );
};

export default Signup;
