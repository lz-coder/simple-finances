import { PanelInfos, TopPanel } from "./TopPanel";

export class Finance {
    constructor(title, value, desc, {infos, panel, mode} = {infos: PanelInfos, panel: TopPanel, mode: "gain"}) {
        this._title = title;
        this._value = value;
        this._desc = desc;
        this._infos = infos;
        this._panel = panel;

        switch (mode) {
            case "gain":
                this._infos.gains += this._value;
                this._borderColor = "green";
                break;
            case "losses":
                this._infos.losses += this._value;
                this._borderColor = "red";
                break;
        }

        this._card = financeCard(this);
        this.updateInfos();
    }

    get title() { return this._title; }
    get value() { return this._value; }

    get borderColor() { return this._borderColor; }
    set borderColor(value) {
        this._borderColor = value;
    }

    get card() { return this._card; }
    get desc() { return this._desc; }

    updateInfos() {
        this._infos.update();
        this._panel.updateInfos();
    }
}

export function financeCard(Finance) {
    const card = document.createElement("div");
    card.className = "finance-card flex";
    const card_content = `
        <h2 class="card-title">${Finance.title}</h2>
        <i class="card-value">$$: ${Finance.value}</i>
        <p class="card-desc">${Finance.desc}</i>
    `
    card.innerHTML = card_content;
    card.style.border = `2px solid ${Finance.borderColor}`;
    return card;
}