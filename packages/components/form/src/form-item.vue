<template>
  <div
    :class="[
      bem.b(),
      bem.is('success', validateState == 'success'),
      bem.is('error', validateState == 'error')
    ]"
  >
    <label :class="bem.e('label')"></label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createNamespace } from '@zi-shui/utils/create';
import { FormItemValidateState } from './form-item';
defineOptions({
  name: 'c-form-item'
});
const bem = createNamespace('form-item');

const validateState = ref<FormItemValidateState>('');
const validateMessage = ref('校验失败');
</script>

<style scoped></style>
