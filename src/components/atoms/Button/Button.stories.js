// import { Meta, StoryObj } from '@storybook/web-components'
import { html } from "lit-html";
import '../../../theme/index.css';
import "./index.js";

const Meta = {
  title: "Button",
};

const Template = ({ aProperty }) =>
  html`
    <gd-button>Test button</gd-button>
    <gd-button variant="secondary">Test button</gd-button>
    <br />
    <gd-button size="small">Test button</gd-button>
    <gd-button>Test button</gd-button>
    <gd-button size="large">Test button</gd-button>
    <br />
    <gd-button loading="true">Test button</gd-button>
  `;

export const ButtonStory = Template.bind({});

ButtonStory.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: "aProperty",
};

export default Meta;
