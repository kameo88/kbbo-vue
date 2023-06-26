<template>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLayout from "@/layouts/TheLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    TheLayout,
  },
});
</script>

<style scoped></style>
