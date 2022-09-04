// form-item 属性
// prop 校验的输入框的属性
// label 表单的标题
// rules 表单校验规则
// show-message 是否显示校验失败提示
// trigger change blur
import { ExtractPropTypes, PropType } from 'vue';
import type { RuleItem } from 'async-validator';
export type Arrayable<T> = T | T[];
export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>; // 可能有多重校验规则
}
export const formItemValidateState = ['success', 'error', ''] as const;
export type FormItemValidateState = typeof formItemValidateState[number];
export const formItemProps = {
  prop: {
    type: String as PropType<String>
  },
  label: {
    type: String as PropType<String>
  },
  rules: {
    type: [Object, Array] as PropType<Arrayable<FormItemRule>>
  },
  showMessage: {
    type: Boolean as PropType<Boolean>
  }
} as const;

export type FormItem = Partial<ExtractPropTypes<typeof formItemProps>>;
