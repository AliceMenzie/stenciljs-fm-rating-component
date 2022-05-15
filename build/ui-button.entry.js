import { r as registerInstance, h } from './index-d146fb2c.js';

const uiButtonCss = "@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap'); button{font-family:'Overpass', sans-serif;background-color:hsl(25, 97%, 53%);color:hsl(0, 0%, 100%);height:45px;width:279px;border-radius:30px;border:none;text-transform:uppercase}button:hover{background-color:hsl(0, 0%, 100%);color:hsl(25, 97%, 53%)}";

const UiButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", { type: this.type, class: `${this.appearance}` }, this.label, h("slot", null)));
  }
};
UiButton.style = uiButtonCss;

export { UiButton as ui_button };