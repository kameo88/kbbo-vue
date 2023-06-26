<template>
  <slot></slot>
  <el-backtop></el-backtop>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyLayout",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
