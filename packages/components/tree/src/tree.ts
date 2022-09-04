import { ExtractPropTypes, PropType } from 'vue';
export type Key = string | number;

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
  defaultExpendedKeys: {
    // 默认展开的key
    type: Array as PropType<Key[]>,
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

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  }
} as const;

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>;
