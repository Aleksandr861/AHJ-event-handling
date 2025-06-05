export default class Copyrights {
    constructor() {
        const link = document.querySelector('.copyrights__link');
        this.copyrights = link ? link.textContent : '';
    }

    static stoleRights() {
        console.error('This work has been stolen from https://github.com/Aleksandr861/AHJ-event-handling');
    }
}