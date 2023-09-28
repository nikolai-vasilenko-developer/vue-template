import {Decorator} from "@storybook/vue3";
import {AppTheme} from "share/lib/types/AppTheme";

export const themeDecorator = (theme = AppTheme.DARK): Decorator => (story) => ({
    components: {story},
    template: `
        <div class="${theme}">
            <story/>
        </div>`,

});
