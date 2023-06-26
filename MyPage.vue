<template>
  <el-input type="textarea" :rows="10" placeholder="Please input" v-model="myInformation"> </el-input>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ServiceApi } from "@/utils/service-apis";
import { MyInformationResponse } from "@/client-axios";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: "MyPage",
  props: {},
  setup(props, context) {
    const serviceApi = new ServiceApi();
    return {
      serviceApi,
    };
  },
  data() {
    return {
      myInformation: "sadasdsadsa",
    };
  },
  async mounted() {
    let response: AxiosResponse<MyInformationResponse> = await this.serviceApi.authServiceApi().getMyInformation();

    console.log(response.data);
    this.$data.myInformation = JSON.stringify(response.data);
  },
});
</script>

<style scoped></style>
