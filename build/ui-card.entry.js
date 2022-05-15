import { r as registerInstance, g as getAssetPath, h } from './index-d146fb2c.js';

const uiCardCss = "@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap'); .card-container{font-family:'Overpass', sans-serif;background-color:#1f252d;color:hsl(0, 0%, 100%);height:360px;width:327px;border-radius:10px;display:flex;flex-direction:column;align-items:start;justify-content:space-around}h3,h2,p{font-family:'Overpass', sans-serif}.image-container{border:none;height:42px;width:42px;margin:1.4rem 1.4rem 0}.image-container img{background-color:hsl(213, 19%, 18%);padding:1rem;border-radius:50%}.content{margin:0rem 1.4rem}.card-container p{color:hsl(217, 12%, 63%);font-size:14px;font-weight:400;line-height:1.5}.form{height:305px;display:flex;flex-direction:column;justify-content:space-evenly;width:279px;align-self:center;margin-bottom:1.4rem}.form div{display:flex;justify-content:space-between}.card-container-back{font-family:'Overpass', sans-serif;background-color:#1f252d;color:hsl(0, 0%, 100%);height:360px;width:327px;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;align-self:center}div.card-containter-back-content{display:flex;flex-direction:column;align-items:center;margin:0 1.4rem;text-align:center}.pill{margin-top:1.4rem;color:hsl(25, 97%, 53%);background-color:hsl(213, 19%, 18%);padding:0.5rem 1rem;border-radius:30px}.card-container-back p{color:hsl(217, 12%, 63%);font-size:14px;font-weight:400;line-height:1.5}";

const UiCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageFront = 'icon-star.svg';
    this.imageBack = 'illustration-thank-you.svg';
    this.submitted = false;
    this.handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.selectValue);
      this.submitted = true;
    };
  }
  render() {
    const logoFront = getAssetPath(`../assets/images/${this.imageFront}`);
    const logoBack = getAssetPath(`../assets/images/${this.imageBack}`);
    if (this.submitted) {
      return (h("div", { class: "card-container-back" }, h("img", { src: logoBack, alt: "form submission illustration" }), h("div", { class: "pill" }, "You selected out ", this.selectValue, " of 5"), h("div", { class: "card-containter-back-content" }, h("h2", null, "Thank you!"), h("p", null, "We appreciate you taking the time to give a rating. If you ever need more support, don\u2019t hesitate to get in touch!"))));
    }
    else {
      return (h("div", { class: "card-container" }, h("div", { class: "image-container" }, h("img", { src: logoFront, alt: "star" })), h("div", { class: "content" }, h("h3", null, "How did we do?"), h("p", null, "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!")), h("div", { class: "form" }, h("div", null, h("ui-input", { type: "button", value: "1", active: this.selectValue === '1' ? 'true' : 'false', onClick: () => (this.selectValue = '1') }, "1"), h("ui-input", { type: "button", value: "2", active: this.selectValue === '2' ? 'true' : 'false', onClick: () => (this.selectValue = '2') }, "2"), h("ui-input", { type: "button", value: "3", active: this.selectValue === '3' ? 'true' : 'false', onClick: () => (this.selectValue = '3') }, "3"), h("ui-input", { type: "button", value: "4", active: this.selectValue === '4' ? 'true' : 'false', onClick: () => (this.selectValue = '4') }, "4"), h("ui-input", { type: "button", value: "5", active: this.selectValue === '5' ? 'true' : 'false', onClick: () => (this.selectValue = '5') }, "5")), h("ui-button", { type: "submit", label: "submit", onClick: this.handleSubmit }))));
    }
  }
};
UiCard.style = uiCardCss;

export { UiCard as ui_card };
