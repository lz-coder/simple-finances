export default class FinanceDialog {
    constructor(mode, Finance) {
        this._dialog = document.createElement("dialog");
        this._dialog.className = "finance-dialog";
        const title_text_element = document.createElement("h2");
        title_text_element.className = "dialog-title";
        const title_input_element = document.createElement("input");
        let title_text, dialog_border;

        title_text_element.addEventListener('click', () => {this.editTitle(title_text_element, title_input_element)});
        title_input_element.addEventListener('focusout', () => {this.editTitle(title_text_element, title_input_element)});

        switch (mode) {
            case "gains":
                title_text = "New gains";
                dialog_border = "green";
                break;
            case "losses":
                title_text = "New losses";
                dialog_border = "red";
                break;
        }

        title_text_element.innerText = title_text;
        this._dialog.style.border = `2px solid ${dialog_border}`;

        this._dialog.appendChild(title_text_element);

        this._dialog.addEventListener('close', () => {
            document.documentElement.removeChild(this._dialog);
        });
    }

    get dialog() { return this._dialog; }

    show() {
        document.documentElement.append(this._dialog);
        this._dialog.showModal();
    }

    editTitle(text, input) {
        if (this._dialog.contains(text)) {
            const current_title = text.innerText;
            this._dialog.removeChild(text);
            this._dialog.appendChild(input);
            input.focus();
            input.value = current_title;
        } else {
            const current_title = input.value;
            this._dialog.removeChild(input);
            this._dialog.appendChild(text);
            text.innerText = current_title;
        }
    }
}