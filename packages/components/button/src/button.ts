// size 大小
// round 圆角
// type 类型
// loading 是否为加载中
// disabled 是否禁用
// native-type 原始类型

import { ExtractPropTypes, PropType } from 'vue';

// 插槽 icon

export type Size = 'small' | 'medium' | 'large';

export type Type =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default';

export type NativeType = 'button' | 'submit' | 'reset';

export type Placement = 'left' | 'right';
export const buttonProps = {
  size: String as PropType<Size>,
  type: {
    type: String as PropType<Type>,
    validator: (val: string) => {
      return [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'default',
        ''
      ].includes(val);
    },
    default: ''
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'left'
  }
} as const;
export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent
};

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
