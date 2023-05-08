import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

const MainPage = () => {
    const intl = useIntl()
    // console.log(intl.messages.search)
    const placeholder = intl.messages.search;
    return (
        <div className="main">
            <div className="flex_row">
                <div className="search flex_row">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search-heart"></i></button>
                    </div>
                    <div className="ms-1 btn-filters">
                        <button type="button" class="btn btn-secondary"><i className="bi bi-filter-square"></i></button>
                    </div>
                </div>
                <div className="filters pe-2 flex_row">
                    <div className="filter">
                        <select className="form-select form-select_filters" aria-label="Default select news">
                            <option value="1">Самые новые</option>
                            <option value="2">Любимчики</option>
                            <option value="3">Еще не проданные</option>
                            <option value="4">Нашедшие свой дом</option>
                            <option value="5">Ищут новый дом</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select className="form-select form-select_filters" aria-label="Default select size">
                            <option value="1">Все размеры</option>
                            <option value="2">до 14 см</option>
                            <option value="3">от 14 см до 20 см</option>
                            <option value="4">от 20 см до 35 см</option>
                            <option value="5">от 35 см и выше</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select className="form-select form-select_filters" aria-label="Default select price">
                            <option value="1">Любая цена</option>
                            <option value="2">до 100$ </option>
                            <option value="3">от 100$ до 250$</option>
                            <option value="4">от 250$ до 500$</option>
                            <option value="5">от 500$ и больше</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
