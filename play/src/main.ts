import { App, createApp } from "vue";
import AppView from "./App.vue";
import Icon from "@zi-shui/components/icon";
// 给组件添加install方法的函数
import { withInstall } from "@zi-shui/utils/withInstall";

const app: App = createApp(AppView);
app.use(withInstall(Icon));
app.mount("#app");
