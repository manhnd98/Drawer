import {injectable} from "tsyringe";
import {fromEvent} from 'rxjs';

@injectable()
class MainPopup {
    private readonly editModeEl: HTMLInputElement;
    private readonly exportBD;
    private readonly drawLine;

    constructor() {
        this.editModeEl = document.getElementById("editMode") as HTMLInputElement;
        this.exportBD = document.getElementById("exportBD");
        this.drawLine = document.getElementById("drawLine");
        this.init();
    }

    init() {
        window.onload = () => {
            this.handleIsEditCheckbox();
        };

        this.editModeEl.onclick = () => {
            let isEdit = !JSON.parse(localStorage.getItem("isEditMode"));
            localStorage.clear();
            localStorage.setItem("isEditMode", JSON.stringify(isEdit));
            this.handleIsEditCheckbox();
        };

        this.drawLine.onclick = () => {
            chrome.tabs.query({active: true, currentWindow: true}, this.handleActiveWindow.bind(this))
        }
    }

    handleActiveWindow(tabs: chrome.tabs.Tab[]){
        chrome.tabs.executeScript(tabs[0].id,{file: "./draw.js"}, () => {

        })
    }

    handleDraw(){
        alert('hello');
    }

    handleIsEditCheckbox() {
        let isEdit = JSON.parse(localStorage.getItem("isEditMode"));
        if (isEdit) {
            this.editModeEl.setAttribute("checked", "true");
        } else {
            this.editModeEl.removeAttribute("checked");
        }
    }
}

export default MainPopup;

// const SCREEN_ID = document.getElementById('SCREEN_ID');
// const SCREEN_NAME = document.getElementById('SCREEN_NAME');
// const captureImage = document.getElementById('captureImage');
// const downloadImage = document.getElementById('downloadImage');
// const saveDraw = document.getElementById('saveDraw');
// const clearCache = document.getElementById('clearCache');
