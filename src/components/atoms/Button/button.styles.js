import { css } from "lit";

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .gd-button {
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    border-radius: 4px;
    font-size: 16px;
    padding: 6.5px 15px;
    border: 1px solid transparent;

    --button-background-primary: var(--color-primary);
    --button-active-background-primary: var(--color-primary-dark);
    --button-foreground-primary: var(--color-white);

    --button-background-secondary: var(--color-secondary);
    --button-active-foreground-secondary: var(--color-secondary-dark);
    --button-foreground-secondary: var(--color-black);
  }

  .gd-button--primary {
    background-color: var(--button-background-primary);
    color: var(--button-foreground-primary);
  }

  .gd-button--primary:active {
    background-color: var(--button-active-background-primary);
  }

  .gd-button--secondary {
    background-color: var(--button-background-secondary);
    color: var(--button-foreground-secondary);
    border: 1px solid var(--color-black);
  }

  .gd-button--secondary:active {
    background-color: var(--button-active-foreground-secondary);
  }

  .gd-button--small {
    padding: 4px 11px;
    font-size: 14px;
  }

  .gd-button--medium {
    padding: 6.5px 15px;
  }

  .gd-button--large {
    padding: 9px 18px;
    font-size: 18px;
  }

  .gd-button__inner {
    display: flex;
    align-items: center;
  }

  .gd-button__spin {
    color: inherit;
  }

  .gd-button--small .gd-button__spin {
    padding-left: 11px;
    font-size: 14px;
  }

  .gd-button--medium .gd-button__spin {
    padding-left: 15px;
  }

  .gd-button--large .gd-button__spin {
    padding-left: 18px;
    font-size: 18px;
  }
`;
