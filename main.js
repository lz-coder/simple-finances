import './css/style.css'
import ContentContainer from './src/ContentContainer';
import Toolbar, { ToolbarButton } from './src/Toolbar';
import { TopPanel, PanelInfos } from './src/TopPanel'
const App = document.querySelector("#app");


const panel_infos = new PanelInfos();
const panel = new TopPanel({title: "Finances", infos: panel_infos});

const toolbar_button_gain = new ToolbarButton("+", () => {panel_infos.gains += 10; panel.updateInfos();});
const toolbar_button_losses = new ToolbarButton("-", () => {panel_infos.losses += 10; panel.updateInfos();});
const toolbar = new Toolbar({buttons:[
    toolbar_button_gain,
    toolbar_button_losses,
]});
const content_container = new ContentContainer();

App.appendChild(panel.panel);
App.appendChild(toolbar.toolbar);
App.appendChild(content_container.container);