import results from "../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [withTests({ results })],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
