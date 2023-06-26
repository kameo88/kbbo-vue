<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-checkbox v-model="checked">Option</el-checkbox>
  </div>
  <div style="margin-bottom: 20px">
    <h1>Basic type</h1>
    <el-button class="el-button--large">Basic large</el-button>
    <el-button>Basic default</el-button>
    <el-button size="medium">Basic medium</el-button>
    <el-button size="small">Basic small</el-button>
    <br /><br />
    <h1>Gray Color type</h1>
    <el-button class="el-button--large gray">Basic large</el-button>
    <el-button class="gray">Basic default</el-button>
    <el-button class="gray" size="medium">Basic medium</el-button>
    <el-button class="gray" size="small">Basic small</el-button>
    <h1>Blue Color type</h1>
    <el-button class="el-button--large blue">Basic large</el-button>
    <el-button class="blue">Basic default</el-button>
    <el-button class="blue" size="medium">Basic medium</el-button>
    <el-button class="blue" size="small">Basic small</el-button>
    <h1>Red Color type</h1>
    <el-button class="el-button--large blue">Basic large</el-button>
    <el-button class="red">Basic default</el-button>
    <el-button class="red" size="medium">Basic medium</el-button>
    <el-button class="red" size="small">Basic small</el-button>
    <h1>Primary Bg Color type</h1>
    <el-button type="primary" class="el-button--large">Basic large</el-button>
    <el-button type="primary">Basic default</el-button>
    <el-button type="primary" size="medium">Basic medium</el-button>
    <el-button type="primary" size="small">Basic small</el-button>
    <br />
    <el-button type="primary" round>color-round button basic</el-button>
    <el-button type="primary" size="medium" round>color-round button medium</el-button>
    <el-button type="primary" size="samll" round>color-round button small</el-button>
    <br />
    <el-button type="primary confirm">버튼 button basic</el-button>
  </div>
  <el-row>
    <el-button @click="open2">Default Notification</el-button>
    <el-button type="primary" @click="allMenu">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row>
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row>
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
  </el-row>
  <el-switch v-model="value1"> </el-switch>
  <el-switch v-model="value2"></el-switch>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {
      value1: false,
      value2: true,
    };
  },
  methods: {
    allMenu() {
      alert("click");
    },
    open2() {
      this.$notify.info({
        message: "This is a warning message",
      });
    },
  },
});
</script>
