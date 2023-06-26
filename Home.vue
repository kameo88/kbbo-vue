<template>
  <h1>ADMIN Publishing File List</h1>
  <div class="switch"><a href="/guidelist" target="_blank">UI/UX Guide List</a></div>
  <ol class="pub-menu-list">
    <li><a href="#mypage" class="menu-go">마이페이지</a></li>
    <li><a href="#user" class="menu-go">회원관리</a></li>
    <li><a href="#report" class="menu-go">리포트관리</a></li>
    <li><a href="#business" class="menu-go">고객니즈&주문서관리</a></li>
    <li><a href="#payment" class="menu-go">전자결재</a></li>
    <li><a href="#contract" class="menu-go">계약관리</a></li>
    <li><a href="#product" class="menu-go">상품관리</a></li>
    <li><a href="#audit" class="menu-go">Audit</a></li>
    <li><a href="#sales" class="menu-go">매출 및 고객분석</a></li>
    <li><a href="#customer" class="menu-go">고객 서비스관리</a></li>
    <li><a href="#operation" class="menu-go">사이트 운영관리</a></li>
    <li><a href="#common" class="menu-go">공통관리</a></li>
  </ol>
  <div class="file-list">
    <table>
      <caption></caption>
      <colgroup>
        <col width="200px" />
        <col width="300px" />
        <col width="300px" />
        <col width="200px" />
        <col width="90px" />
        <col width="80px" />
        <col width="80px" />
        <col width="80px" />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>Main Menu</th>
          <th>2 Depth</th>
          <th>Page name</th>
          <th>File Link</th>
          <th>작업자</th>
          <th>시작일</th>
          <th>완료일</th>
          <th>개발완료</th>
          <th>기타</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>공통 수정 적용</td>
          <td>Guide</td>
          <td>공통 레이아웃</td>
          <td class="url">
            <p>DashboardLayout.vue (Latest Version)</p>
            <p>ContentLayout.vue</p>
            <p>ContentLayout2.vue</p>
          </td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>01/04 <span class="txt-modify">(공통 - 수정)</span></strong>
              Gnb sub word length 1 Line ==> 2 Line
            </p>
            <p>
              <strong>12/15 <span class="txt-memo">(공통 - 추가)</span></strong>
              DashboardLayout 에 Gnb 즐겨찾기 영역에 scrollbar 추가
            </p>
            <p>
              <strong>12/13 <span class="txt-memo">(공통 - 추가)</span></strong>
              DashboardLayout 에 logout popover 추가
            </p>
            <p>
              <strong>12/03 <span class="txt-memo">(공통 - 추가)</span></strong>
              DashboardLayout 에 menu icon 추가
            </p>
            <p>
              <strong>12/01 <span class="txt-memo">(공통 - 추가)</span></strong>
              DashboardLayout 추가
            </p>
            <p>
              <strong>10/25 <span class="txt-modify">(공통 - 수정)</span></strong>
              Logo, gnb 하단 즐겨찾기, header
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>추가 및 수정</td>
          <td class="url"><a href="/memberlist" target="_blank">memberlist</a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>10/25 <span class="txt-memo">(공통 - 추가)</span></strong>
              title 우측 즐겨찾기 button(타이틀 우측)
            </p>
            <p><strong>07/00 추가</strong> search 유효성 icon 기능</p>
            <p><strong>07/16 추가</strong> table header sorting 기능</p>
            <p><strong>07/20 수정</strong> 유효성 체크 tooltip 색상 수정</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>모달 팝업</td>
          <td class="url"><a href="/companyinfo" target="_blank">companyinfo</a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p><strong>07/16 추가 </strong>모달 팝업, 딤 클릭시 닫히지 않음(:close-on-click-modal="false")</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>옵션 상세정보 관리</td>
          <td class="url"><a href="/OptionInfoList" target="_blank">OptionInfoList</a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p><strong>09/16 추가 </strong>table height 100% basic</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>공통 Guide</td>
          <td class="url"><a href="/guidelist" target="_blank">guidelist</a></td>
          <td class="name">곽수진</td>
          <td>ing</td>
          <td></td>
          <td></td>
          <td>
            <p><strong>07/22 추가 </strong>Alert & Confirm Message</p>
            <p><strong>08/02 추가 </strong>backtop 적용(emptyLayout.vue / ContentLayout2.vue)</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Error page</td>
          <td class="url"><a href="/PageNotFound" target="_blank">PageNotFound</a></td>
          <td class="name">곽수진</td>
          <td>10/13</td>
          <td>10/13</td>
          <td></td>
          <td>
            <p>
              <strong>12/02 <span class="txt-memo">(추가)</span></strong
              >'메인' button 추가
            </p>
            <p>
              <strong>10/15 <span class="txt-memo">(추가)</span></strong
              >페이지 접근 불가
            </p>
            <p>
              <strong>10/18 <span class="txt-modify">(수정)</span></strong
              >페이지 접근 불가 - image 및 문구
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Print</td>
          <td>Print 주문서 contents</td>
          <td class="url"><a href="/Print" target="_blank">Print</a></td>
          <td class="name">곽수진</td>
          <td>12/14</td>
          <td>12/14</td>
          <td></td>
          <td>front print source 와 동일(단, info-box에서 biz 는 삭제 )</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Cover type 1</td>
          <td class="url"><a href="/PrintCover1" target="_blank">PrintCover1</a></td>
          <td class="name">곽수진</td>
          <td>12/14</td>
          <td>12/14</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Cover type 1</td>
          <td class="url"><a href="/PrintCover2" target="_blank">PrintCover2</a></td>
          <td class="name">곽수진</td>
          <td>12/14</td>
          <td>12/14</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>수정 및 신규 항목</td>
          <td></td>
          <td></td>
          <td class="url"><a href="/InsertOrder" target="_blank">InsertOrder</a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>12/30 <span class="txt-modify">(수정)</span></strong>
              주문/계약 내의 '웹사이트 체결가 서비스 옵션' 코멘트 수정
            </p>
            <p>
              <strong>01/05 <span class="txt-memo">(추가)</span></strong>
              '주문서 작성안내 메일발송' button 및 layer dialog 추가
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="url"><a href="/ContractDetails" target="_blank">ContractDetails</a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>01/04 <span class="txt-modify">(수정)</span></strong>
              upload-list > li > a.item 파일 다운로드 icon 추가
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="url"><a href="/InsertEmailSend" target="_blank">InsertEmailSend</a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p>
              <strong>01/10 <span class="txt-modify">(수정)</span></strong>
              "대상조회" 팝업 size 및 design 변경 / 대상 설정 추가(고객사)
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Audit</td>
          <td class="url"><a href="/CompanyNameList" target="_blank">CompanyNameList</a></td>
          <td class="name"></td>
          <td>01/13</td>
          <td>01/13</td>
          <td></td>
          <td>
            <p>
              <strong>01/13 <span class="txt-memo">(신규)</span></strong>
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Audit</td>
          <td class="url"><a href="/AuditTargetList" target="_blank">AuditTargetList</a></td>
          <td class="name"></td>
          <td>01/13</td>
          <td>01/13</td>
          <td></td>
          <td>
            <p>
              <strong>01/13 <span class="txt-modify">(수정 및 추가)</span></strong> "01/13 추가" 로 주석 처리
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="main" class="menu">
          <td>메인</td>
          <td>대시보드</td>
          <td></td>
          <td class="url"><a href="/Dashboard" target="_blank">Dashboard</a></td>
          <td class="name">곽수진</td>
          <td>12/01</td>
          <td>12/02</td>
          <td></td>
          <td>
            <p>
              <strong>12/10 <span class="txt-modify">(수정)</span></strong> 기획 변경 건 적용<br />
              - 주문서 현황 scrollbar 추가 <br />
              - link 관련 항목; a tag 를 span 으로 변경 후, class="pointer" 적용
            </p>
            <p>
              <strong>12/07 <span class="txt-memo">(추가)</span></strong>
              v-overflow-tooltip(말줄임 자동 tooltip 처리)
            </p>
            <p>dashboard layout 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>로그인(login)</td>
          <td></td>
          <td class="url"><a href="/login" target="_blank">login</a></td>
          <td class="name">곽수진</td>
          <td>07/05</td>
          <td>07/05</td>
          <td>완료</td>
          <td>
            <p>
              <strong>12/02 <span class="txt-modify">(수정)</span></strong
              >visual image, logo image교체
            </p>
            <p>
              <strong>07/14 추가</strong>
              로그인 버튼 클릭시 에러 메시지 처리 추가
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>비밀번호 찾기(find-password)</td>
          <td>비밀번호 찾기 <strong>Popup</strong>(find-password)</td>
          <td class="url"><a href="/login" target="_blank">login</a></td>
          <td class="name">곽수진</td>
          <td>07/05</td>
          <td>07/05</td>
          <td>완료</td>
          <td>
            <p>
              <strong>07/14 추가</strong>
              비밀번호 찾기 화면 class 추가
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>임시비밀번호 발송 <strong>Popup</strong>(send-temporary-password)</td>
          <td class="url"><a href="/login" target="_blank">login</a></td>
          <td class="name">곽수진</td>
          <td>07/05</td>
          <td>07/05</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>비밀번호 변경 <strong>Popup</strong></td>
          <td class="url"><a href="/login" target="_blank">login</a></td>
          <td class="name">곽수진</td>
          <td>07/16</td>
          <td>07/16</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="mypage" class="menu del">
          <td>마이페이지(my-page)</td>
          <td>관리자 정보 수정(update-manager-infomation)</td>
          <td>관리자 정보 수정(update-manager-infomation)</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>비밀번호 변경(change-password)</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="user" class="menu">
          <td>회원관리(member)</td>
          <td>회원관리(user)</td>
          <td>회원관리목록(user-list)</td>
          <td class="url"><a href="/memberlist" target="_blank">memberlist</a></td>
          <td class="name">곽수진</td>
          <td>07/06</td>
          <td>07/06</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>회원상세/수정(user-details)</td>
          <td class="url"><a href="/memberinfo" target="_blank">memberinfo</a></td>
          <td class="name">곽수진</td>
          <td>07/06</td>
          <td>07/06</td>
          <td>완료</td>
          <td>
            <p><strong>08/18 </strong>"고객사 매핑관리" button size="small" 를 size="medium" 으로 변경</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>회원강제탈퇴 <strong>Popup</strong>(withdrawal-user)-</td>
          <td class="url"><a href="/memberinfo" target="_blank">memberinfo</a></td>
          <td class="name">곽수진</td>
          <td>07/07</td>
          <td>07/07</td>
          <td>완료</td>
          <td>
            <p>
              <strong>07/14 추가</strong>
              class="vertical" 추가
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>고객사맵핑관리<strong>Popup</strong>(mapping-user-company)</td>
          <td class="url"><a href="/memberinfo" target="_blank">memberinfo</a></td>
          <td class="name">곽수진</td>
          <td>07/14</td>
          <td>07/15</td>
          <td>완료</td>
          <td>
            <p>5 case; 고객사맵핑관리 1,2,3,4,5(1, 3 은 주석참조)</p>
            <p><strong>07/26 수정 </strong>고객사맵핑관리 팝업 화면</p>
            <p><strong>07/29 수정 </strong>고객사맵핑관리 4,5 '국가코드' 항목 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>휴면회원관리목록(dormant-user-list</td>
          <td class="url"><a href="/DormantUserList" target="_blank">DormantUserList</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>회원관리로 대체</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>고객사관리(user-company)</td>
          <td>고객사목록(user-company-list)</td>
          <td class="url"><a href="/companylist" target="_blank">companylist</a></td>
          <td class="name">곽수진</td>
          <td>07/07</td>
          <td>07/07</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>고객사상세/수정(user-company-details)</td>
          <td class="url"><a href="/companyinfo" target="_blank">companyinfo</a></td>
          <td class="name">곽수진</td>
          <td>07/07</td>
          <td>07/07</td>
          <td>완료</td>
          <td><strong>07/15 추가</strong> table 항목 추가 및 삭제 behavior 수정</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>관리사맵핑관리<strong>Popup</strong>(mapping-management-company)</td>
          <td class="url"><a href="/companyinfo" target="_blank">companyinfo</a></td>
          <td class="name">곽수진</td>
          <td>07/15</td>
          <td>07/15</td>
          <td>완료</td>
          <td>상단 버튼 및 주석 참조</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>MIS코드맵핑관리<strong>Popup</strong>(mapping-mis-company)</td>
          <td class="url"><a href="/companyinfo" target="_blank">companyinfo</a></td>
          <td class="name">곽수진</td>
          <td>07/15</td>
          <td>07/15</td>
          <td>완료</td>
          <td>상단 버튼 및 주석 참조</td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="report" class="menu">
          <td>리포트관리(report)</td>
          <td>리포트 설정 관리</td>
          <td>설정</td>
          <td class="url"><a href="/ReportManage" target="_blank">ReportManage</a></td>
          <td class="name">곽수진</td>
          <td>10/13</td>
          <td>10/13</td>
          <td></td>
          <td>
            <p>
              <strong>11/11 <span class="txt-medo">(추가)</span></strong> '추가/삭제' button 일반 style 로 생성
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>리포트 당월신고 제출 현황</td>
          <td>목록</td>
          <td class="url"><a href="/ReportList" target="_blank">ReportList</a></td>
          <td class="name">곽수진</td>
          <td>10/13</td>
          <td>10/13</td>
          <td></td>
          <td>
            tab menu 포함
            <p>
              <strong>10/20 <span class="txt-medo">(추가)</span></strong> "대리신고하기" button 추가(우측 상단)
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/ReportDetails" target="_blank">ReportDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/14</td>
          <td>10/14</td>
          <td></td>
          <td>
            <p>
              <strong>11/11 <span class="txt-modify">(수정)</span></strong> "사용자 리포트 상세내용" markup 변경
            </p>
            <p>
              <strong>10/20 <span class="txt-memo">(추가)</span></strong> 상황별 button case
            </p>
            <p>
              <strong>10/19 <span class="txt-modify">(수정)</span></strong> 리포트 매핑 정보 table - 숫자 표시
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>매핑상품옵션 <strong>Popup</strong></td>
          <td class="url"><a href="/ReportDetails" target="_blank">ReportDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/14</td>
          <td>10/14</td>
          <td></td>
          <td>검색창 icon</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>사용자리포트 정정신고 의견 <strong>Popup</strong></td>
          <td class="url"><a href="/ReportDetails" target="_blank">ReportDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/20</td>
          <td>10/20</td>
          <td></td>
          <td>'반려' button</td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>리포트 개시/마감</td>
          <td class="url"></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>미신고사 관리</td>
          <td class="url"></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>리포트 과거 현황</td>
          <td>목록</td>
          <td class="url"><a href="/ReportPastList" target="_blank">ReportPastList</a></td>
          <td class="name">곽수진</td>
          <td>10/20</td>
          <td>10/20</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>리포트 대리신고</td>
          <td>대리신고</td>
          <td class="url"><a href="/InsertReportAdmin" target="_blank">InsertReportAdmin</a></td>
          <td class="name">곽수진</td>
          <td>10/13</td>
          <td>10/13</td>
          <td></td>
          <td>
            <p>
              <strong>11/11 <span class="txt-modify">(수정)</span></strong> "리포트 상세내용" markup 변경
            </p>
            <p>
              <strong>10/13 </strong><span class="txt-memo">(추가)</span>리포트 상세내용 내, 총액 표시 및 sample table
            </p>
          </td>
        </tr>
        <tr class="del">
          <td></td>
          <td>리포트 제출 관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="business" class="menu">
          <td>고객니즈&주문서관리(order)</td>
          <td>고객니즈항목관리</td>
          <td>질문지 목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>질문지 상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>질문지 등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>계약문의(고객니즈)</td>
          <td>목록</td>
          <td class="url"><a href="/InquireContractList" target="_blank">InquireContractList</a></td>
          <td class="name">곽수진</td>
          <td>10/25</td>
          <td>10/25</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/답변</td>
          <td class="url"><a href="/InquireContractDetails" target="_blank">InquireContractDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/25</td>
          <td>10/25</td>
          <td></td>
          <td>"예", "아니오" 선택된 사항을 radio 로 표현(기획/디자인 요청)</td>
        </tr>
        <tr>
          <td></td>
          <td>주문서 현황</td>
          <td>주문서 제공 목록</td>
          <td class="url"><a href="/OrderList" target="_blank">OrderList</a></td>
          <td class="name">곽수진</td>
          <td>09/06</td>
          <td>09/06</td>
          <td></td>
          <td>
            <p><strong>09/07 </strong>table header 항목 조정</p>
            <p><strong>09/08 </strong>"주문 구분" '표준', '기타'로 수정</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>주문서 상세/수정(이전 table style)</td>
          <td class="url"><a href="/OrderDetails" target="_blank">OrderDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/08</td>
          <td>09/30</td>
          <td></td>
          <td>
            <p>
              <strong>12/20 <span class="txt-memo">(추가)</span></strong> "해지신청 사유정보" 추가
            </p>
            <p><strong>09/08 </strong>팝업을 제외한 페이지 작업 완료</p>
            <p><strong>09/08 </strong>각 항목 "이전이력보기" 및 "변경이력보기" 진행 중</p>
            <p><strong>09/14 </strong>확약 사항 & 주문서 통화 설정 정보 추가 / FTP checkbox list markup 변경</p>
            <p><strong>09/16 </strong>table 내 새로운 유형의 table 추가</p>
            <p><strong>09/23 </strong><span class="txt-memo">(추가)</span>"반송" 사유 입력 <strong>popup</strong></p>
            <p>
              <strong>09/30 </strong><span class="txt-memo">(추가)</span>변경 이력보기 - 다음, 이전 icon button 작업
              완료
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>주문서 제공(수정된 table style)</td>
          <td class="url"><a href="/InsertOrder" target="_blank">InsertOrder</a></td>
          <td class="name">곽수진</td>
          <td>08/26</td>
          <td>09/01</td>
          <td></td>
          <td>
            <p><strong>09/02 </strong>비조회형 추가</p>
            <p><strong>09/06 </strong>"기본정보 설정" 및 "기타 주문 내용" 수정 완료</p>
            <p><strong>09/07 </strong>"정보 수신방식 - 직접, 간접" 수정 / "상품 목록" 추가 / "7종 팝업" 추가</p>
            <p><strong>09/08 </strong>title 및 "기본 정보" 항목 수정</p>
            <p><strong>09/14 </strong>확약 사항 추가 / FTP checkbox list markup 변경 / "상품목록" 삭제</p>
            <p><strong>09/16 </strong>table 내 새로운 유형의 table 추가</p>
            <p><strong>09/30 </strong><span class="txt-modify">(수정)</span>table 내 table style 변경</p>
            <p><strong>10/01 </strong><span class="txt-memo">(추가)</span>"이전 이력" 다음, 이전 아이콘 작업</p>
            <p>
              <strong>10/01 </strong><span class="txt-memo">(추가)</span>정보 수신방식 table 내, 초기 data 입력 button
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>기타신고 현황</td>
          <td>목록</td>
          <td class="url"><a href="/OtherReportList" target="_blank">OtherReportList</a></td>
          <td class="name">곽수진</td>
          <td>10/27</td>
          <td>10/27</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/OtherReportDetails" target="_blank">OtherReportDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/27</td>
          <td>10/27</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>반려 <strong>Popup</strong></td>
          <td class="url"><a href="/OtherReportDetails" target="_blank">OtherReportDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/27</td>
          <td>10/27</td>
          <td></td>
          <td>'반려' button</td>
        </tr>
        <tr>
          <td></td>
          <td>임시정지 신청 현황</td>
          <td>목록</td>
          <td class="url"><a href="/SuspensionList" target="_blank">SuspensionList</a></td>
          <td class="name">곽수진</td>
          <td>11/04</td>
          <td>11/04</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세 (반려 사유 <strong>Popup</strong> 포함)</td>
          <td class="url"><a href="/SuspensionDetails" target="_blank">SuspensionDetails</a></td>
          <td class="name">곽수진</td>
          <td>11/04</td>
          <td>11/04</td>
          <td></td>
          <td>
            '반려' button
            <p>
              <strong>11/11 <span class="memo">(추가)</span></strong> "결재 정보" 항목 추가
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="payment" class="menu">
          <td>전자결재(eworks)</td>
          <td>공용 서식관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>개인 서식관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>결재선 관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>결재문서 관리</td>
          <td>목록</td>
          <td class="url"><a href="/ApprovalList" target="_blank">ApprovalList</a></td>
          <td class="name">곽수진</td>
          <td>09/09</td>
          <td>09/09</td>
          <td>장,진행중</td>
          <td>
            <p><strong>10/01 </strong><span class="txt-memo">(추가)</span>검색 항목(2개), 승인상태 tooltip 으로 표현</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/ApprovalDetails" target="_blank">ApprovalDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/13</td>
          <td>09/14</td>
          <td>장,진행중</td>
          <td>
            <p><strong>09/23 </strong><span class="txt-memo">(삭제)</span>"프로모션" 항목</p>
            <p><strong>09/23 </strong><span class="txt-memo">(수정)</span>"결재자 지정" 세분화</p>
            <p><strong>09/23 </strong><span class="txt-memo">(추가)</span>"기안 내용" 세분화(코스콤 내부, KRX)</p>
            <p>
              <strong>09/23 </strong><span class="txt-memo">(수정)</span>"결재 현황" - "결재자 지정" 세분화에 따른 수정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>결재 의견 <strong>Popup</strong></td>
          <td class="url"><a href="/ApprovalDetails" target="_blank">ApprovalDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/14</td>
          <td>09/14</td>
          <td>장,진행중</td>
          <td>'승인' button</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>작성</td>
          <td class="url"><a href="/InsertApproval" target="_blank">InsertApproval</a></td>
          <td class="name">곽수진</td>
          <td>09/09</td>
          <td>09/13</td>
          <td>장,진행중</td>
          <td>
            <p><strong>09/16 </strong><span class="txt-memo">(삭제)</span>"프로모션" 항목</p>
            <p><strong>09/16 </strong><span class="txt-memo">(수정)</span>"결재자 지정" 세분화</p>
            <p><strong>09/23 </strong><span class="txt-memo">(추가)</span>"기안 내용" 세분화(코스콤 내부, KRX)</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세 KRX</td>
          <td class="url"><a href="/ApprovalKRXDetails" target="_blank">ApprovalKRXDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/13</td>
          <td>09/13</td>
          <td></td>
          <td>Front 이동</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>작성 KRX</td>
          <td class="url"><a href="/InsertApprovalKRX" target="_blank">InsertApprovalKRX</a></td>
          <td class="name">곽수진</td>
          <td>09/13</td>
          <td>09/13</td>
          <td></td>
          <td>Front 이동</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>외부공문 수신</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>외부공문 송신</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td>결재 문서함</td>
          <td>목록</td>
          <td class="url"><a href="/ApprovalDocList" target="_blank">ApprovalDocList</a></td>
          <td class="name">곽수진</td>
          <td>09/14</td>
          <td>09/14</td>
          <td></td>
          <td>
            <p><strong>09/16 </strong><span class="txt-memo">(삭제)</span>결재문서 관리 목록으로 통합됨</p>
          </td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="contract" class="menu del">
          <td>계약관리</td>
          <td>계약서식 관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="txt-memo">(삭제)</span>09/07 기획서 기준</td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>계약관리(Contract)</td>
          <td>상품별 계약 목록</td>
          <td>목록</td>
          <td class="url"><a href="/ProductContractList" target="_blank">ProductContractList</a></td>
          <td class="name">곽수진</td>
          <td>10/21</td>
          <td>10/21</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>계약 현황 조회</td>
          <td>목록</td>
          <td class="url"><a href="/ContractList" target="_blank">ContractList</a></td>
          <td class="name">곽수진</td>
          <td>09/15</td>
          <td>09/15</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/ContractDetails" target="_blank">ContractDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/15</td>
          <td>09/15</td>
          <td></td>
          <td>"Mis 계약번호 매핑" <strong>Popup</strong> 포함</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>해지 신청 <strong>Popup</strong></td>
          <td class="url"><a href="/ContractDetails" target="_blank">ContractDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/18</td>
          <td>10/18</td>
          <td></td>
          <td>'해지' button</td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>고객사별 계약 히스토리</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td><span class="txt-memo">(이동)</span> 09/07 기획서 기준 - 상세 페이지에 포함됨</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>계약 기타사항</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td>정보사업자 승인 통보 고객사</td>
          <td>목록</td>
          <td class="url"><a href="/NoticeCustomerList" target="_blank">NoticeCustomerList</a></td>
          <td class="name">곽수진</td>
          <td>09/15</td>
          <td>09/15</td>
          <td></td>
          <td>
            <p>10/19 <strong>(삭제)</strong>"정보사업자 승인 통보 현황 목록"으로 통합</p>
          </td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/NoticeCustomerDetails" target="_blank">NoticeCustomerDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/15</td>
          <td>09/15</td>
          <td></td>
          <td>
            <p>10/19 <strong>(이동)</strong>"정보사업자 승인 통보 현황 상세"로 통합</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>정보사업자 승인 통보 현황</td>
          <td>목록</td>
          <td class="url"><a href="/NoticeStatusList" target="_blank">NoticeStatusList</a></td>
          <td class="name">곽수진</td>
          <td>09/15</td>
          <td>09/15</td>
          <td></td>
          <td>
            <p>
              <strong>10/19 <span class="txt-modify">(수정)</span></strong> 검색 및 table 항목
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/NoticeStatusDetails" target="_blank">NoticeStatusDetails</a></td>
          <td class="name">곽수진</td>
          <td>10/19</td>
          <td>10/19</td>
          <td></td>
          <td>
            "정보승인현황 발송 이메일 주소", "통보" <strong>Popup</strong> 2개 포함
            <p>
              <strong>10/21 <span class="txt-modify">(수정)</span></strong> 정보사업자 승인통보 data 입력 table header -
              display:"none" 처리
            </p>
          </td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>계약승인 통보 명단 <strong>Popup</strong></td>
          <td class="url"><a href="/NoticeStatusList" target="_blank">NoticeStatusList</a></td>
          <td class="name">곽수진</td>
          <td>09/15</td>
          <td>09/15</td>
          <td></td>
          <td>email link</td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="product" class="menu">
          <td>상품관리(product)</td>
          <td>정보상품 관리</td>
          <td>조회</td>
          <td class="url"><a href="/InfoProductList" target="_blank">InfoProductList</a></td>
          <td class="name">곽수진</td>
          <td>09/02</td>
          <td>09/02</td>
          <td>함,완료</td>
          <td>
            <p><strong>09/02 </strong>해당 메뉴 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/InfoProductDetails" target="_blank">InfoProductDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/02</td>
          <td>09/02</td>
          <td>함,완료</td>
          <td>
            <p><strong>09/02 </strong>해당 메뉴 추가</p>
            <p><strong>09/03 </strong>오타 수정; 주문거 ==> 주문서</p>
            <p><strong>09/14 </strong>오타 수정; 변동률 ==> 변동료 / label 줄 내림으로 br 를 span으로 대체</p>
          </td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertInfoProduct" target="_blank"></a>InsertInfoProduct</td>
          <td class="name">곽수진</td>
          <td>09/02</td>
          <td></td>
          <td>함,완료</td>
          <td>
            <p><strong>09/02 </strong>해당 메뉴 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>상품 목록</td>
          <td>목록</td>
          <td class="url"><a href="/ProductList" target="_blank">ProductList</a></td>
          <td class="name">곽수진</td>
          <td>09/02</td>
          <td>09/02</td>
          <td>함,완료</td>
          <td>
            <p><strong>09/02 </strong>해당 메뉴 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/ProductDetails" target="_blank">ProductDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/02</td>
          <td>09/02</td>
          <td>함,완료</td>
          <td>
            <p><strong>09/02 </strong>해당 메뉴 추가</p>
          </td>
        </tr>
        <tr class="del">
          <td></td>
          <td>상품별 특례사항</td>
          <td>조회</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr class="del">
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>프로모션관리(특례/일반 - menu 통합)</td>
          <td>목록</td>
          <td class="url"><a href="/PromotionList" target="_blank">PromotionList</a></td>
          <td class="name">곽수진</td>
          <td>09/06</td>
          <td>09/06</td>
          <td>장,완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세</td>
          <td class="url"><a href="/PromotionDetails" target="_blank">PromotionDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/03</td>
          <td>09/03</td>
          <td>장,완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertPromotion" target="_blank">InsertPromotion</a></td>
          <td class="name">곽수진</td>
          <td>09/03</td>
          <td>09/03</td>
          <td>장,완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td class="del">상품TR관리</td>
          <td></td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="audit" class="menu">
          <td>Audit 관리(audit)</td>
          <td>기준 지역정보 목록</td>
          <td>목록</td>
          <td class="url"><a href="/RegionInfoList" target="_blank">RegionInfoList</a></td>
          <td class="name">곽수진</td>
          <td>10/29</td>
          <td>10/29</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Audit 대상후보 검색</td>
          <td>목록</td>
          <td class="url"><a href="/AuditTargetList" target="_blank">AuditTargetList</a></td>
          <td class="name">곽수진</td>
          <td>11/01</td>
          <td>11/01</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Audit 실적정보 관리</td>
          <td>목록</td>
          <td class="url"><a href="/AuditList" target="_blank">AuditList</a></td>
          <td class="name">곽수진</td>
          <td>10/29</td>
          <td>10/29</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/InsertAudit" target="_blank">InsertAudit</a></td>
          <td class="name">곽수진</td>
          <td>10/29</td>
          <td>10/29</td>
          <td></td>
          <td>등록 화면과 동일하여 등록화면으로 대체</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록 - 피감기관 <strong>Popup</strong> 포함</td>
          <td class="url"><a href="/InsertAudit" target="_blank">InsertAudit</a></td>
          <td class="name">곽수진</td>
          <td>10/29</td>
          <td>10/29</td>
          <td></td>
          <td>'조회' button</td>
        </tr>
        <tr>
          <td></td>
          <td>기준정보 미맵핑 목록</td>
          <td>목록</td>
          <td class="url"><a href="/UnmappedList" target="_blank">UnmappedList</a></td>
          <td class="name">곽수진</td>
          <td>11/01</td>
          <td>11/01</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>고객사별 리포트 데이터 추출</td>
          <td>목록</td>
          <td class="url"><a href="/ReportDataList" target="_blank">ReportDataList</a></td>
          <td class="name">곽수진</td>
          <td>10/29</td>
          <td>10/29</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>가입자 별칭관리</td>
          <td>목록</td>
          <td class="url"><a href="/CompanyNameList" target="_blank">CompanyNameList</a></td>
          <td class="name">곽수진</td>
          <td>01/13</td>
          <td>01/13</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="sales" class="menu">
          <td>매출 및 고객분석(sales)</td>
          <td>매출 통계</td>
          <td>신규/해지 통계-고객사수</td>
          <td class="url"><a href="/NewStatisticsCustomer" target="_blank">NewStatisticsCustomer</a></td>
          <td class="name">곽수진</td>
          <td>11/10</td>
          <td>11/10</td>
          <td></td>
          <td>
            비교기간 유무에 따른 table 별도 작업(주석 확인 필요)
            <p>
              <strong>11/19 <span class="txt-modify">(수정)</span></strong> 분기별 date picker "년도" 속성 role="button"
              삭제
            </p>
            <p>
              <strong>11/16 <span class="txt-modify">(수정)</span></strong> "조회기간 달력" 월간을 분기별로 수정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>신규/해지 통계-계약금액</td>
          <td class="url"><a href="/NewStatisticsContract" target="_blank">NewStatisticsContract</a></td>
          <td class="name">곽수진</td>
          <td>11/11</td>
          <td>11/11</td>
          <td></td>
          <td>
            비교기간 유무에 따른 table 별도 작업(주석 확인 필요)
            <p>
              <strong>11/16 <span class="txt-modify">(수정)</span></strong> 증감 표현 방식 수정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>매출통계-상품별</td>
          <td class="url"><a href="/SalesStatisticsProduct" target="_blank">SalesStatisticsProduct</a></td>
          <td class="name">곽수진</td>
          <td>11/16</td>
          <td>11/16</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>매출통계-고객군별</td>
          <td class="url"><a href="/SalesStatisticsCustomer" target="_blank">SalesStatisticsCustomer</a></td>
          <td class="name">곽수진</td>
          <td>11/16</td>
          <td>11/16</td>
          <td></td>
          <td>
            <p>
              <strong>11/17 <span class="txt-modify">(수정)</span></strong> "비교기간 설정" table label "고객군별" 로
              수정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>매출통계-국가별</td>
          <td class="url"><a href="/SalesStatisticsRegion" target="_blank">SalesStatisticsRegion</a></td>
          <td class="name">곽수진</td>
          <td>11/16</td>
          <td>11/16</td>
          <td></td>
          <td>
            <p>
              <strong>11/17 <span class="txt-modify">(수정)</span></strong> "비교기간 설정" table label "국가별" 로 수정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>고객 DB 분석</td>
          <td>고객사 통계</td>
          <td class="url">매출통계 참조</td>
          <td class="name">곽수진</td>
          <td>11/16</td>
          <td>11/16</td>
          <td></td>
          <td>단위 확인 필요</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>라이선스 보유통계</td>
          <td class="url"><a href="/LicenseStatistics" target="_blank">LicenseStatistics</a></td>
          <td class="name">곽수진</td>
          <td>11/16</td>
          <td>11/17</td>
          <td></td>
          <td>"비교기간 설정" table 은 "상품별보기 비교기간 있음" table 로 대체(주석 확인)</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>관계사 현황</td>
          <td class="url"><a href="/RelationshipCompany" target="_blank">RelationshipCompany</a></td>
          <td class="name">곽수진</td>
          <td>11/11</td>
          <td>11/11</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>고객사별 분배통계</td>
          <td class="url"><a href="/DistributionStatistics" target="_blank">DistributionStatistics</a></td>
          <td class="name">곽수진</td>
          <td>11/12</td>
          <td>11/12</td>
          <td></td>
          <td>
            <p>
              <strong>11/16 <span class="txt-modify">(수정)</span></strong> 비교기간 선택한 table의 증감 markup 변경
            </p>
            <p>
              <strong>11/16 <span class="txt-modify">(수정)</span></strong> 검색조건의 "고객사 조회" button 으로 수정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>망공유 이용통계</td>
          <td class="url"><a href="/NetworkSharingStatistics" target="_blank">NetworkSharingStatistics</a></td>
          <td class="name">곽수진</td>
          <td>11/17</td>
          <td>11/17</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>정보벤더별 이용 고객사 통계</td>
          <td class="url"><a href="/InfoVendorStatistics" target="_blank">InfoVendorStatistics</a></td>
          <td class="name">곽수진</td>
          <td>11/17</td>
          <td>11/17</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>프로모션/특례 이용현황</td>
          <td class="url"><a href="/PromotionUsecase" target="_blank">PromotionUsecase</a></td>
          <td class="name">곽수진</td>
          <td>11/17</td>
          <td>11/17</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>사용자 리포트 통계</td>
          <td class="url">매출통계 참조</td>
          <td class="name">곽수진</td>
          <td>11/16</td>
          <td>11/16</td>
          <td></td>
          <td>단위 확인 필요</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>서브벤더(Sub-Vendor)현황</td>
          <td class="url"><a href="/SubVendor" target="_blank">SubVendor</a></td>
          <td class="name">곽수진</td>
          <td>11/17</td>
          <td>11/17</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>매출 추정</td>
          <td>기본료 매출추정</td>
          <td class="url"><a href="/BasicSalesEstimated" target="_blank">BasicSalesEstimated</a></td>
          <td class="name">곽수진</td>
          <td>11/17</td>
          <td>11/18</td>
          <td></td>
          <td>
            <strong>11/19 <span class="txt-memo">(추가)</span></strong> 국내/해외 tab menu
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>변동료 매출추정</td>
          <td class="url"><a href="/VariableSalesEstimated" target="_blank">VariableSalesEstimated</a></td>
          <td class="name">곽수진</td>
          <td>11/18</td>
          <td>11/18</td>
          <td></td>
          <td>
            <strong>11/19 <span class="txt-memo">(추가)</span></strong> 설정 조건, 국내/해외 tab menu
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>매출추정 집계</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td>11/17 기준 기획서 내용 없음</td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="customer" class="menu">
          <td>고객서비스관리(customer)</td>
          <td>연락처 관리</td>
          <td>목록</td>
          <td class="url"><a href="/ContactList" target="_blank">ContactList</a></td>
          <td class="name">곽수진</td>
          <td>08/12</td>
          <td>08/12</td>
          <td>완료</td>
          <td>
            <p><strong>08/19 </strong>검색 항목 배치 수정</p>
            <p><strong>08/19 </strong>multi select 항목에 class="multi-tags" 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/ContactDetails" target="_blank">ContactDetails</a></td>
          <td class="name">곽수진</td>
          <td>08/12</td>
          <td>08/12</td>
          <td>완료</td>
          <td>
            <p><strong>08/18 </strong>전체적으로 항목 추가</p>
            <p><strong>08/18 </strong>"index.ts" 파일에서 Layout:"ContentLayout2" 로 변경</p>
            <p><strong>09/14 </strong>주소 입력 항목 - 공통 적용</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertContact" target="_blank">InsertContact</a></td>
          <td class="name">곽수진</td>
          <td>08/12</td>
          <td>08/12</td>
          <td>완료</td>
          <td>
            <p><strong>08/18 </strong>전체적으로 항목 추가</p>
            <p><strong>08/18 </strong>주소 입력 항목 수정</p>
            <p><strong>09/14 </strong>주소 입력 항목 - 공통 적용</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>발송그룹관리(send-group)</td>
          <td>발송그룹목록(send-group-list)</td>
          <td class="url"><a href="/sendinglist" target="_blank">sendinglist</a></td>
          <td class="name">곽수진</td>
          <td>07/07</td>
          <td>07/07</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>발송그룹상세(send-group-details)</td>
          <td class="url"><a href="/SendingDetails" target="_blank">SendingDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/08</td>
          <td>07/08</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>발송그룹등록(insert-send-group)</td>
          <td class="url"><a href="/InsertSending" target="_blank">InsertSending</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>수신회원 추가 관리 <strong>Popup</strong>(reception-user)</td>
          <td class="url"><a href="/InsertSending" target="_blank">InsertSending</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td>완료</td>
          <td>
            기획서 변경으로 '검색' 항목 수정 필요
            <p><strong>08/04</strong> 팝업창 '추가' button 의 class="el-button--large" 삭제</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>이메일 발송 관리(send-email)</td>
          <td>이메일발송목록</td>
          <td class="url"><a href="/EmailSendList" target="_blank">EmailSendList</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이메일발송상세</td>
          <td class="url"><a href="/EmailSendDetails" target="_blank">EmailSendDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/29</td>
          <td>07/29</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이메일발송등록</td>
          <td class="url"><a href="/InsertEmailSend" target="_blank">InsertEmailSend</a></td>
          <td class="name">곽수진</td>
          <td>07/29</td>
          <td>07/29</td>
          <td>완료</td>
          <td>
            <p>
              <strong>08/06 </strong> "발송언어" checkbox로 수정, "메일 발송계정" select box로 수정, "발송 대상 수" 일반
              text 로 수정, button size 조정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이메일발송 임시저장</td>
          <td class="url"><a href="/InsertEmailSendSave" target="_blank">InsertEmailSendSave</a></td>
          <td class="name">곽수진</td>
          <td>07/29</td>
          <td>07/29</td>
          <td>완료</td>
          <td>
            <p>
              <strong>10/27 <span class="txt-modify">(수정)</span></strong> "설정된 발송 대상" el-tag 색상 추가
            </p>
            <p>
              <strong>08/06 </strong> "발송언어" checkbox로 수정, "메일 발송계정" select box로 수정, "발송 대상 수" 일반
              text 로 수정, button size 조정
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>발송대상 조회관리 <strong>Popup</strong></td>
          <td class="url"><a href="/InsertEmailSend" target="_blank">InsertEmailSend</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>완료</td>
          <td>
            '발송 대상 조회' button 클릭
            <p>
              <strong>10/21 <span class="txt-modify">(수정)</span></strong> 발송 대상 grouping
            </p>
            <p><strong>08/06 </strong> "그룹조회", "대상조회", "발송대상조회" 팝업 수정 및 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>이메일 미리보기</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>SMS 발송 관리(send-sms)</td>
          <td>SMS발송목록</td>
          <td class="url"><a href="/SMSSendList" target="_blank">SMSSendList</a></td>
          <td class="name">곽수진</td>
          <td>07/29</td>
          <td>07/29</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>SMS발송상세</td>
          <td class="url"><a href="/SMSSendDetails" target="_blank">SMSSendDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/29</td>
          <td>07/29</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>SMS발송등록</td>
          <td class="url"><a href="/InsertSMSSend" target="_blank">InsertSMSSend</a></td>
          <td class="name">곽수진</td>
          <td>07/29</td>
          <td>07/29</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>SMS발송 임시저장</td>
          <td class="url"><a href="/InsertSMSSendSave" target="_blank">InsertSMSSendSave</a></td>
          <td class="name">곽수진</td>
          <td>07/29</td>
          <td>07/29</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>발송이력관리(send-history)</td>
          <td>발송이력목록</td>
          <td class="url"><a href="/SendHistoryList" target="_blank">SendHistoryList</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>발송이력상세</td>
          <td class="url"><a href="/SendHistoryDetails" target="_blank">SendHistoryDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td>완료</td>
          <td>
            <p><strong>08/11 </strong>"발송 상세 보기" 버튼 추가 / 팝업 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>공지사항관리(notice)</td>
          <td>목록</td>
          <td class="url"><a href="/NoticeList" target="_blank">NoticeList</a></td>
          <td class="name">곽수진</td>
          <td>07/26</td>
          <td>07/26</td>
          <td>완료</td>
          <td>
            <p><strong>08/11 </strong>"search" 및 "table" 에 "대상언어" 항목 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/NoticeDetails" target="_blank">NoticeDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/27</td>
          <td>07/27</td>
          <td>완료</td>
          <td>
            <p><strong>08/09 </strong>"발송언어" 추가, 공시사항 상세를 "국문", "영문" 으로 세분화</p>
            <p><strong>08/11 </strong>"발송언어" 를 <strong>"대상언어"</strong>로 용어변경</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertNotice" target="_blank">InsertNotice</a></td>
          <td class="name">곽수진</td>
          <td>07/26</td>
          <td>07/27</td>
          <td>완료</td>
          <td>
            <p><strong>08/09 </strong>"발송언어" 추가, 공시사항 상세를 "국문", "영문" 으로 세분화</p>
            <p><strong>08/11 </strong>"발송언어" 를 <strong>"대상언어"</strong>로 용어변경</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>FAQ 관리(faq)</td>
          <td>목록</td>
          <td class="url"><a href="/FaqList" target="_blank">FaqList</a></td>
          <td class="name">곽수진</td>
          <td>07/27</td>
          <td>07/27</td>
          <td>완료</td>
          <td>
            <p><strong>08/11 </strong>"search" 및 "table"에 "대상언어" 항목 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/FaqDetails" target="_blank">FaqDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/27</td>
          <td>07/27</td>
          <td>완료</td>
          <td>
            <p><strong>08/09 </strong>"발송언어" 추가, faq 상세를 "국문", "영문" 으로 세분화</p>
            <p><strong>08/11 </strong>"발송언어" 를 <strong>"대상언어"</strong>로 용어변경</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertFaq" target="_blank">InsertFaq</a></td>
          <td class="name">곽수진</td>
          <td>07/27</td>
          <td>07/27</td>
          <td>완료</td>
          <td>
            <p><strong>08/09 </strong>"발송언어" 추가, faq 상세를 "국문", "영문" 으로 세분화</p>
            <p><strong>08/11 </strong>"발송언어" 를 <strong>"대상언어"</strong>로 용어변경</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>1:1 문의 관리(inquiry)</td>
          <td>목록</td>
          <td class="url"><a href="/InquiryList" target="_blank">InquiryList</a></td>
          <td class="name">곽수진</td>
          <td>07/27</td>
          <td>07/27</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>문의상세 - 답변 완료</td>
          <td class="url"><a href="/InquiryDetails" target="_blank">InquiryDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/27</td>
          <td>07/27</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>문의상세 - 답변 대기</td>
          <td class="url"><a href="/InsertInquiry" target="_blank">InsertInquiry</a></td>
          <td class="name">곽수진</td>
          <td>07/27</td>
          <td>07/27</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="operation" class="menu">
          <td>사이트운영관리(site-operation)</td>
          <td>관리자 관리</td>
          <td>목록</td>
          <td class="url"><a href="/AdminList" target="_blank">AdminList</a></td>
          <td class="name">곽수진</td>
          <td>07/16</td>
          <td>07/19</td>
          <td>완료</td>
          <td>
            <p><strong>07/20 추가 </strong>삭제 버튼 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/AdminDetails" target="_blank">AdminDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/20</td>
          <td>07/20</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertAdmin" target="_blank">InsertAdmin</a></td>
          <td class="name">곽수진</td>
          <td>07/20</td>
          <td>07/20</td>
          <td>완료</td>
          <td>
            <p><strong>08/19 </strong> 국문, 영문 입력난을 성과 이름으로 분리</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>관리자 Role 관리</td>
          <td>목록</td>
          <td class="url"><a href="/RoleList" target="_blank">RoleList</a></td>
          <td class="name">곽수진</td>
          <td>07/21</td>
          <td>07/21</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/RoleDetails" target="_blank">RoleDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/22</td>
          <td>07/22</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertRole" target="_blank">InsertRole</a></td>
          <td class="name">곽수진</td>
          <td>07/21</td>
          <td>07/22</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>메인전시관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>팝업관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>배너관리</td>
          <td>목록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>표준 문서 관리</td>
          <td>목록</td>
          <td class="url"><a href="/DocumentList" target="_blank">DocumentList</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/DocumentDetails" target="_blank">DocumentDetails</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertDocument" target="_blank">InsertDocument</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>용어사전 관리</td>
          <td>목록</td>
          <td class="url"><a href="/DictionaryList" target="_blank">DictionaryList</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/DictionaryDetails" target="_blank">DictionaryDetails</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertDictionary" target="_blank">InsertDictionary</a></td>
          <td class="name">곽수진</td>
          <td>08/03</td>
          <td>08/03</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="8" class="hr"></td>
        </tr>
        <tr id="common" class="menu">
          <td>공통관리(common)</td>
          <td>API관리(api)</td>
          <td>목록(api-list)</td>
          <td class="url"><a href="/apilist" target="_blank">apilist</a></td>
          <td class="name">곽수진</td>
          <td>07/09</td>
          <td>07/09</td>
          <td>완료</td>
          <td>
            <p><strong>07/21 추가</strong> search error 및 table sorting 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정(api-details)</td>
          <td class="url"><a href="/apidetails" target="_blank">apidetails</a></td>
          <td class="name">곽수진</td>
          <td>07/09</td>
          <td>07/10</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록(insert-api)</td>
          <td class="url"><a href="/insertapi" target="_blank">insertapi</a></td>
          <td class="name">곽수진</td>
          <td>07/10</td>
          <td>07/10</td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>페이지관리(page)</td>
          <td>목록(page-list)</td>
          <td class="url"><a href="/pagelist" target="_blank">pagelist</a></td>
          <td class="name">곽수진</td>
          <td>07/12</td>
          <td>07/12</td>
          <td>완료</td>
          <td>
            <p><strong>07/21 추가</strong> search error 및 table sorting 추가, 기획서 현행화</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정(page-details)</td>
          <td class="url"><a href="/pagedetails" target="_blank">pagedetails</a></td>
          <td class="name">곽수진</td>
          <td>07/12</td>
          <td>07/13</td>
          <td>완료</td>
          <td>
            <p><strong>07/20 수정 </strong>기획서 현행화</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록(insert-page)</td>
          <td class="url"><a href="/insertpage" target="_blank">insertpage</a></td>
          <td class="name">곽수진</td>
          <td>07/12</td>
          <td>07/13</td>
          <td>완료</td>
          <td>
            <p>
              <strong>11/25 <span class="txt-memo">추가</span></strong
              >소스보기, 미리보기 기능
            </p>
            <p><strong>07/20 수정 </strong>기획서 현행화</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>API 조회 <strong>Popup</strong></td>
          <td class="url"><a href="/insertpage" target="_blank">insertpage</a></td>
          <td class="name">곽수진</td>
          <td>07/16</td>
          <td>07/16</td>
          <td>완료</td>
          <td>"API등록" 버튼 클릭</td>
        </tr>
        <tr>
          <td></td>
          <td>메뉴관리(menu)</td>
          <td class="del">목록(menu-list)</td>
          <td class="url"><a href="/" target="_blank"></a></td>
          <td class="name"></td>
          <td></td>
          <td></td>
          <td>완료</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정(menu-details)</td>
          <td class="url"><a href="/MenuDetails" target="_blank">MenuDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/26</td>
          <td>07/26</td>
          <td>완료</td>
          <td>
            <p><strong>07/27 삭제 </strong>메뉴관리 tree checkbox 삭제</p>
            <p><strong>07/27 수정 </strong>"페이지 추가" 팝업 '대상추가' 버튼 및 checkbox 삭제 후, '선택' 버튼 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록(insert-menu)</td>
          <td class="url"><a href="/InsertMenu" target="_blank">InsertMenu</a></td>
          <td class="name">곽수진</td>
          <td>07/23</td>
          <td>07/23</td>
          <td>완료</td>
          <td>
            <p><strong>07/27 삭제 </strong>메뉴관리 tree checkbox 삭제</p>
            <p><strong>07/27 수정 </strong>"페이지 추가" 팝업 '대상추가' 버튼 및 checkbox 삭제 후, '선택' 버튼 추가</p>
            <p><strong>07/29 추가 </strong>uri 입력난 우측에 '삭제' 버튼 추가</p>
            <p><strong>08/04 수정 </strong>"메뉴 등록" class 삭제, 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>페이지 매핑 <strong>Popup</strong>(mapping-page-popup)</td>
          <td class="url"><a href="/InsertMenu" target="_blank">InsertMenu</a></td>
          <td class="name">곽수진</td>
          <td>07/26</td>
          <td>07/26</td>
          <td>완료</td>
          <td>"페이지 조회" 버튼 클릭</td>
        </tr>
        <tr>
          <td></td>
          <td>코드관리(code)</td>
          <td>목록/상세(code-list)</td>
          <td class="url"><a href="/codelist" target="_blank">codelist</a></td>
          <td class="name">곽수진</td>
          <td>07/13</td>
          <td>07/14</td>
          <td>완료</td>
          <td>
            <p><strong>07/21 수정</strong> splitpanes 및 높이 100% 추가</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>콘텐츠관리(content)</td>
          <td>목록(content-list)</td>
          <td class="url"><a href="/ContentList" target="_blank">ContentList</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정(content-details)</td>
          <td class="url"><a href="/ContentDetails" target="_blank">ContentDetails</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록(insert-content)</td>
          <td class="url"><a href="/InsertContent" target="_blank">InsertContent</a></td>
          <td class="name">곽수진</td>
          <td>07/28</td>
          <td>07/28</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>주문서 유형 관리(추가)</td>
          <td>목록</td>
          <td class="url"><a href="/OrderTypeList" target="_blank">OrderTypeList</a></td>
          <td class="name">곽수진</td>
          <td>09/08</td>
          <td>09/08</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/OrderTypeDetails" target="_blank">OrderTypeDetails</a></td>
          <td class="name">곽수진</td>
          <td>09/09</td>
          <td>09/09</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/InsertOrderType" target="_blank">InsertOrderType</a></td>
          <td class="name">곽수진</td>
          <td>09/09</td>
          <td>09/09</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>부가1 정보 관리(추가)</td>
          <td>목록</td>
          <td class="url"><a href="/List" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/Details" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/Insert" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>부가2 정보 관리(추가)</td>
          <td>목록</td>
          <td class="url"><a href="/List" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/Details" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/Insert" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>옵션 상세정보 관리(추가)</td>
          <td>목록</td>
          <td class="url"><a href="/OptionInfoList" target="_blank">OptionInfoList</a></td>
          <td class="name">곽수진</td>
          <td>09/13</td>
          <td></td>
          <td></td>
          <td>table 내 "검색 박스" 추가</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>상세/수정</td>
          <td class="url"><a href="/Details" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>등록</td>
          <td class="url"><a href="/Insert" target="_blank"></a></td>
          <td class="name">곽수진</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContentLayout",
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 20px;
}
a:focus {
  outline: auto;
}
.hr {
  padding: 15px;
  border: 0;
}
table {
  width: 100%;
}
tr td:first-child {
  font-weight: 500;
}
th,
td {
  height: 30px;
  padding: 10px;
  border: 1px solid #a09d9d;
}
th {
  background-color: #eee;
  text-align: center;
}
td {
  text-align: left;
  padding: 5px 10px;
}
td:nth-child(5),
td:nth-child(6),
td:nth-child(7),
td:nth-child(8) {
  text-align: center;
}
tr.menu td {
  border-top: 2px solid #636363;
}
td p:not(:last-child) {
  margin-bottom: 7px;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.switch {
  padding: 10px 20px;
  text-align: right;
}
.txt-memo {
  margin-right: 5px;
  font-weight: bold;
}
.txt-modify {
  margin-right: 5px;
  color: red;
  font-weight: bold;
}
.pub-menu-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  table-layout: fixed;
  width: 100%;
  background-color: #000;
}
.pub-menu-list li {
  width: 16.666%;
  border: 1px solid #fff;
  border-width: 1px 0 0 1px;
  color: #fff;
  text-align: center;
}
.menu-go {
  display: block;
  width: 100%;
  padding: 10px 5px;
  color: #fff;
}
.file-list {
  padding: 20px;
}
.name {
  text-align: center;
}
.del {
  color: blue;
  text-decoration: line-through;
  opacity: 0.5;
}
.url a {
  text-align: left;
  text-decoration: underline;
}
</style>
