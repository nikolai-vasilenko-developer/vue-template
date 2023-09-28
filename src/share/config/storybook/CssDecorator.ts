import 'app/styles/style.scss';
import {Decorator} from "@storybook/vue3";

export const cssDecorator: Decorator = (story) => ({
    'components': {story},
    'template': '<story />',
});
