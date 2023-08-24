export class TopPanel {
    _infos;
    _panel;
    constructor({ title, infos} = { title: "String", infos: PanelInfos }) {
        this._title = title;
        this._infos = infos;
        this._panel = document.createElement("header");
        this._panel.className = "top-panel flex"
        const panel_title = document.createElement("h1");
        panel_title.className = "panel-title";
        panel_title.innerText = this._title;
        const panel_infos_container = document.createElement("div");
        panel_infos_container.className = "panel-infos-container";
        const panel_infos = `
            <span class="panel-info info-gains">Gains: $<i class="info-value">${this._infos.gains}</i></span>
            <span class="panel-info info-losses">Losses: $<i class="info-value">${this._infos.losses}</i></span>
            <span class="panel-info info-rest">Rest: $<i class="info-value">${this._infos.rest}</i></span>
        `;

        panel_infos_container.innerHTML = panel_infos;
        this._panel.appendChild(panel_title);
        this._panel.appendChild(panel_infos_container);
    }

    get panel() {
        return this._panel;
    }

    updateInfos() {
        const panel_infos = this._panel.querySelectorAll(".panel-info");
        this._infos.rest = this._infos.gains - this._infos.losses;
        console.warn(this._infos.rest);
        this._infos.update();
        panel_infos.forEach((e, i) => {
            e.querySelector(".info-value").innerText = this._infos.infos[i];
        });
    }

    textColor(color) {
        this._panel.style.color = color;
    }
}

export class PanelInfos {
    constructor({ gains, losses, rest } = { gains: 0, losses: 0, rest: 0}) {
        this._gains = gains;
        this._losses = losses;
        this._rest = rest;
        this._infos = [];
    }

    get gains() {
        return this._gains;
    }
    set gains(value) {
        this._gains = value;
    }
    get losses() {
        return this._losses;
    }
    set losses(value) {
        this._losses = value;
    }
    get rest() {
        return this._rest;
    }
    set rest(value) {
        this._rest = value;
    }

    get infos() {
        return this._infos;
    }
    
    update() {
        this._infos = [
            this._gains,
            this._losses,
            this._rest
        ]
    }
}