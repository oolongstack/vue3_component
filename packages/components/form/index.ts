// 到导出组件的出口
import _FormItem from './src/form-item.vue';
// 给组件添加install方法的函数
import { withInstall } from '@zi-shui/utils/withInstall';

const FormItem = withInstall<typeof _FormItem>(_FormItem);

export * from './src/form-item';
export default FormItem;
// 拓展vue的类型，
declare module 'vue' {
  // 将ZIcon声明为全局组件，有代码提示
  export interface GlobalComponents {
    CFormItem: typeof FormItem;
  }
}
