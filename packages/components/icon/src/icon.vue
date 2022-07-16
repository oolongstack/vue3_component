<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { createNamespace } from "@zi-shui/utils/create";
import { iconProps } from "./icon";
import { computed } from "@vue/reactivity";

defineOptions({
  name: "z-icon",
});
const bem = createNamespace("icon");
const props = defineProps(iconProps);
const style = computed(() => {
  if (!props.color && !props.size) return {};
  return {
    // color: props.color ? props.color : "",
    // fontSize: props.size ? `${props.size}px` : "",
    ...(props.size ? { "font-size": `${props.size}px` } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>

<style scoped></style>
