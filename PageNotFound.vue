<template>
  <div class="error-wrap">
    <!-- 403 page error -->
    <div class="error-area page-access">
      <h2 class="title">페이지에 접근할 수 없습니다.</h2>
      <div class="txt">죄송합니다. 기술적인 문제로 접속이 되지 않습니다.</div>
      <div class="txt">잠시 후 다시 이용 부탁 드리며, 이용에 불편을 드려 사과드립니다.</div>
      <div class="btn-area center">
        <el-button type="primary" class="el-button--large" round>메인</el-button>
      </div>
    </div>
    <!-- //403 page error -->
    <!-- 404 page error -->
    <div class="error-area page">
      <h2 class="title">페이지를 찾을 수 없습니다.</h2>
      <div class="txt">찾을수 없는 페이지 입니다.</div>
      <div class="txt">요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다.</div>
      <div class="btn-area center">
        <el-button type="primary" class="el-button--large" round>메인</el-button>
      </div>
    </div>
    <!-- //404 page error -->
    <!-- 505 server error -->
    <div class="error-area server">
      <h2 class="title">서비스 접속할 수 없습니다.</h2>
      <div class="txt">죄송합니다. 기술적인 문제로 접속이 되지 않습니다.</div>
      <div class="txt">잠시 후 다시 이용 부탁 드리며, 이용에 불편을 드려 사과드립니다.</div>
      <div class="btn-area center">
        <el-button type="primary" class="el-button--large" round>메인</el-button>
      </div>
    </div>
    <!-- //505 server error -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFound",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
