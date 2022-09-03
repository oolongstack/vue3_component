import { App, createApp } from 'vue';
import AppView from './App.vue';
import Icon from '@zi-shui/components/icon';
import Tree from '@zi-shui/components/tree';
import '@zi-shui/theme-chalk/src/index.scss';
const plugins = [Icon, Tree];

const app: App = createApp(AppView);

// 将组件注册成全局组件了
plugins.forEach(plugin => {
  app.use(plugin);
});
app.mount('#app');
