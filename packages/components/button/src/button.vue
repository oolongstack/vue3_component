<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('loading', loading),
      bem.is('round', round),
      bem.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { createNamespace } from '@zi-shui/utils/create';
import { buttonEmits, buttonProps } from './button';
defineOptions({
  name: 'c-button'
});
const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);
const bem = createNamespace('button');
</script>

<style scoped></style>
