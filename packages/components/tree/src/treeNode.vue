<template>
  <div :class="[bem.b(), bem.is('selected', isSelected)]">
    <div
      :class="[bem.e('content')]"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf)
        ]"
        @click="emit('toggle', node)"
      >
        <c-icon :size="16" color="pink">
          <Switcher v-if="!isLoading" />
          <Loading v-else></Loading>
        </c-icon>
      </span>
      <span @click="handleSelected">{{ node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { treeNodeEmits, treeNodeProps } from './tree';
import { createNamespace } from '@zi-shui/utils/create';
import Switcher from './icon/Switcher';
import Loading from './icon/Loading';
import CIcon from '@zi-shui/components/icon/src/icon.vue';
import { computed } from 'vue';
const props = defineProps(treeNodeProps);
const emit = defineEmits(treeNodeEmits);
const bem = createNamespace('tree-node');

const isLoading = computed(() => {
  return props.loadingKeys!.has(props.node.key);
});

// 是否选中
const isSelected = computed(() => {
  return props.selectedKeys.includes(props.node.key);
});

const handleSelected = () => {
  emit('select', props.node);
};
</script>

<style scoped></style>
