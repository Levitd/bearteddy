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
                                <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
                                    id="main" to="/"><i className="bi bi-house-door bi-lg"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item" key="autors" >
                                <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
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
                                <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="login" id="login">
                                    <div className='flex_row'>
                                        <i className="bi bi-box-arrow-in-right bi-lg"></i>
                                        <span className='link_text'><FormattedMessage id='login' /></span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={`nav-item nav-item_personalArea ${!currentUser ? "d-none" : ""}`} key="personalArea" >
                                <NavLink className=
                                    {
                                        ({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="personalArea" id="personalArea">
                                    <div className='flex_row'>
                                        <i className="bi bi-person-check-fill bi-lg"></i>
                                        <span className='link_text'><FormattedMessage id='personal_area' /></span>
                                    </div>
                                </NavLink>
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