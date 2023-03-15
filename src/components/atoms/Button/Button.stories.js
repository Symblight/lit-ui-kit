// import { Meta, StoryObj } from '@storybook/web-components'
import { html } from "lit-html";
import "../../../theme/index.css";
import "./index.js";

const Meta = {
  title: "Button",
};

const Template = ({ aProperty }) =>
  html`
    <div class="story-block">
      <h3>Button variants</h3>
      <gd-button>Primary</gd-button>
      <gd-button variant="secondary">Secondary</gd-button>
    </div>
    <div class="story-block">
      <h3>Button sizes</h3>
      <gd-button size="small">Small</gd-button>
      <gd-button>Default</gd-button>
      <gd-button size="large">Large</gd-button>
    </div>
    <div class="story-block">
      <h3>Loading</h3>
      <gd-button loading="true">Primary loading</gd-button>
      <gd-button loading="true" variant="secondary">
        Secondary loading
      </gd-button>
    </div>
  `;

export const ButtonStory = Template.bind({});

ButtonStory.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: "aProperty",
};

export default Meta;
