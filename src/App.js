import React, { useState } from "react";
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

function App() {

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
          <NavBar currentLocale={currentLocale} handleChange={handleChangeLang} />
          <div className="page_link">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="autors" element={<AutorsPage />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </IntlProvider>
    </>
  );
}

export default App;