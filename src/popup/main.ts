import { injectable } from "tsyringe";

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
      localStorage.setItem("isEditMode", `${isEdit}`);
      this.handleIsEditCheckbox();

      this.drawLine.textContent = `${isEdit}`;
    };
  }

  handleIsEditCheckbox() {
    let isEdit = !!localStorage.getItem("isEditMode");
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
