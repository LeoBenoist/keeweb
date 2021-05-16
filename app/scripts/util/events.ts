import { TypedEmitter } from 'tiny-typed-emitter';

interface EventSpec {
    'app-minimized': () => void;
    'app-maximized': () => void;
    'app-unmaximized': () => void;
    'dark-mode-changed': (dark: boolean) => void;
}

class Events extends TypedEmitter<EventSpec> {
    constructor() {
        super();
        this.setMaxListeners(1000);
    }
}

const instance = new Events();

export { instance as Events };
