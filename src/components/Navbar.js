import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-custom navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Seu E-Commerce</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produtos" className="nav-link">Produtos</Link>
                        </li>
                    </ul>
                </div>
                <div className="search-bar">
                    <input className="form-control me-2 search-bar2" type="search" placeholder="Pesquisar produtos" aria-label="Search" />
                    <button className="btn search-button" type="submit">
                        <BsSearch size={18} color="#f39ac4" />
                    </button>
                </div>
                {/* Posicionar botões no topo direito da página e torná-los menores */}
                <div className="login-buttons">
                    <button className="btn btn-login btn-sm">Login</button>
                    <button className="btn btn-light btn-sm">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

