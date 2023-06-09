import { LOCALES } from './locales'

export const messages = {
    [LOCALES.ENGLISH]: {
        accept: `Accept`,
        save: `Save`,
        save_changes: `Save changes`,
        data_saved: `Data saved`,
        cancel: `Cancel`,
        cancel_changes: `Cancel changes`,
        login_or_register: `Login or register`,
        login: `Login`,
        logout: `Logout`,
        label_not_transmitted: `Laber not transmitted`,
        registration: `Registration`,
        not_registered: `Not registered`,
        already_registered: `Already registered`,
        email: `Email`,
        email_is_required: `Email is required`,
        email_entered_incorrectly: `Email entered incorrectly`,
        the_specified_address_is_already_registered: `the specified address is already registered`,
        the_specified_address_is_not_registered: `The specified address is not registered`,
        password: `Password`,
        password_or_email_is_incorrect: `Email or password is incorrect`,
        email_is_incorrect: `Email is incorrect`,
        password_is_incorrect: `Password is incorrect`,
        error_has_occurred_please_try_again: `An error has occurred, please try again`,
        password_is_required: `Password is required`,
        password_must_contain_at_least_1_capital_letter: `Password must contain at least 1 capital letter`,
        password_must_contain_at_least_1_number: `Password must contain at least 1 number`,
        password_must_be_at_least_8_characters: `Password must be at least 8 characters`,
        registration_is_not_possible_without_accepting_the_license_agreement: `
        Registration is not possible without accepting the license agreement`,
        choose_your_gender: `Choose your gender`,
        remain_in_the_system: `Remain in the system`,
        you_have_successfully_registered: `
        You have successfully registered`,
        you_are_not_registered_or_not_logged_in: `You are not registered or not logged in...`,
        personal_area: `Personal Area`,
        personal_data: `Personal Information`,
        your_first_and_last_name: `Your first and last name`,
        flName_is_required: `First and last name are required`,
        flName_must_be_at_least_2_characters: `First name and last name cannot be less than 2 characters`,
        autors: `Autors`,
        male: `Male`,
        female: `Female`,
        license_agreement: `license agreement`,
        to_main: `To main`,
        go: `Go`,
        search: `Search`,
        price_display:
            'How {n, number, ::currency/USD} is displayed in your selected language',
        number_display:
            'This is how {n, number} is formatted in the selected locale',
        start_today: 'Start Today: {d, date}',
        // меню
        about_project: 'About the project',
        contact_us: 'Contact us',
        click_count: 'You clicked {count, plural, one {# time} other {# times}}',
        // filter: 
        the_newest: `The newest`,
        favorite: `Favorite`,
        // date
        date_of_birth: `Date of birth`,
        max_date_of_birth: `
        Date of birth cannot be greater than the current day`,
        full_years: `Full years`,
        years: `years`,
        year: `year`,
        of_the_year: `years`,
        // link
        link_is_incorrect: `link is not correct`,
        your_telegram_profile: `Your telegram profile`
    },
    [LOCALES.RUSSIAN]: {
        accept: `Принять`,
        save: `Сохранить`,
        save_changes: `Сохранить изменения`,
        data_saved: `Данные сохранены`,
        cancel: `Отмена`,
        cancel_changes: `Отменить изменения`,
        login_or_register: 'Войти или зарегистрироваться',
        login: `Войти`,
        logout: `Выход`,
        label_not_transmitted: `Значение не передано`,
        registration: `Регистрация`,
        not_registered: `Не зарегистрированы`,
        already_registered: `Уже зарегистрированы`,
        email: `Электронная почта`,
        email_is_required: `Электронная почта обязательна для заполнения`,
        email_entered_incorrectly: `Электронная почта введена некорректно`,
        the_specified_address_is_already_registered: `Указанный адрес уже зарегистрирован`,
        the_specified_address_is_not_registered: `Указанный адрес не зарегистрирован`,
        password: `Пароль`,
        password_or_email_is_incorrect: `Email или пароль указаны не верно`,
        email_is_incorrect: `Email указан не верно`,
        password_is_incorrect: `Пароль указан не верно`,
        error_has_occurred_please_try_again: `Произошла ошибка, попробуйте еще раз`,
        password_is_required: `Пароль обязателен для заполнения`,
        password_must_contain_at_least_1_capital_letter: `Пароль должен содержать хотя бы 1 заглавную букву`,
        password_must_contain_at_least_1_number: `Пароль должен содержать хотя бы 1 цифру`,
        password_must_be_at_least_8_characters: `Пароль должен быть не менее 8 символов`,
        registration_is_not_possible_without_accepting_the_license_agreement: `
        Без принятия лицензионного соглашения регистрация невозможна`,
        choose_your_gender: `Выберите ваш пол`,
        remain_in_the_system: `Оставаться в системе`,
        you_have_successfully_registered: `
        Вы успешно зарегистрировались`,
        you_are_not_registered_or_not_logged_in: `Вы не зарегистрированы или не вошли в систему...`,
        personal_area: `Личный кабинет`,
        personal_data: `Личные данные`,
        your_first_and_last_name: `Ваше имя и фамилия`,
        flName_is_required: `Имя и фамилия обязательны для заполнения`,
        flName_must_be_at_least_2_characters: `Имя и фамилия не могут быть меньше 2 символов`,
        autors: `Авторы`,
        male: `Мужской`,
        female: `Женский`,
        license_agreement: `лицензионное соглашение`,
        to_main: `На главную`,
        go: `Перейти`,
        search: `Поиск`,
        price_display:
            `Как {n, number, ::currency/RUB} отображается на выбранном языке`,
        number_display:
            `Вот как {n, number} форматируется на основе выбранной локации`,
        start_today: `Начни сегодня: {d, date}`,
        // меню
        about_project: 'О проекте',
        contact_us: 'Свяжитесь с нами',
        click_count: `Вы кликнули {count, plural, one {# раз} other {# раз(а)}}`,
        // filter: 
        the_newest: `Самые новые`,
        // date
        favorite: `Любимчики`,
        date_of_birth: `Дата рождения`,
        max_date_of_birth: `Дата рождения не может быть больше текущего дня`,
        full_years: `Полных лет`,
        years: `лет`,
        year: `год`,
        of_the_year: `года`,
        // link
        link_is_incorrect: `Cсылка не корректна`,
        your_telegram_profile: `Ваш профиль в телеграмм`

    }
}