var Util = new function () {
    this.setToLocalStorage = function (key, item) {
        localStorage.setItem(key, JSON.stringify(item));
    }
    this.getFromLocalStorage = function (key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
