// import { Meta, StoryObj } from '@storybook/web-components'
import { html } from "lit-html";
import "../../../theme/index.css";
import "./index.js";

const Meta = {
  title: "Spin",
};

const Template = ({ aProperty }) =>
  html`
    <div class="story-block">
      <h3>Spin sizes</h3>
      <span for="small">Small</span>
      <gd-spin id="small" size="small"></gd-spin>
      <span for="medium">Medium</span>
      <gd-spin id="medium" size="medium"></gd-spin>
      <span for="large">Large</span>
      <gd-spin id="large" size="large"></gd-spin>
    </div>
  `;

export const SpinStory = Template.bind({});

SpinStory.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: "aProperty",
};

export default Meta;
