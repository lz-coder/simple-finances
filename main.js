import './css/style.css'
import ContentContainer from './src/ContentContainer';
import { Finance } from './src/Finance';
import FinanceDialog from './src/FinanceDialog';
import Toolbar, { ToolbarButton } from './src/Toolbar';
import { TopPanel, PanelInfos } from './src/TopPanel'
const App = document.querySelector("#app");


const panel_infos = new PanelInfos();
const panel = new TopPanel({title: "$Finances$", infos: panel_infos});
panel.textColor("#fff");

const toolbar_button_gain = new ToolbarButton("+", () => {
    const gain_finance = new Finance("", 0, "", {infos: panel_infos, panel: panel, mode: "gain"});
    const dialog = new FinanceDialog("gains", gain_finance);
    dialog.show();
});
const toolbar_button_losses = new ToolbarButton("-", () => {panel_infos.losses += 10; panel.updateInfos();});
const toolbar = new Toolbar({buttons:[
    toolbar_button_gain,
    toolbar_button_losses,
]});
const content_container = new ContentContainer();

const finance = new Finance("Freela01", 200, "meu primeiro freela", {
    infos: panel_infos, panel: panel, mode: "gain"
});

const finance2 = new Finance("Freela01", 100, "meu primeiro freela", {
    infos: panel_infos, panel: panel, mode: "losses"
});

content_container.container.appendChild(finance.card);
content_container.container.appendChild(finance2.card);


App.appendChild(panel.panel);
App.appendChild(toolbar.toolbar);
App.appendChild(content_container.container);