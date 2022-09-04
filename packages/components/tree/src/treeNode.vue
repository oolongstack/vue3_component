<template>
  <div :class="bem.b()">
    <div :class="bem.e('content')">
      <span :class="[bem.em('content', 'icon')]">
        <c-icon :size="16" color="pink">
          <Switcher />
        </c-icon>
      </span>
      <span>{{ props.node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { treeNodeProps } from './tree';
import { createNamespace } from '@zi-shui/utils/create';
import Switcher from './icon/Switcher'
import CIcon from '@zi-shui/components/icon/src/icon.vue'
const props = defineProps(treeNodeProps)

console.log(props);

const bem = createNamespace('node')
</script>

<style scoped>
</style>