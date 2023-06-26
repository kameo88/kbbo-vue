<template>
  <div class="section">
    <div class="left">
      <ul class="status-list">
        <!-- KMBS 회원수 -->
        <li>
          <h2 class="title">KMBS 회원수</h2>
          <dl class="items">
            <dt>전일 가입자 수</dt>
            <dd><span class="num">70</span><span>명</span></dd>
          </dl>
          <dl class="items">
            <dt>전체 가입자 수</dt>
            <dd><span class="num">200,000</span><span>명</span></dd>
          </dl>
        </li>
        <!-- //KMBS 회원수 -->
        <!-- 신규 고객 통계 -->
        <li>
          <h2 class="title">신규 고객 통계</h2>
          <dl class="items">
            <dt>전월 신규 고객사 수</dt>
            <dd><span class="num">70</span><span>명</span></dd>
          </dl>
          <dl class="items">
            <dt>전월 신규 계약 금액</dt>
            <dd><span class="num">70,000,000</span><span>천원</span></dd>
          </dl>
        </li>
        <!-- //신규 고객 통계 -->
        <!-- 리포트 신고 현황 -->
        <li>
          <h2 class="title">리포트 신고 현황</h2>
          <dl class="items">
            <dt>신고 대상 고객사 수</dt>
            <dd><span class="num">70</span><span>명</span></dd>
          </dl>
          <dl class="items">
            <dt>신고 완료 고객사 수</dt>
            <dd><span class="num">7,100</span><span>명</span></dd>
          </dl>
        </li>
        <!-- //리포트 신고 현황 -->
      </ul>
    </div>
    <div class="right">
      <div class="my-info">
        <div><span class="name">Koscom Admin</span><span>님</span></div>
        <div class="detail">admin@koscom.co.kr</div>
      </div>
      <ul class="quick-menu">
        <li><i class="el-icon-member"></i><span class="txt pointer">회원관리</span></li>
        <li><i class="el-icon-payment"></i><span class="txt pointer">전자결제관리</span></li>
        <li><i class="el-icon-orderform"></i><span class="txt pointer">주문서현황</span></li>
        <li><i class="el-icon-report"></i><span class="txt pointer">리포트관리</span></li>
      </ul>
    </div>
  </div>
  <div class="section">
    <div class="left">
      <div class="title-wrap">
        <h2 class="title">STATISTIC</h2>
        <div class="right">
          <el-select v-model="statistic" placeholder="선택">
            <el-option v-for="item in optionsStatistic" :key="item.statistic" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- 통계 chart -->
      <div class="statistic-wrap">
        <div class="title-wrap">
          <h3 class="title">매출통계</h3>
          <div class="right">단위:원</div>
        </div>
        <div class="chart-wrap">graph</div>
      </div>
      <!-- //통계 chart -->
    </div>
    <div class="right">
      <div class="title-wrap">
        <h2 class="title">주문서 현황</h2>
      </div>
      <!-- 주문서 현황 -->
      <el-scrollbar always class="order-timeline">
        <ol class="timeline">
          <li>
            <div class="status">
              <span class="txt-badge blue">제공</span>
              <span class="name" v-overflow-tooltip>삼성증권</span>
              <span class="date">2021.06.24</span>
            </div>
            <div>
              <span class="txt pointer" v-overflow-tooltip
                >표준/실시간/국내/일반/외부제공 표준/실시간/국내/일반/외부제공</span
              >
            </div>
          </li>
          <li>
            <div class="status">
              <span class="txt-badge blue">제공</span>
              <span class="name" v-overflow-tooltip>삼성증권</span>
              <span class="date">2021.06.24</span>
            </div>
            <div>
              <span class="txt pointer" v-overflow-tooltip
                >표준/실시간/국내/일반/외부제공 표준/실시간/국내/일반/외부제공</span
              >
            </div>
          </li>
          <li>
            <div class="status">
              <span class="txt-badge blue">제출</span>
              <span class="name" v-overflow-tooltip>삼성증권</span>
              <span class="date">2021.06.30</span>
            </div>
            <div>
              <span class="txt pointer" v-overflow-tooltip>표준/실시간/국내/일반/외부제공</span>
            </div>
          </li>
          <li>
            <div class="status">
              <span class="txt-badge blue">재확인요청고</span>
              <span class="name" v-overflow-tooltip>삼성증권 삼성증권 삼성증권 삼성증권</span>
              <span class="date">2021.06.30</span>
            </div>
            <div>
              <span class="txt pointer" v-overflow-tooltip>표준/실시간/국내/일반/외부제공</span>
            </div>
          </li>
          <li>
            <div class="status">
              <span class="txt-badge blue">수정</span>
              <span class="name" v-overflow-tooltip>삼성증권</span>
              <span class="date">2021.06.30</span>
            </div>
            <div>
              <span class="txt pointer" v-overflow-tooltip>표준/실시간/국내/일반/외부제공</span>
            </div>
          </li>
          <li>
            <div class="status">
              <span class="txt-badge blue">결재중</span>
              <span class="name" v-overflow-tooltip>삼성증권</span>
              <span class="date">2021.06.30</span>
            </div>
            <div>
              <span class="txt pointer" v-overflow-tooltip>표준/실시간/국내/일반/외부제공</span>
            </div>
          </li>
        </ol>
      </el-scrollbar>
      <!-- //주문서 현황 -->
    </div>
  </div>
  <div class="section">
    <div class="left">
      <div class="title-wrap">
        <h2 class="title">NOTICE</h2>
      </div>
      <!-- 공지사항 -->
      <ul class="notice-list">
        <li>
          <span class="label">공지사항</span>
          <span class="cnts pointer" v-overflow-tooltip>
            [전체] 코스콤 정보분배 - FnGuide 삼성그룹 TOP3 플러스 지수 등 8종 신규산출 안내 플러스 지수 등 8종 신규산출
            안내(가동일:20210517)
          </span>
          <span class="date">2021-04-22</span>
        </li>
        <li>
          <span class="label">1:1문의</span>
          <span class="cnts pointer" v-overflow-tooltip>
            [전체] 코스콤 정보분배 - FnGuide 삼성그룹 TOP3 플러스 지수 등 8종 신규산출 안내(가동일:20210517)
          </span>
          <span class="date">2021-04-22</span>
        </li>
        <li>
          <span class="label">공지사항</span>
          <span class="cnts pointer" v-overflow-tooltip>
            [전체] 코스콤 정보분배 - FnGuide 삼성그룹 TOP3 플러스 지수 등 8종 신규산출 안내(가동일:20210517)
          </span>
          <span class="date">2021-04-22</span>
        </li>
        <li>
          <span class="label">공지사항</span>
          <span class="cnts pointer" v-overflow-tooltip>
            [전체] 코스콤 정보분배 - FnGuide 삼성그룹 TOP3 플러스 지수 등 8종 신규산출 안내(가동일:20210517)
          </span>
          <span class="date">2021-04-22</span>
        </li>
      </ul>
      <!-- //공지사항 -->
    </div>
    <div class="right">
      <div class="title-wrap">
        <h2 class="title">결재</h2>
      </div>
      <!-- 결재 -->
      <dl class="approval-wrap">
        <dt>
          <!-- 결재 step -->
          <ol class="approval-list">
            <li>
              <el-tooltip effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">이 팀장</span>
                  <span class="status">승인</span>
                </template>
                <span class="txt ok"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="반려" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">김 팀장</span>
                  <span class="status">반려</span>
                </template>
                <span class="txt no"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
          </ol>
          <!-- //결재 step -->
        </dt>
        <dd v-overflow-tooltip>
          <span class="pointer">[일시정지] 증권시세정보 제공 일시정지 계약 삼성증권 일시정지 계약 삼성증권</span>
        </dd>
      </dl>
      <dl class="approval-wrap">
        <dt>
          <!-- 결재 step -->
          <ol class="approval-list">
            <li>
              <el-tooltip effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">이 팀장</span>
                  <span class="status">승인</span>
                </template>
                <span class="txt ok"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="반려" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">김 팀장</span>
                  <span class="status">승인</span>
                </template>
                <span class="txt ok"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">반려</span>
                </template>
                <span class="txt no"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
          </ol>
          <!-- //결재 step -->
        </dt>
        <dd v-overflow-tooltip>
          <span class="pointer">[일시정지] 증권시세정보 제공 일시정지 계약 삼성증권</span>
        </dd>
      </dl>
      <dl class="approval-wrap">
        <dt>
          <!-- 결재 step -->
          <ol class="approval-list">
            <li>
              <el-tooltip effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">이 팀장</span>
                  <span class="status">승인</span>
                </template>
                <span class="txt ok"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="반려" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">김 팀장</span>
                  <span class="status">반려</span>
                </template>
                <span class="txt no"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip content="진행 중" effect="light" popper-class="info">
                <template #content>
                  <span class="approver-name">홍길동 부서장</span>
                  <span class="status">확인 전</span>
                </template>
                <span class="txt"></span>
              </el-tooltip>
            </li>
          </ol>
          <!-- //결재 step -->
        </dt>
        <dd v-overflow-tooltip>
          <span class="pointer">[일시정지] 증권시세정보 제공 일시정지 계약 삼성증권</span>
        </dd>
      </dl>

      <!-- //결재 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Dashboard",
  setup() {
    return {};
  },
  data() {
    return {
      statistic: "",
      optionsStatistic: [
        {
          label: "매출통계",
          value: "매출통계",
        },
        {
          label: "고객사통계",
          value: "고객사통계",
        },
        {
          label: "라이선스보유통계",
          value: "라이선스보유통계",
        },
        {
          label: "고객사별 분배통계",
          value: "고객사별 분배통계",
        },
        {
          label: "정보 벤더별 통계",
          value: "정보 벤더별 통계",
        },
        {
          label: "사용자리포트 통계",
          value: "사용자리포트 통계",
        },
      ],
    };
  },
  methods: {},
});
</script>
