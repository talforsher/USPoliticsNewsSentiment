import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src='/Images/logo.svg' alt='' className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <img src='/Images/nav-toggle.svg' alt='' className="img-fluid" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/howitworks">How it Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/accesstoken">Access Token</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">FAQ's</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                        </ul>
                        <span className="btn btnOne" role="button" tabIndex="0">
                            Get API Access Token
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
