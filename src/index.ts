import {createApp} from 'vue';
import {App, router} from "app";
import {clickOutside} from "share/lib/directives/clickOutside";
import {pinia} from "share/config/store/pinia";
import "app/styles/style.scss";

const app = createApp(App);
app
    .use(router)
    .directive('click-outside', clickOutside)
    .use(pinia)
    .mount("#root");
