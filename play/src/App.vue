<template>
  <c-icon :size="30" :color="'red'">
    <Aperture />
  </c-icon>
  <!-- 树型组件 传入属性结构的数据源 -->
  <c-tree
    :data="data"
    label-field="xx"
    key-field="key"
    children-field="children"
  ></c-tree>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Aperture } from '@vicons/ionicons5';
function createData(level = 4, parentKey = ''): any {
  if (!level) return [];
  const arr = new Array(6 - level).fill(0);
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx;
    return {
      xx: createLabel(level), // 显示的内容
      key, // 为了唯一性
      children: createData(level - 1, key) // 孩子
    };
  });
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
</script>

<style scoped></style>
