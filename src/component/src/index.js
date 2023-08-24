// import { defineAsyncComponent } from 'vue'
import Button from './component/biu-Button/index.vue';
import Input from './component/biu-Input/index.vue';

// const ButtonAsync = defineAsyncComponent(() => import('./MyComponent.vue'))

const components = {
    Button, Input, //ButtonAsync
};

const install = function (app) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue.createApp) {
    install(window.Vue.createApp);
}

export default {
    install,
    ...components,
};