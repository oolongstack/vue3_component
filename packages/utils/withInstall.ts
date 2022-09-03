import { App, Component } from 'vue';
import type { Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;
/**
 * 给组件添加install方法，既能引入使用也可以app.use()进行全局注册使用
 * @param comp 组件
 * @returns
 */
export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp as Component);
  };
  return comp as SFCWithInstall<T>;
}
