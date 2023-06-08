import React, { useState, useEffect } from "react";
import NavBar from "./components/ui/navBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../src/i18n/locales";
import { messages } from "../src/i18n/messages";

import MainPage from "./layout/mainPage";
import AutorsPage from "./layout/autorsPage";
import Login from "./layout/login";
import Footer from "./components/ui/footer";
import SuccRegistr from "./components/ui/succRegistr";
import NotRegistered from "./components/ui/notRegistered";
import * as utils from "../src/utils/util";
import PersonalArea from "./components/ui/personalArea";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from "hooks/useUsers";

function App() {
  const user = utils.getStorage('user_activ');
  const [isAuth] = useState(user ? true : false);

  function getInitialLocale() {
    const savedLocale = JSON.parse(localStorage.getItem('locale'));
    return savedLocale || LOCALES.ENGLISH;
  }
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const handleChangeLang = ({ target: { value } }) => {
    setCurrentLocale(value);
    localStorage.setItem('locale', JSON.stringify(value));
  };

  return (
    <>
      <IntlProvider messages={messages[currentLocale]}
        locale={currentLocale} defaultLocale={LOCALES.ENGLISH}
      >
        <BrowserRouter>
          <NavBar currentLocale={currentLocale} handleChange={handleChangeLang} isAuth={isAuth} />
          <div className="page_link">
            <UserProvider>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="autors" element={<AutorsPage />} />
                <Route path="login" element={<Login />} user={user} />
                <Route path="successful_registration" element={<SuccRegistr />} />
                <Route path="not-registered" element={<NotRegistered />} />
                <Route path="personalArea" element={<PersonalArea />} userActive={user} />
              </Routes>
            </UserProvider>
          </div>
          <Footer />
        </BrowserRouter>
      </IntlProvider>
      <ToastContainer />
    </>
  );
}

export default App;