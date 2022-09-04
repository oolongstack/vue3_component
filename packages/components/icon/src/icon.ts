import { ExtractPropTypes, PropType } from 'vue';

// props
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
