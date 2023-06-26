<template>
  <div class="login-wrapper">
    <div class="visual-area">
      <div class="copy">
        <span>KOREA MARKET-DATA</span>
        <span>BUSINESS MANAGEMENT</span>
        <span>SYSTEM</span>
      </div>
      <div class="copyright">
        <span class="address"> 서울시 영등포구 여의나루로 76 ㈜코스콤, 대표전화 : 02-767-7114 </span>
        <span>COPYRIGHT 2021. KOSCOM CORP. ALL RIGHT RESERVED.</span>
      </div>
    </div>
    <div class="login-area">
      <div class="login-box">
        <h1 class="bi">KOSCOM</h1>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
          <el-form-item prop="loginName">
            <el-input v-model="loginForm.loginName" clearable></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" clearable></el-input>
          </el-form-item>
          <div class="btn-group">
            <el-button type="primary" @click="openError"> 로그인 </el-button
            ><!-- 07/14 click event 추가 -->
            <!-- <el-button type="primary" @click="submitForm('loginForm')"> 로그인 </el-button> -->
            <!-- <el-button @click="resetForm('loginForm')">초기화</el-button> -->
          </div>
        </el-form>
        <div class="login-info">
          <div class="save">
            <span class="txt">ID 저장</span>
            <el-switch v-model="formValue"></el-switch>
          </div>
          <a @click="dialogVisible = true" class="pw" target="_blank">비밀번호 찾기</a>
          <a @click="dialogModifyVisible = true" class="pw" target="_blank">비밀번호 변경 link</a>
          <!-- 7/7 추가  -->
        </div>
        <!-- <div class="info">
          <i class="iconset icon-info"></i>
          비밀번호가 기억나지 않으면 시스템관리자에게 문의하세요.
        </div> -->
        <!-- 7/7 삭제 -->
        <br />
        <span @click="messageInfo">Infomation message</span> / <span @click="messageSuccess">Success message</span>
        <br />
        <span @click="messageWarning">Warning message</span> / <span @click="messageError">Error message</span>
      </div>
    </div>
  </div>
  <div></div>
  <!-- modal popup ; 비번 찾기 -->
  <el-dialog
    title="비밀번호 찾기"
    v-model="dialogVisible"
    :before-close="handleClose"
    width=""
    custom-class="el-medium"
  >
    <div class="txt-warning">
      <i class="iconset icon-warning"></i>회원가입 시 등록한 정보를 입력해 주세요. <br />
      가입된 이메일 주소(아이디)로 임시비밀번호가 발송 됩니다.
    </div>
    <el-form :model="passwordForm" :rules="rules" ref="passwordForm" class="vertical"
      ><!-- 07/14 class 추가 -->
      <el-form-item prop="name">
        <el-input v-model="passwordForm.name" placeholder="이름을 입력하세요" clearable></el-input>
      </el-form-item>
      <el-form-item prop="id">
        <el-input v-model="passwordForm.id" placeholder="아이디(이메일)" clearable></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogVisible = false" class="gray" round>취소</el-button>
      <el-button type="primary" @click="open" round>임시 비밀번호 발송</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 비번 찾기 -->
  <!-- modal popup ; 비번 변경 -->
  <el-dialog title="비밀번호 변경" v-model="dialogModifyVisible" width="" custom-class="el-medium">
    <div class="txt-warning">
      <i class="iconset icon-warning"></i>비밀번호는 아래의 규칙을 준수하여 설정해 주십시오.
      <ul class="list-dash">
        <li>8~16자의 영문, 숫자, 특수문자가 포함된, 조합</li>
        <li>동일문자, 연속문자는 사용할 수 없음(예 : aaa, abc 등)</li>
      </ul>
    </div>
    <el-form class="vertical">
      <el-form-item>
        <el-input type="password" v-model="pwCurrent" placeholder="현재 비밀번호 입력" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="pwNew" placeholder="신규 비밀번호 입력" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="pwNewConfirm" placeholder="신규 비밀번호 확인" clearable></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-area">
      <el-button @click="dialogModifyVisible = false" class="gray" round>취소</el-button>
      <el-button type="primary" round>확인</el-button>
    </div>
  </el-dialog>
  <!-- //modal popup ; 비번 변경 -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ServiceApi } from "@/utils/service-apis";
import { ErrorResponse, SigninResponse } from "@/client-axios/api";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: "Login",
  props: {},
  setup(props, context) {
    const serviceApi = new ServiceApi();
    return {
      serviceApi,
    };
  },
  data() {
    return {
      pwCurrent: "",
      pwNew: "",
      pwNewConfirm: "",
      dialogVisible: false,
      dialogModifyVisible: false,
      formValue: false,
      loginForm: {
        siteCode: "02",
        loginName: "bestech@bluedigm.com",
        password: "admin1234",
      },
      passwordForm: {
        name: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "로그인명을 입력해주세요.",
            trigger: "blur",
          },
        ],
        loginName: [
          {
            required: true,
            message: "로그인명을 입력해주세요.",
            trigger: "blur",
          },
          {
            min: 5,
            max: 50,
            message: "로그인명은 5 ~ 50자 사이로 입력해주세요.",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "비밀번호를 입력해주세요.",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    messageInfo() {
      this.$message({
        message: "알림 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    messageSuccess() {
      this.$message.success({
        message: "성공 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    messageWarning() {
      this.$message.warning({
        message: "경고 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    messageError() {
      this.$message.error({
        message: "에러 메시지",
        showClose: "true",
        //duration: 0,
      });
    },
    open() {
      this.$notify.success({
        title: "임시 비밀번호 발송되었습니다.",
        message: "아이디(이메일)로 발송된 임시 비밀번호로 로그인 후 비밀번호를 변경해주세요",
        type: "success",
        // duration: 0,
        customClass: "success",
      });
    },
    // <!-- 07/14 click event 추가 -->
    openError() {
      this.$notify.error({
        message: "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.",
        type: "error",
        duration: 0,
        customClass: "error",
      });
    },
    submitForm(formName: string) {
      (this.$refs[formName] as HTMLFormElement).validate((valid: any) => {
        if (valid) {
          this.serviceApi
            .authServiceApi()
            .signin({
              loginName: this.loginForm.loginName,
              loginSecretNo: this.loginForm.password,
            })
            .then((response: AxiosResponse<SigninResponse>) => {
              // 성공
              console.log(response);
              sessionStorage.setItem("access-token", response.data.accessToken);
              sessionStorage.setItem("refresh-token", response.data.refreshToken);

              this.$router.push("/mypage");
            })
            .catch((error: AxiosResponse<ErrorResponse>) => {
              console.log(`error code = ${error.data.errorCode}, error message = ${error.data.errorMessage}`);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // resetForm(formName: string) {
    //   (this.$refs[formName] as HTMLFormElement).resetFields();
    // },
  },
});
</script>

<style scoped></style>
