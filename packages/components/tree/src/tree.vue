<template>
  <div>tree</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { TreeNode, treeProps, TreeOption } from './tree';
defineOptions({
  name: 'c-tree'
});

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
const createTree = (data: TreeOption[]) => {
  const traversal = (data: TreeOption[], parent: TreeNode | null) => {
    return data.map(node => {
      const children = treeOptions.getChildren(node) || [];
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children,
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length === 0
      };
      if (children.length) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  };
  const result: TreeNode[] = traversal(data, null);
  return result;
};

// 对用户传入的数据格式化
watch(
  () => props.data,
  (data: TreeOption[]) => {
    // 监听用户输入的数据源，变化就重新赋值
    tree.value = createTree(data);

    console.log(tree.value);
  },
  {
    immediate: true
  }
);
</script>

<style scoped></style>
