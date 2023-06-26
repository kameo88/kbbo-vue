import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

/**
 * Route 등록시 Home을 제외한 나머지는 Lazy loading을 사용하기로 한다.
 * 또한, 모든 페이지는
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "sample",
    path: "/sample",
    component: () => import("@/views/Publishing/Sample.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "GuideList",
    path: "/GuideList",
    component: () => import("@/views/Publishing/GuideList.vue"),
    meta: {
      authorized: false,
      layout: "GuideLayout",
    },
  },
  {
    name: "GuideButton",
    path: "/GuideButton",
    component: () => import("@/views/Publishing/GuideButton.vue"),
    meta: {
      authorized: false,
      layout: "GuideLayout",
    },
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/Login.vue"),
    meta: {
      authorized: false,
      layout: "LoginLayout",
    },
  },
  {
    name: "Dashboard",
    path: "/Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      authorized: false,
      layout: "DashboardLayout",
    },
  },
  {
    name: "MyPage",
    path: "/mypage",
    component: () => import("@/views/MyPage.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "MemberList",
    path: "/MemberList",
    component: () => import("@/views/member/MemberList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "MemberInfo",
    path: "/MemberInfo",
    component: () => import("@/views/member/MemberInfo.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ReportManage",
    path: "/ReportManage",
    component: () => import("@/views/report/ReportManage.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ReportList",
    path: "/ReportList",
    component: () => import("@/views/report/ReportList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ReportDetails",
    path: "/ReportDetails",
    component: () => import("@/views/report/ReportDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ReportPastList",
    path: "/ReportPastList",
    component: () => import("@/views/report/ReportPastList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertReportAdmin",
    path: "/InsertReportAdmin",
    component: () => import("@/views/report/InsertReportAdmin.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "RegionInfoList",
    path: "/RegionInfoList",
    component: () => import("@/views/audit/RegionInfoList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "AuditTargetList",
    path: "/AuditTargetList",
    component: () => import("@/views/audit/AuditTargetList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "UnmappedList",
    path: "/UnmappedList",
    component: () => import("@/views/audit/UnmappedList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "AuditList",
    path: "/AuditList",
    component: () => import("@/views/audit/AuditList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertAudit",
    path: "/InsertAudit",
    component: () => import("@/views/audit/InsertAudit.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ReportDataList",
    path: "/ReportDataList",
    component: () => import("@/views/audit/ReportDataList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "CompanyNameList",
    path: "/CompanyNameList",
    component: () => import("@/views/audit/CompanyNameList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "DormantUserList",
    path: "/DormantUserList",
    component: () => import("@/views/member/DormantUserList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "CompanyList",
    path: "/CompanyList",
    component: () => import("@/views/member/CompanyList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "CompanyInfo",
    path: "/CompanyInfo",
    component: () => import("@/views/member/CompanyInfo.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "OrderList",
    path: "/OrderList",
    component: () => import("@/views/order/OrderList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "OrderDetails",
    path: "/OrderDetails",
    component: () => import("@/views/order/OrderDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertOrder",
    path: "/InsertOrder",
    component: () => import("@/views/order/InsertOrder.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "Print",
    path: "/Print",
    component: () => import("@/views/order/Print.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "PrintCover1",
    path: "/PrintCover1",
    component: () => import("@/views/order/PrintCover1.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "PrintCover2",
    path: "/PrintCover2",
    component: () => import("@/views/order/PrintCover2.vue"),
    meta: {
      authorized: false,
      layout: "EmptyLayout",
    },
  },
  {
    name: "OtherReportList",
    path: "/OtherReportList",
    component: () => import("@/views/order/OtherReportList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "OtherReportDetails",
    path: "/OtherReportDetails",
    component: () => import("@/views/order/OtherReportDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SuspensionList",
    path: "/SuspensionList",
    component: () => import("@/views/order/SuspensionList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SuspensionDetails",
    path: "/SuspensionDetails",
    component: () => import("@/views/order/SuspensionDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ApprovalList",
    path: "/ApprovalList",
    component: () => import("@/views/eworks/ApprovalList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ApprovalDetails",
    path: "/ApprovalDetails",
    component: () => import("@/views/eworks/ApprovalDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertApproval",
    path: "/InsertApproval",
    component: () => import("@/views/eworks/InsertApproval.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertApprovalKRX",
    path: "/InsertApprovalKRX",
    component: () => import("@/views/eworks/InsertApprovalKRX.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ApprovalKRXDetails",
    path: "/ApprovalKRXDetails",
    component: () => import("@/views/eworks/ApprovalKRXDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ApprovalDocList",
    path: "/ApprovalDocList",
    component: () => import("@/views/eworks/ApprovalDocList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InfoProductList",
    path: "/InfoProductList",
    component: () => import("@/views/product/InfoProductList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ProductContractList",
    path: "/ProductContractList",
    component: () => import("@/views/contract/ProductContractList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InquireContractList",
    path: "/InquireContractList",
    component: () => import("@/views/contract/InquireContractList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InquireContractDetails",
    path: "/InquireContractDetails",
    component: () => import("@/views/contract/InquireContractDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ContractList",
    path: "/ContractList",
    component: () => import("@/views/contract/ContractList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ContractDetails",
    path: "/ContractDetails",
    component: () => import("@/views/contract/ContractDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "NoticeCustomerList",
    path: "/NoticeCustomerList",
    component: () => import("@/views/contract/NoticeCustomerList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "NoticeCustomerDetails",
    path: "/NoticeCustomerDetails",
    component: () => import("@/views/contract/NoticeCustomerDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "NoticeStatusList",
    path: "/NoticeStatusList",
    component: () => import("@/views/contract/NoticeStatusList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "NoticeStatusDetails",
    path: "/NoticeStatusDetails",
    component: () => import("@/views/contract/NoticeStatusDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InfoProductDetails",
    path: "/InfoProductDetails",
    component: () => import("@/views/product/InfoProductDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "PromotionList",
    path: "/PromotionList",
    component: () => import("@/views/product/PromotionList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "PromotionDetails",
    path: "/PromotionDetails",
    component: () => import("@/views/product/PromotionDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertPromotion",
    path: "/InsertPromotion",
    component: () => import("@/views/product/InsertPromotion.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ProductList",
    path: "/ProductList",
    component: () => import("@/views/product/ProductList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ProductDetails",
    path: "/ProductDetails",
    component: () => import("@/views/product/ProductDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "NewStatisticsCustomer",
    path: "/NewStatisticsCustomer",
    component: () => import("@/views/sales/NewStatisticsCustomer.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SalesStatisticsProduct",
    path: "/SalesStatisticsProduct",
    component: () => import("@/views/sales/SalesStatisticsProduct.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SalesStatisticsCustomer",
    path: "/SalesStatisticsCustomer",
    component: () => import("@/views/sales/SalesStatisticsCustomer.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SalesStatisticsRegion",
    path: "/SalesStatisticsRegion",
    component: () => import("@/views/sales/SalesStatisticsRegion.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "NewStatisticsContract",
    path: "/NewStatisticsContract",
    component: () => import("@/views/sales/NewStatisticsContract.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "LicenseStatistics",
    path: "/LicenseStatistics",
    component: () => import("@/views/sales/LicenseStatistics.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "RelationshipCompany",
    path: "/RelationshipCompany",
    component: () => import("@/views/sales/RelationshipCompany.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "DistributionStatistics",
    path: "/DistributionStatistics",
    component: () => import("@/views/sales/DistributionStatistics.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "NetworkSharingStatistics",
    path: "/NetworkSharingStatistics",
    component: () => import("@/views/sales/NetworkSharingStatistics.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InfoVendorStatistics",
    path: "/InfoVendorStatistics",
    component: () => import("@/views/sales/InfoVendorStatistics.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "PromotionUsecase",
    path: "/PromotionUsecase",
    component: () => import("@/views/sales/PromotionUsecase.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SubVendor",
    path: "/SubVendor",
    component: () => import("@/views/sales/SubVendor.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "BasicSalesEstimated",
    path: "/BasicSalesEstimated",
    component: () => import("@/views/sales/BasicSalesEstimated.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "VariableSalesEstimated",
    path: "/VariableSalesEstimated",
    component: () => import("@/views/sales/VariableSalesEstimated.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ContactList",
    path: "/ContactList",
    component: () => import("@/views/customer/ContactList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ContactDetails",
    path: "/ContactDetails",
    component: () => import("@/views/customer/ContactDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertContact",
    path: "/InsertContact",
    component: () => import("@/views/customer/InsertContact.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SendingList",
    path: "/SendingList",
    component: () => import("@/views/customer/SendingList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SendingDetails",
    path: "/SendingDetails",
    component: () => import("@/views/customer/SendingDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertSending",
    path: "/InsertSending",
    component: () => import("@/views/customer/InsertSending.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "EmailSendList",
    path: "/EmailSendList",
    component: () => import("@/views/customer/EmailSendList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "EmailSendDetails",
    path: "/EmailSendDetails",
    component: () => import("@/views/customer/EmailSendDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertEmailSend",
    path: "/InsertEmailSend",
    component: () => import("@/views/customer/InsertEmailSend.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertEmailSendSave",
    path: "/InsertEmailSendSave",
    component: () => import("@/views/customer/InsertEmailSendSave.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SMSSendList",
    path: "/SMSSendList",
    component: () => import("@/views/customer/SMSSendList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SMSSendDetails",
    path: "/SMSSendDetails",
    component: () => import("@/views/customer/SMSSendDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertSMSSend",
    path: "/InsertSMSSend",
    component: () => import("@/views/customer/InsertSMSSend.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertSMSSendSave",
    path: "/InsertSMSSendSave",
    component: () => import("@/views/customer/InsertSMSSendSave.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "SendHistoryList",
    path: "/SendHistoryList",
    component: () => import("@/views/customer/SendHistoryList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "SendHistoryDetails",
    path: "/SendHistoryDetails",
    component: () => import("@/views/customer/SendHistoryDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "NoticeList",
    path: "/NoticeList",
    component: () => import("@/views/customer/NoticeList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "NoticeDetails",
    path: "/NoticeDetails",
    component: () => import("@/views/customer/NoticeDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertNotice",
    path: "/InsertNotice",
    component: () => import("@/views/customer/InsertNotice.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "FaqList",
    path: "/FaqList",
    component: () => import("@/views/customer/FaqList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "FaqDetails",
    path: "/FaqDetails",
    component: () => import("@/views/customer/FaqDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertFaq",
    path: "/InsertFaq",
    component: () => import("@/views/customer/InsertFaq.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InquiryList",
    path: "/InquiryList",
    component: () => import("@/views/customer/InquiryList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InquiryDetails",
    path: "/InquiryDetails",
    component: () => import("@/views/customer/InquiryDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertInquiry",
    path: "/InsertInquiry",
    component: () => import("@/views/customer/InsertInquiry.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ApiList",
    path: "/ApiList",
    component: () => import("@/views/common/ApiList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "apidetails",
    path: "/apidetails",
    component: () => import("@/views/common/api-details.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "insertapi",
    path: "/insertapi",
    component: () => import("@/views/common/insert-api.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "pagelist",
    path: "/pagelist",
    component: () => import("@/views/common/page-list.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "pagedetails",
    path: "/pagedetails",
    component: () => import("@/views/common/page-details.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "insertpage",
    path: "/insertpage",
    component: () => import("@/views/common/insert-page.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "codelist",
    path: "/codelist",
    component: () => import("@/views/common/code-list.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertMenu",
    path: "/InsertMenu",
    component: () => import("@/views/common/InsertMenu.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "MenuDetails",
    path: "/MenuDetails",
    component: () => import("@/views/common/MenuDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "ContentList",
    path: "/ContentList",
    component: () => import("@/views/common/ContentList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "ContentDetails",
    path: "/ContentDetails",
    component: () => import("@/views/common/ContentDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertContent",
    path: "/InsertContent",
    component: () => import("@/views/common/InsertContent.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "AdminList",
    path: "/AdminList",
    component: () => import("@/views/operation/AdminList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "AdminDetails",
    path: "/AdminDetails",
    component: () => import("@/views/operation/AdminDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertAdmin",
    path: "/InsertAdmin",
    component: () => import("@/views/operation/InsertAdmin.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "RoleList",
    path: "/RoleList",
    component: () => import("@/views/operation/RoleList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "InsertRole",
    path: "/InsertRole",
    component: () => import("@/views/operation/InsertRole.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "RoleDetails",
    path: "/RoleDetails",
    component: () => import("@/views/operation/RoleDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "DocumentList",
    path: "/DocumentList",
    component: () => import("@/views/operation/DocumentList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "DocumentDetails",
    path: "/DocumentDetails",
    component: () => import("@/views/operation/DocumentDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertDocument",
    path: "/InsertDocument",
    component: () => import("@/views/operation/InsertDocument.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "DictionaryList",
    path: "/DictionaryList",
    component: () => import("@/views/operation/DictionaryList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "DictionaryDetails",
    path: "/DictionaryDetails",
    component: () => import("@/views/operation/DictionaryDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertDictionary",
    path: "/InsertDictionary",
    component: () => import("@/views/operation/InsertDictionary.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "OrderTypeList",
    path: "/OrderTypeList",
    component: () => import("@/views/common/OrderTypeList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "OrderTypeDetails",
    path: "/OrderTypeDetails",
    component: () => import("@/views/common/OrderTypeDetails.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "InsertOrderType",
    path: "/InsertOrderType",
    component: () => import("@/views/common/InsertOrderType.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout2",
    },
  },
  {
    name: "OptionInfoList",
    path: "/OptionInfoList",
    component: () => import("@/views/common/OptionInfoList.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "About",
    path: "/about",
    // route level code-splitting, lazy-loaded
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "Editor",
    path: "/editor",
    // route level code-splitting, lazy-loaded
    component: () => import(/* webpackChunkName: "editor" */ "@/views/TinymceEditor.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
  {
    name: "Error",
    path: "/:pathMatch(.*)*",
    // route level code-splitting, lazy-loaded
    component: () => import(/* webpackChunkName: "pageNotFound" */ "../views/PageNotFound.vue"),
    meta: {
      authorized: false,
      layout: "ContentLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/**
 * Route 되기 전에 실행
 * 권한 체크는 DB 설정에 따라 동작하게 처리 한다.
 */
router.beforeEach((to, from, next) => {
  // to: 이동할 url에 해당하는 라우팅 객체
  if (
    to.matched.some(function (routeInfo) {
      // 권한이 있는지 없는지 결과를 돌려줌

      return false;
    })
  ) {
    // 권한이 없을 경우
    alert("Login Please!");
  } else {
    // 권한이 있을 경우
    console.log("routing success : '" + to.path + "'");
    next(); // 페이지 전환
  }
});

export default router;
