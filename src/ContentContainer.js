export default class ContentContainer {
    _container;
    constructor() {
        this._container = document.createElement("div");
        this._container.className = "content-container";
    }

    get container() {
        return this._container;
    }
    
}