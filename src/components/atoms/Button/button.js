import { LitElement, html, css } from "lit";
import cn from "classnames";
import "../Spin/spin";

import styles from "./button.styles";

export class Button extends LitElement {
  constructor() {
    super();
    this.variant = "primary";
    this.size = "medium";
    this.loading = "false";
  }

  handleClick() {
    console.log("CLICK");
  }

  spinRender() {
    if (this.loading === "true") {
      return html`<gd-spin size="small" class="gd-button__spin"></gd-spin>`;
    }
  }

  static properties = {
    variant: { attribute: true },
    size: { attribute: true },
    loading: { attribute: true },
  };

  static styles = css`
    ${styles}
  `;

  render() {
    return html`<button
      class="${cn("gd-button", {
        ["gd-button--primary"]: this.variant === "primary",
        ["gd-button--secondary"]: this.variant === "secondary",
        ["gd-button--medium"]: this.size === "medium",
        ["gd-button--small"]: this.size === "small",
        ["gd-button--large"]: this.size === "large",
        ["gd-button--loading"]: this.loading === "true",
      })}"
      @click="${this.handleClick}"
    >
      <div class="gd-button__inner">
        <slot></slot>
        ${this.spinRender()}
      </div>
    </button>`;
  }
}

customElements.define("gd-button", Button);
