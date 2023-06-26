<template>
  <component :is="this.$route.meta.layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardLayout from "./DashboardLayout.vue";
import ContentLayout from "./ContentLayout.vue";
import ContentLayout2 from "./ContentLayout2.vue";
import LoginLayout from "./LoginLayout.vue";
import EmptyLayout from "./EmptyLayout.vue";
import GuideLayout from "./GuideLayout.vue";

export default defineComponent({
  name: "TheLayout",
  components: {
    DashboardLayout,
    ContentLayout,
    ContentLayout2,
    LoginLayout,
    EmptyLayout,
    GuideLayout,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    //console.log("setup");
  },
});
</script>

<style scoped></style>
