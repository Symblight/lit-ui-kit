import { LitElement, html, css } from "lit";

export default class Button extends LitElement {
  constructor() {
    super();
  }
  handleClick() {
    console.log("CLICK");
  }

  static styles = css`
    button {
      background-color: green;
    }
  `;

  render() {
    return html`<button @click="${this.handleClick}">
      <slot></slot>
    </button>`;
  }
}

customElements.define("gd-button", Button);
