import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "open-banking-apis-v1.1/non-prod-uat-open-banking-apis",
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/partner-login",
          label: "Partner login",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Victoria",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/sync-card-prepaid",
          label: "Sync card prepaid",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/update-card-prepaid",
          label: "Update card prepaid",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SSMedia",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/get-ss-media-transaction-status",
          label: "Get SSMedia transaction status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/refund-ss-media-transaction",
          label: "Refund SSMedia transaction",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "HDI",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/hdi-result-callback",
          label: "HDI result callback",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/hdi-certificate-provision-callback",
          label: "HDI certificate provision callback",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "VJA",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/vja-booking-ticket-proxy",
          label: "VJA booking ticket proxy",
          className: "api-method x-amazon-apigateway-any-method",
        },
      ],
    },
    {
      type: "category",
      label: "Genesys",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/genesys-lookup-customer",
          label: "Genesys lookup customer",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "HDSS",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/get-latest-tn-cs",
          label: "Get latest TNCs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/clear-onboarding-prospect",
          label: "Clear onboarding prospect",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/initialize-hdss-onboarding",
          label: "Initialize HDSS onboarding",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/submit-onboarding-information",
          label: "Submit onboarding information",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/verify-onboarding-account",
          label: "Verify onboarding account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/activate-onboarding-account",
          label: "Activate onboarding account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/check-nfc-onboarding-status",
          label: "Check NFC onboarding status",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Campaigns",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/add-lucky-spin-turns",
          label: "Add lucky spin turns",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/get-mission-rewards",
          label: "Get mission rewards",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "IC Base",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/upload-chat-file",
          label: "Upload chat file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/receive-chat-message",
          label: "Receive chat message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/ic-base-webhook",
          label: "IC Base webhook",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Insider",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/insider-notification-webhook",
          label: "Insider notification webhook",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Mobifone",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/initialize-merchant-account",
          label: "Initialize merchant account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/confirm-merchant-account",
          label: "Confirm merchant account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-banking-apis-v1.1/delete-merchant-account",
          label: "Delete merchant account",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SKYFI",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/skyfi-event-callback",
          label: "SKYFI event callback",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "VNEID",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/verify-hdss-loan-bill-detail",
          label: "Verify HDSS loan bill detail",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/health-check",
          label: "Health check",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "HDSS-bill",
      items: [
        {
          type: "doc",
          id: "open-banking-apis-v1.1/hdss-check-bill-detail",
          label: "HDSS check bill detail",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
