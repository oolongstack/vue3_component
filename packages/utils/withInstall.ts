import { App } from "vue";

/**
 * 给组件添加install方法，既能引入使用也可以app.use()进行全局注册使用
 * @param comp 组件
 * @returns
 */
export function withInstall(comp) {
  comp.install = function (app: App) {
    app.component(comp.name, comp);
  };
  return comp;
}
