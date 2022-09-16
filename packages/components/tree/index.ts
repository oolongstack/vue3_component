import { withInstall } from '@zi-shui/utils/withInstall';
import _Tree from './src/tree.vue';

const Tree = withInstall(_Tree);

export default Tree;

declare module 'vue' {
  export interface GlobalComponents {
    CTree: typeof Tree;
  }
}

export * from './src/tree';
