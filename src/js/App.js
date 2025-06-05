import Game from './Game';
import Copyrights from './Copyrights';

export default class App {
    static init() {
        const copyrights = new Copyrights();
        if (copyrights.copyrights !== '© Aleksandr861, 2025') {
            Copyrights.stoleRights();
        }

        this.game = new Game();
    }
}