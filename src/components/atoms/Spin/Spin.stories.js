// import { Meta, StoryObj } from '@storybook/web-components'
import { html } from "lit-html";
import "../../../theme/index.css";
import "./index.js";

const Meta = {
  title: "Spin",
};

const Template = ({ aProperty }) =>
  html`
    <gd-spin size="small"></gd-spin>
    <gd-spin size="medium"></gd-spin>
    <gd-spin size="large"></gd-spin>
  `;

export const SpinStory = Template.bind({});

SpinStory.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: "aProperty",
};

export default Meta;
