<template>
  <div :class="bem.b()">
    <CTreeNode
      v-for="node in flattenTree"
      :key="node.key"
      :node="node"
      :loadingKeys="loadingKeysRef"
      :expanded="isExpanded(node)"
      @toggle="toggleExpand"
    >
    </CTreeNode>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create';
import { ref, watch, computed } from 'vue';
import { TreeNode, treeProps, TreeOption, Key } from './tree';
import CTreeNode from './treeNode.vue';
defineOptions({
  name: 'c-tree'
});
const bem = createNamespace('tree');
const props = defineProps(treeProps);

const tree = ref<TreeNode[]>([]);

const createOptions = (key: string, label: string, children: string) => {
  return {
    getKey(node: TreeOption) {
      return node[key] as string;
    },
    getLabel(node: TreeOption) {
      return node[label] as string;
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeNode[];
    }
  };
};
const treeOptions = createOptions(
  props.keyField,
  props.labelField,
  props.childrenField
);
const createTree = (data: TreeOption[], parent: TreeNode | null) => {
  const traversal = (data: TreeOption[], parent: TreeNode | null) => {
    return data.map(node => {
      const children = treeOptions.getChildren(node) || []; // children 不一定有
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children,
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length === 0
      };
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  };
  const result: TreeNode[] = traversal(data, parent);
  return result;
};

// 对用户传入的数据格式化
watch(
  () => props.data,
  (data: TreeOption[]) => {
    // 监听用户输入的数据源，变化就重新赋值
    tree.value = createTree(data, null);

    console.log(tree.value, 'tree');
  },
  {
    immediate: true
  }
);

const expandedKeysSet = ref<Set<Key>>(new Set(props.defaultExpendedKeys));

const flattenTree = computed(() => {
  const expendedKeys = expandedKeysSet.value; // 要展开的节点
  const flattenNodes: TreeNode[] = [];
  // 用户传的格式化好的树
  const nodes = tree.value || [];
  // 使用栈遍历树 不使用递归
  const stack: TreeNode[] = [];
  for (let i = nodes.length - 1; i >= 0; i--) {
    stack.push(nodes[i]); // 倒序入栈
  }

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    flattenNodes.push(node);
    if (expendedKeys.has(node.key)) {
      const children = node.children;
      if (children.length) {
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
  }
  return flattenNodes;
});

// 是否为展开状态
function isExpanded(node: TreeNode): boolean {
  return expandedKeysSet.value.has(node.key);
}

// 收缩
function collpase(node: TreeNode): void {
  expandedKeysSet.value.delete(node.key);
}
const loadingKeysRef = ref(new Set<Key>());
const triggerLoading = (node: TreeNode) => {
  // loadingKeysRef.value.add(key);
  if (!node.children.length && !node.isLeaf) {
    // 需要异步加载
    const loadingKeys = loadingKeysRef.value;
    if (!loadingKeys.has(node.key)) {
      loadingKeys.add(node.key);
      if (props.onLoad) {
        props.onLoad(node.rawNode).then((nodes: TreeOption[]) => {
          node.rawNode.children = nodes;
          node.children = createTree(nodes, node);
          loadingKeys.delete(node.key);
        });
      }
    }
  }
};
// 展开
function expand(node: TreeNode): void {
  expandedKeysSet.value.add(node.key);
  // 展开加载
  triggerLoading(node);
}
// 切换展开收缩
function toggleExpand(node: TreeNode): void {
  const expandKeys = expandedKeysSet.value;

  // 正在加载是不能关闭
  if (expandKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    collpase(node);
  } else {
    expand(node);
  }
}
</script>

<style scoped></style>
