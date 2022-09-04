import { withInstall } from '@zi-shui/utils/withInstall';

import _Button from './src/button.vue';

const Button = withInstall<typeof _Button>(_Button);

export type { ButtonProps } from './src/button';

export default Button;
declare module 'vue' {
  export interface GlobalComponents {
    CButton: typeof Button;
  }
}
