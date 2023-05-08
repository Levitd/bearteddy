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
}
export function hasUser(mail, password) {
    const users = this.getStorage('users');
    if (users) {
        const findUser = users.find((el) => el.email === mail && el.password === password);
        return findUser;
    } else {
        return false;
    }
}