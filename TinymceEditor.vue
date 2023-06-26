<template>
  <div>
    <BasicEditor id="aaaa" />
  </div>
</template>

<script lang="ts">
// 참조 사이트 : https://www.tiny.cloud/blog/tinymce-vue-3-support/

import { defineComponent } from "vue";
import BasicEditor from "@/components/editor/BasicEditor.vue";

export default defineComponent({
  name: "TinymceEditor",
  components: {
    BasicEditor,
  },
});
</script>

<style scoped></style>
