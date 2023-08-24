export default class Toolbar {
    _toolbar;
    constructor({buttons} = {buttons: Array}) {
        this._toolbar = document.createElement("div");
        this._toolbar.className = "toolbar flex"
        if (buttons.length > 0) {
            buttons.forEach(element => {
                this.toolbar.appendChild(element.button);
            });
        }
    }

    get toolbar() {
        return this._toolbar;
    }
}

export class ToolbarButton {
    _button;
    constructor(text, handle) {
        this._button = document.createElement("button");
        this._button.className = "toolbar-button";
        this._button.innerText = text;
        this._button.addEventListener('click', handle);
    }

    get button() {
        return this._button;
    }
}