// import { useIntl } from "react-intl";

export function getStorage(el) {
    return JSON.parse(localStorage.getItem(el));
};
export function setStorage(el, data) {
    localStorage.setItem(el, JSON.stringify(data));
    // Потом надо будет вернуть ID добавленного элемента
    return true;
};
export function setStorageRemove(el) {
    localStorage.removeItem(el);
    return true;
};
export function hasEmail(mail) {
    const users = this.getStorage('users');
    if (users) {
        const findUser = users.findIndex((el) => el.email === mail);
        return findUser;
    } else {
        return -1;
    }
};
export function hasUser(mail, password) {
    const users = this.getStorage('users');
    if (users) {
        const findUser = users.find((el) => el.email === mail && el.password === password);
        return findUser;
    } else {
        return false;
    }
};
export function updateUser(oldData, newData) {
    const hasUser = this.hasUser(oldData.email, oldData.password); // Ищем по данным активного пользователя, вдруг ее поменяли...
    if (hasUser) {
        let users = this.getStorage('users');
        const newUsersArray = users.map((us) => {
            if (us.email === oldData.email) {
                return newData;
            } else {
                return us;
            }
        });
        this.setStorage("users", newUsersArray);
        this.setStorage("user_activ", [newData]);
    }
};
export function showMessage(strongLabel, label, ColorMessage = "info", time = 3000) {
    const messageWindow = document.querySelector(".message-window");
    const labelmessage = (strongLabel || label) ? (strongLabel ? `<strong>${strongLabel}</strong>` : "") + (label ? label : "") : "";
    if (labelmessage) {
        messageWindow.textContent = labelmessage;
    }
    messageWindow.classList.add(`alert-${ColorMessage}`);
    messageWindow.classList.remove("d-none");
    messageWindow.classList.add("show");
    setTimeout(() => {
        messageWindow.classList.remove("show");
        setTimeout(() => {
            messageWindow.classList.add("d-none");
        }, 300);
    }, time);
};
export function getDate(date) {
    if (date === "today") {
        const newDate = new Date();
        return `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, "0")}-${String(newDate.getDate()).padStart(2, "0")}`;
    }
};
export function maxDateOfToday(date) {
    const today = this.getDate("today");
    return date > today;
}
export function getFullYearOfBirth(date) { // Полных лет с рождения до текущего дня
    if (date) {
        let today = new Date();
        let birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();

        let m = today.getMonth() - birthDate.getMonth();
        // let d = today.getDay() - birthDate.getDay();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age > 0 && age <= 150) {
            const text = letterYear(age);
            return [age, text];
        } else {
            return "";
        }
    } else {
        return "";
    }
}
function letterYear(age) {
    const n2 = Number(String(age).substring(String(age).length - 2));
    const n1 = Number(String(age).substring(String(age).length - 1));
    if (n1 === 0 || (n1 >= 5 && n1 <= 9) || (n2 >= 10 && n2 <= 20)) {
        return "years";
    } else if (n1 === 1) {
        return "year";
    } else if (n1 === 2 || n1 === 3 || n1 === 4) {
        return "of_the_year";
    }
};