import type {StorybookConfig} from "@storybook/vue3-webpack5";
import path from "path";
import {buildCssLoader} from "../loaders/buildCssLoader";

const config: StorybookConfig = {
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    docs: {

        autodocs: true,
        defaultName: "Documentation"
    },
    framework: {
        name: "@storybook/vue3-webpack5",
        options: {},
    },
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    webpackFinal: async (config) => {
        config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'), 'node_modules');

        config.resolve?.extensions?.push(".ts", ".js", ".tsx", ".jsx", ".vue", '.scss')

        config.module?.rules?.push(buildCssLoader())

        return config
    }
};
export default config;
