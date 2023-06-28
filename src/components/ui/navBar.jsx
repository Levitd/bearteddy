import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../i18n/locales";
import { useAuth } from "hooks/useAuth";

const NavBar = ({ currentLocale, handleChange }) => {
    const { currentUser } = useAuth();
    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN }]
    return (
        <div className="header">
            <div className="app">
                <header >
                    <nav className="navbar app-header">
                        <ul className="nav nav-pills">
                            <li className="nav-item" key="main">
                                <NavLink className="nav-link"
                                    // {
                                    //     ({ isActive }) =>
                                    //         isActive ? "nav-link active" : "nav-link"
                                    // }
                                    id="main" to="/"><i className="bi bi-house-door bi-lg"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item" key="autors" >
                                <NavLink className="nav-link"
                                    // {
                                    //     ({ isActive }) =>
                                    //         isActive ? "nav-link active" : "nav-link"
                                    // }
                                    to="autors" id="autors">
                                    <div className='flex_row'>
                                        <i className="bi bi-emoji-sunglasses bi-lg"></i>
                                        <span className='link_text'><FormattedMessage id='autors' /></span>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-flex">
                            <li className="nav-item me-2" key="lang" >
                                <div className='switcher'>
                                    <select className="form-select form-select-sm" onChange={handleChange} value={currentLocale}>
                                        {languages.map(({ name, code }) => (
                                            <option key={code} value={code}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </li>
                            <li className={`nav-item nav-item_login ${currentUser ? "d-none" : ""}`} key="login" >
                                <NavLink className="nav-link"
                                    // {
                                    //     ({ isActive }) =>
                                    //         isActive ? "nav-link active" : "nav-link"
                                    // }
                                    to="login" id="login">
                                    <div className='flex_row'>
                                        <i className="bi bi-box-arrow-in-right bi-lg"></i>
                                        <span className='link_text'><FormattedMessage id='login' /></span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`nav-item nav-item_personalArea ${!currentUser ? "d-none" : ""}`} key="personalArea" >
                                {/* <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="personalArea" id="personalArea">
                                    <div className='flex_row'>
                                        <i className="bi bi-person-check-fill bi-lg"></i>
                                        <span className='link_text'><FormattedMessage id='personal_area' /></span>
                                    </div>
                                </NavLink> */}
                                <NavLink className="nav-item nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    {/* <span className="navbar-toggler-icon"></span> */}
                                    <div className='flex_row'>
                                        <i className="bi bi-person-check-fill bi-lg"></i>
                                        <span className='link_text'><FormattedMessage id='personal_area' /></span>
                                    </div>
                                </NavLink>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><FormattedMessage id='personal_area' /></h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item" key="personal_data">
                                                <NavLink className="nav-link" aria-current="page" to="personalArea" id="personalArea">
                                                    <i className="bi bi-person-check-fill bi-lg"> </i>
                                                    <span className='canvas_text'><FormattedMessage id='personal_data' /></span>
                                                </NavLink>
                                            </li>
                                            <li className="nav-item" key="link_perosonal" to="link_perosonal" id="link_perosonal">
                                                <NavLink className="nav-link" aria-current="page">
                                                    <span className='canvas_text'>
                                                        Link
                                                    </span>
                                                </NavLink>
                                            </li>
                                            <li className="nav-item dropdown" key="dropdown_personal_shop">
                                                <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span className='canvas_text'>
                                                        Настройки магазина
                                                    </span>
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink className="dropdown-item" >
                                                        <span className='canvas_text'>
                                                            Action
                                                        </span>
                                                    </NavLink></li>
                                                    <li><NavLink className="dropdown-item" >
                                                        <span className='canvas_text'>
                                                            Another action
                                                        </span>
                                                    </NavLink></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><NavLink className="dropdown-item" >
                                                        <span className='canvas_text'>
                                                            Something else here
                                                        </span>
                                                    </NavLink></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div >
        </div>
    );
};

export default NavBar;

// {`nav-item ${!user ? "d-none" : ""}`}