<template>
  <c-icon :size="30" :color="'red'">
    <Aperture />
  </c-icon>
  <!-- 树型组件 传入属性结构的数据源 -->
  <!-- <c-tree
    :data="data"
    label-field="xx"
    key-field="key"
    children-field="children"
    :default-expended-keys="['40', '41', '4130']"
  >
  </c-tree> -->

  <c-tree
    :data="data"
    :on-load="handleLoad"
    selectable
    multiple
    v-model:selected-keys="selectedKeys"
  >
  </c-tree>

  <c-button
    type="danger"
    size="large"
    :round="true"
    :loading="true"
    :disabled="true"
  >
    按钮
    <template #icon>
      <Aperture />
    </template>
  </c-button>
  <c-form-item>
    <input type="text" />
  </c-form-item>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { Aperture } from '@vicons/ionicons5';
import { Key, TreeOption } from '@zi-shui/components/tree';
// function createData(level = 4, parentKey = ''): any {
//   if (!level) return [];
//   const arr = new Array(6 - level).fill(0);

//   return arr.map((_, idx: number) => {
//     const key = parentKey + level + idx;
//     return {
//       xx: createLabel(level), // 显示的内容
//       key, // 为了唯一性
//       children: createData(level - 1, key) // 孩子
//     };
//   });
// }

function createData() {
  return [
    { label: nextLabel(), key: 1, isLeaf: false },
    { label: nextLabel(), key: 2, isLeaf: false }
  ];
}
function nextLabel(currentLabel?: string | number): string {
  if (!currentLabel) return 'Out of Tao, One is born';
  if (currentLabel === 'Out of Tao, One is born') return 'Out of One, Two';
  if (currentLabel === 'Out of One, Two') return 'Out of Two, Three';
  if (currentLabel === 'Out of Two, Three') {
    return 'Out of Three, the created universe';
  }
  if (currentLabel === 'Out of Three, the created universe') {
    return 'Out of Tao, One is born';
  }
  return '';
}
function createLabel(level: number): string {
  if (level === 4) return '道生一';
  if (level === 3) return '一生二';
  if (level === 2) return '二生三';
  if (level === 1) return '三生万物';
  return '';
}
const data = ref(createData());

console.log(data);

// 展开才会去加载
const handleLoad = (node: TreeOption): Promise<TreeOption[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ]);
    }, 1000);
  });
};
const selectedKeys = ref<Key[]>([1, 2]);

watch(
  () => selectedKeys,
  newVal => {
    console.log(newVal);
  },
  {
    immediate: true
  }
);
</script>

<style scoped></style>
