import React, { useState, useEffect } from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../../../constants';
import { login } from '../../../../util/APIUtils';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import googleLogo from '/images/google-logo.png';
import githubLogo from '/images/github-logo.png';
import Alert from 'react-s-alert';

// import Alert from 'react-s-alert';

const Login = ({ authenticated }) => {
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.error) {
            setTimeout(() => {
                Alert.error(location.state.error, {
                    timeout: 5000,
                });
                history.replace({
                    pathname: location.pathname,
                    state: {},
                });
            }, 100);
        }
    }, [location, history]);

    if (authenticated) {
        return (
            <Redirect
                to={{
                    pathname: '/',
                    state: { from: location },
                }}
            />
        );
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <SocialLogin />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm />
                <span className="signup-link">
                    New user? <Link to="/signup">Sign up!</Link>
                </span>
            </div>
        </div>
    );
};

const SocialLogin = () => (
    <div className="social-login">
        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
            <img src={googleLogo} alt="Google" /> Log in with Google
        </a>
        <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
            <img src={fbLogo} alt="Facebook" /> Log in with Facebook
        </a>
        <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
            <img src={githubLogo} alt="Github" /> Log in with Github
        </a>
    </div>
);

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginRequest = { email, password };

        login(loginRequest)
            .then((response) => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                history.push('/');
            })
            .catch((error) => {
                Alert.error(
                    (error && error.message) || 'Oops! Something went wrong. Please try again!'
                );
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
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
                    value={password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">
                    Login
                </button>
            </div>
        </form>
    );
};

export default Login;
