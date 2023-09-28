import type {Preview} from "@storybook/vue3";
import {cssDecorator} from "share/config/storybook/CssDecorator";
import {themeDecorator} from "share/config/storybook/ThemeDecorator";

const preview: Preview = {
  decorators: [
    cssDecorator,
    themeDecorator()
  ],
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

export default preview;
