// 到导出组件的出口
import _Icon from "./src/icon.vue";
// 给组件添加install方法的函数
import { withInstall } from "@zi-shui/utils/withInstall";
const Icon = withInstall(_Icon);
export * from "./src/icon";
export default Icon;

// 拓展vue的类型，
declare module "vue" {
  // 将ZIcon声明为全局组件，有代码提示
  export interface GlobalComponents {
    ZIcon: typeof Icon;
  }
}
