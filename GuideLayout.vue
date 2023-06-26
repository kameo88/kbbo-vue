<template>
  <h1 class="h1-title"><a href="/Guidelist">ADMIN UI/UX Guide List</a></h1>
  <div class="switch"><a href="/" target="_top">Publishing File List</a></div>
  <ol class="guide-menu-list">
    <li><a href="/GuideButton" class="menu">Button & Message</a></li>
    <li><a href="/GuideTable" class="menu">Table</a></li>
    <li><a href="/GuideSearch" class="menu">Search</a></li>
    <li><a href="/GuideForm" class="menu">Form</a></li>
    <li><a href="/GuideMessage" class="menu">Message</a></li>
    <li><a href="/" class="menu">etc</a></li>
  </ol>
  <slot></slot>
  <el-backtop></el-backtop>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/css/guide.css";

export default defineComponent({
  name: "GuideLayout",
  setup() {
    return {};
  },
});
</script>
