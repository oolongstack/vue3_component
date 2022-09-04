<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create';
import { iconProps } from './icon';
import { computed } from '@vue/reactivity';

// 给组件加上名字
defineOptions({
  name: 'c-icon'
});
const bem = createNamespace('icon');

const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.color && !props.size) return {};
  return {
    ...(props.size ? { 'font-size': `${props.size}px` } : {}),
    ...(props.color ? { color: props.color } : {})
  };
});
</script>

<style scoped>
</style>
