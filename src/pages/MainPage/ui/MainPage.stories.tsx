import type {Meta, StoryObj} from '@storybook/vue3';

import MainPage from 'pages/MainPage/ui/MainPage.vue';
import {themeDecorator} from "share/config/storybook/ThemeDecorator";
import {AppTheme} from "share/lib/types/AppTheme";

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [
        themeDecorator(AppTheme.NORMAL),
    ],
};





