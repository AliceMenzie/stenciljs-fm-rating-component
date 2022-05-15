import { r as registerInstance, h } from './index-d146fb2c.js';

const uiInputCss = "@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap'); input[type='button']{font-family:'Overpass', sans-serif;background-color:hsl(213, 19%, 18%);color:hsl(216, 12%, 54%);border:none;height:42px;width:42px;border-radius:50%}input[type='button']:hover{background-color:hsl(25, 97%, 53%);color:hsl(0, 0%, 100%)}.active{background-color:hsl(216, 12%, 54%) !important;color:hsl(0, 0%, 100%) !important}";

const UiInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("input", { class: `${this.active === 'true' ? 'active' : ''}`, value: this.value, type: this.type });
  }
};
UiInput.style = uiInputCss;

export { UiInput as ui_input };
