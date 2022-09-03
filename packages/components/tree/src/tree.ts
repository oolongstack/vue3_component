import { ExtractPropTypes, PropType } from 'vue';
type Key = string | number;

export interface TreeOption {
  label?: Key;
  key?: Key;
  isLeaf: boolean;
  children: TreeOption[];
  [key: string]: unknown;
}

// 组件props属性
export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  labelField: {
    type: String as PropType<string>,
    default: 'label'
  },
  keyField: {
    type: String as PropType<string>,
    default: 'key'
  },
  childrenField: {
    type: String as PropType<string>,
    default: 'children'
  }
} as const;

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;

// 组件数据格式化后的类型
export interface TreeNode extends Required<TreeOption> {
  level: number;
  rawNode: TreeOption;
  children: TreeNode[];
  isLeaf: boolean; // 是否为叶子节点
}
