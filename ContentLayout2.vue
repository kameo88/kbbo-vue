<template>
  <div class="wrapper">
    <div class="gnb">
      <el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <div class="bi-area">
          <h1 class="bi">KOSCOM</h1>
          <a class="menu-hamburger" @click="toggleMenu">
            <i class="iconset icon-hamburger">도움말</i>
          </a>
        </div>
        <div class="setting-area">
          <span class="title">KOSCOM ADMIN</span>
          <el-popover popper-class="setting" placement="right-start" trigger="click">
            <template #reference>
              <a class="setting">
                <i class="iconset icon-setting">setting</i>
              </a>
            </template>
            <ul class="list">
              <li>setting list</li>
            </ul>
          </el-popover>
        </div>
        <el-scrollbar>
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-member"></i>
              <span class="sub-menu">회원관리</span>
            </template>
            <el-menu-item-group>
              <template #title><span>회원관리</span></template>
              <el-menu-item index="1-1"> <i class="el-icon-bullet"></i>Option 1 </el-menu-item>
              <el-menu-item index="1-2"> <i class="el-icon-bullet"></i>Option 2 </el-menu-item>
              <el-menu-item index="1-3"> <i class="el-icon-bullet"></i>Option 3 </el-menu-item>
              <el-menu-item index="1-4"> <i class="el-icon-bullet"></i>Option 4 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <i class="el-icon-orderform"></i>
              <span class="sub-menu">주문서</span>
            </template>
            <el-menu-item-group>
              <template #title><span>주문서</span></template>
              <el-menu-item index="2-1" disabled> <i class="el-icon-bullet"></i>주문 1 </el-menu-item>
              <el-menu-item index="2-2"> <i class="el-icon-bullet"></i>주문 2 </el-menu-item>
              <el-menu-item index="2-3"> <i class="el-icon-bullet"></i>주문 3 </el-menu-item>
              <el-menu-item index="2-4"> <i class="el-icon-bullet"></i>주문 4 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <i class="el-icon-contract"></i>
              <span class="sub-menu">계약관리</span>
            </template>
            <el-menu-item-group>
              <template #title><span>계약관리</span></template>
              <el-menu-item index="3-1"> <i class="el-icon-bullet"></i>계약진행 </el-menu-item>
              <el-menu-item index="3-2"> <i class="el-icon-bullet"></i>계약진행 </el-menu-item>
              <el-menu-item index="3-3"> <i class="el-icon-bullet"></i>계약진행 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <i class="el-icon-payment"></i>
              <span class="sub-menu">전자결제</span>
            </template>
            <el-menu-item-group>
              <template #title><span>전자결제</span></template>
              <el-menu-item index="4-1"> <i class="el-icon-bullet"></i>결제 1 </el-menu-item>
              <el-menu-item index="4-2"> <i class="el-icon-bullet"></i>결제 2 </el-menu-item>
              <el-menu-item index="4-3"> <i class="el-icon-bullet"></i>결제 3 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template #title>
              <i class="el-icon-report"></i>
              <span class="sub-menu">사용자리포트</span>
            </template>
            <el-menu-item-group>
              <template #title><span>사용자리포트</span></template>
              <el-menu-item index="5-1"> <i class="el-icon-bullet"></i>리포트 1 </el-menu-item>
              <el-menu-item index="5-2"> <i class="el-icon-bullet"></i>리포트 2 </el-menu-item>
              <el-menu-item index="5-3"> <i class="el-icon-bullet"></i>리포트 3 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template #title>
              <i class="el-icon-db"></i>
              <span class="sub-menu">DB분석</span>
            </template>
            <el-menu-item-group>
              <template #title><span>DB분석</span></template>
              <el-menu-item index="6-1"> <i class="el-icon-bullet"></i>분석 1 </el-menu-item>
              <el-menu-item index="6-2"> <i class="el-icon-bullet"></i>분석 2 </el-menu-item>
              <el-menu-item index="6-3"> <i class="el-icon-bullet"></i>분석 3 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template #title>
              <i class="el-icon-service"></i>
              <span class="sub-menu">고객서비스</span>
            </template>
            <el-menu-item-group>
              <template #title><span>고객서비스</span></template>
              <el-menu-item index="7-1"> <i class="el-icon-bullet"></i>서비스 1 </el-menu-item>
              <el-menu-item index="7-2"> <i class="el-icon-bullet"></i>서비스 2 </el-menu-item>
              <el-menu-item index="7-3"> <i class="el-icon-bullet"></i>서비스 3 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-scrollbar>
        <!-- 10/25 수정 -->
        <div class="mymenu-area" :class="{ active: isActive }">
          <div class="top">
            <div class="btn-group">
              <!-- 편집 전 button -->
              <el-button round>편집</el-button>
              <!-- //편집 전 button -->
              <!-- 편집 중 button -->
              <el-button round>선택삭제</el-button>
              <el-button round>완료</el-button>
              <!-- //편집 중 button -->
            </div>
            <!-- 편집 전 menu list -->
            <ul class="list">
              <li>
                <div class="link">마이메뉴</div>
              </li>
              <li>
                <div class="link">마이메뉴</div>
              </li>
              <li>
                <div class="link">마이메뉴</div>
              </li>
              <li>
                <div class="link">마이메뉴</div>
              </li>
              <li>
                <div class="link">마이메뉴</div>
              </li>
            </ul>
            <!-- //편집 전 menu list -->
            <!-- 편집 중 menu list -->
            <ul class="list">
              <li>
                <el-form-item prop="myFavorite1">
                  <el-checkbox v-model="myFavorite1">마이메뉴</el-checkbox>
                </el-form-item>
              </li>
              <li>
                <el-form-item prop="myFavorite2">
                  <el-checkbox v-model="myFavorite2">마이메뉴</el-checkbox>
                </el-form-item>
              </li>
              <li>
                <el-form-item prop="myFavorite3">
                  <el-checkbox v-model="myFavorite3">마이메뉴</el-checkbox>
                </el-form-item>
              </li>
              <li>
                <el-form-item prop="myFavorite4">
                  <el-checkbox v-model="myFavorite4">마이메뉴</el-checkbox>
                </el-form-item>
              </li>
              <li>
                <el-form-item prop="myFavorite5">
                  <el-checkbox v-model="myFavorite5">마이메뉴</el-checkbox>
                </el-form-item>
              </li>
            </ul>
            <!-- //편집 중 menu list -->
          </div>
          <div class="bottom">
            <a class="favorite" @click="toggleMyMenu">
              <i class="iconset icon-favorite">즐겨찾기</i>
            </a>
          </div>
        </div>
        <!-- //10/25 수정 -->
      </el-menu>
    </div>
    <div class="container">
      <!-- 10/25 수정 -->
      <el-header>
        <!-- <div class="login-wrap">
          <a class="site-info" href="javascript:void(0);">KMBS</a>
          <a class="user-info" href="javascript:void(0);">ADMIN</a>
          <a class="logout" href="javascript:void(0);">
            <i class="iconset icon-logout">로그아웃</i>
          </a>
        </div> -->
        <div class="crumb-wrap">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">HOME</el-breadcrumb-item>
            <el-breadcrumb-item>계좌관리</el-breadcrumb-item>
            <el-breadcrumb-item class="crr">계약진행</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="quick">
            <el-popover popper-class="quick" placement="bottom-end" trigger="click">
              <template #reference>
                <a class="help">
                  <i class="iconset icon-cmn-help">도움말</i>
                </a>
              </template>
              <ul class="quick-menu">
                <li><a href="javascript:void(0);" class="menu1">메뉴명 1</a></li>
                <li><a href="javascript:void(0);" class="menu2">메뉴명 1</a></li>
                <li><a href="javascript:void(0);" class="menu3">메뉴명 1</a></li>
              </ul>
            </el-popover>
            <a class="logout" href="javascript:void(0);">
              <i class="iconset icon-logout">로그아웃</i>
            </a>
            <!-- 11/10 언어설정 추가 -->
            <el-popover placement="bottom" trigger="click" popper-class="lang">
              <template #reference>
                <a href="#none" class="lang"><i class="iconset icon-lang">언어</i><span class="txt">KR</span></a>
              </template>
              <ul class="list">
                <li><a href="#none">한국어</a></li>
                <li><a href="#none">English</a></li>
              </ul>
            </el-popover>
            <!-- //11/10 언어설정 추가 -->
            <!-- 전체 메뉴 -->
            <a class="menu-all" @click="drawer = true">
              <i class="iconset icon-menu-all">전체메뉴</i>
            </a>
            <el-drawer title="전체메뉴 보기" v-model="drawer" size="100%" custom-class="menu-all-wrap">
              <div class="menu-area">
                <!-- menu 1 -->
                <div class="menu-list">
                  <h2 class="main">회원관리</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">회원관리</a></li>
                    <li><a href="#none" class="txt">고객사 관리</a></li>
                  </ul>
                </div>
                <!-- menu 2 -->
                <div class="menu-list">
                  <h2 class="main">리포트 & Audit</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">리포트 관리</a></li>
                    <li><a href="#none" class="txt">Audit 관리</a></li>
                  </ul>
                </div>
                <!-- menu 3 -->
                <div class="menu-list">
                  <h2 class="main">고객니즈 & 주문서</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">고객 니즈 항목 관리</a></li>
                    <li><a href="#none" class="txt">고객 니즈 현황</a></li>
                    <li><a href="#none" class="txt">주문서현황</a></li>
                  </ul>
                </div>
                <!-- menu 4 -->
                <div class="menu-list">
                  <h2 class="main">전자결재</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">결재 관리</a></li>
                    <li><a href="#none" class="txt">결재 서식 관리</a></li>
                    <li><a href="#none" class="txt">결재선 관리</a></li>
                  </ul>
                </div>
                <!-- menu 5 -->
                <div class="menu-list">
                  <h2 class="main">계약관리</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">계약(주문서) 서식 관리</a></li>
                    <li><a href="#none" class="txt">계약 현황 조회</a></li>
                    <li><a href="#none" class="txt">정보사업자 통보</a></li>
                  </ul>
                </div>
                <!-- menu 6 -->
                <div class="menu-list">
                  <h2 class="main">상품관리</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">상품별 요금 정보</a></li>
                    <li><a href="#none" class="txt">상품별 특례사항</a></li>
                    <li><a href="#none" class="txt">상품 TR 관리</a></li>
                  </ul>
                </div>
                <!-- menu 7 -->
                <div class="menu-list">
                  <h2 class="main">매출관리</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">매출분석</a></li>
                    <li><a href="#none" class="txt">고객분석</a></li>
                    <li><a href="#none" class="txt">매출추정</a></li>
                  </ul>
                </div>
                <!-- menu 8 -->
                <div class="menu-list">
                  <h2 class="main">고객서비스관리</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">Email 발송 관리</a></li>
                    <li><a href="#none" class="txt">SMS 발송 관리</a></li>
                    <li><a href="#none" class="txt">공지사항 관리</a></li>
                    <li><a href="#none" class="txt">KRX 지수 관리</a></li>
                    <li><a href="#none" class="txt">FAQ 관리</a></li>
                    <li><a href="#none" class="txt">1:1 문의관리</a></li>
                  </ul>
                </div>
                <!-- menu 9 -->
                <div class="menu-list">
                  <h2 class="main">관리자관리</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">관리자 관리</a></li>
                    <li><a href="#none" class="txt">Role 관리</a></li>
                  </ul>
                </div>
                <!-- menu 10 -->
                <div class="menu-list">
                  <h2 class="main">사이트 관리</h2>
                  <ul class="sub">
                    <li><a href="#none" class="txt">메인/배너/팝업 관리</a></li>
                    <li><a href="#none" class="txt">문서(약관) 버전 관리</a></li>
                    <li><a href="#none" class="txt">용어사전 관리</a></li>
                  </ul>
                </div>
              </div>
            </el-drawer>
            <!-- //전체 메뉴 -->
          </div>
        </div>
      </el-header>
      <!-- //10/25 수정 -->
      <div class="contents">
        <el-main class="cnts-fit">
          <slot></slot>
        </el-main>
        <!--         <footer class="el-footer">
          <span class="footer-logo">KOSCON</span>
          Copyright ⓒ 2021 KOSCOM Corp. All Rights reserved.
        </footer> -->
      </div>
      <el-backtop target=".contents"></el-backtop>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout2",
  data() {
    return {
      isCollapse: false,
      isActive: false,
      drawer: false,
      myFavorite1: true,
      myFavorite2: false,
      myFavorite3: false,
      myFavorite4: false,
      myFavorite5: false,
      direction: "rtl",
    };
  },
  methods: {
    editMyMenu() {
      alert("즐겨찾기 편집");
    },
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
    },
    toggleMyMenu() {
      this.isActive = !this.isActive;
    },
  },
  // setup() {
  //   return {};
  // },
});
</script>

<style scoped></style>
