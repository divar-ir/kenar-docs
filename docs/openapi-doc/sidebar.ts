import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi-doc/kenar-api",
    },
    {
      type: "category",
      label: "Addons",
      link: {
        type: "doc",
        id: "openapi-doc/addons",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/addons-delete-post-addon",
          label: "حذف افزونه از آگهی",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-create-business-addon",
          label: "افزودن افزونه جدید به آگهی‌های کسب‌و‌کار",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-delete-post-addon-2",
          label: "حذف افزونه از آگهی",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-delete-user-addon",
          label: "حذف افزونه کاربر",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-get-user-addons",
          label: "دریافت تمام افزونه‌های کاربر",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-create-post-addon-v-2",
          label: "افزودن افزونه جدید به آگهی",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-create-user-addon-v-2",
          label: "افزودن افزونه جدید به کاربر",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-get-user-addons-2",
          label: "دریافت تمام افزونه‌های کاربر",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/addons-create-user-addon-v-22",
          label: "افزودن افزونه جدید به کاربر",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Assets",
      link: {
        type: "doc",
        id: "openapi-doc/assets",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/assets-get-body-statuses",
          label: "دریافت گزینه‌های وضعیت بدنه موجود در دسته‌بندی‌های خودرو دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-brand-models",
          label: "دریافت مدل‌های برند در دسته‌بندی دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-categories",
          label: "دریافت دسته‌بندی‌های دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-cities",
          label: "دریافت شهرهای دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-colors",
          label: "دریافت رنگ‌ها در دسته‌بندی دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-districts",
          label: "دریافت مناطق دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-districts-2",
          label: "دریافت مناطق دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-internal-storages",
          label: "دریافت گزینه‌های حافظه داخلی موجود در دسته‌بندی‌های موبایل/تبلت/لپ‌تاپ دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-o-auth-scopes",
          label: "دریافت دامنه‌های OAuth کنار دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-permissions",
          label: "دریافت مجوزهای کنار دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-ram-memories",
          label: "دریافت گزینه‌های حافظه رم موجود در دسته‌بندی‌های موبایل/تبلت/لپ‌تاپ دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/assets-get-service-types",
          label: "دریافت انواع سرویس موجود در کنار دیوار",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ChatAPI",
      link: {
        type: "doc",
        id: "openapi-doc/chat-api",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/chat-api-chat-bot-send-message-5",
          label: "ارسال پیام به مکالمه ChatBot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/chat-api-chat-bot-send-message-4",
          label: "ارسال پیام به مکالمه ChatBot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/chat-api-generate-upload-token",
          label: "تولید توکن آپلود",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/chat-api-chat-bot-send-message-3",
          label: "ارسال پیام به مکالمه ChatBot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/chat-api-chat-bot-send-message",
          label: "ارسال پیام به مکالمه ChatBot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/chat-api-chat-bot-send-message-2",
          label: "ارسال پیام به مکالمه ChatBot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/chat-api-get-conversation",
          label: "دریافت مکالمه با شناسه آن",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/chat-api-conversation-send-message",
          label: "ارسال پیام به مکالمه",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      link: {
        type: "doc",
        id: "openapi-doc/events",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/events-register-event-subscription",
          label: "اشتراک در رویداد",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Finder",
      link: {
        type: "doc",
        id: "openapi-doc/finder",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/finder-get-post",
          label: "دریافت آگهی دیوار",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/finder-get-user-posts",
          label: "دریافت آگهی‌های کاربر",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/finder-get-user-2",
          label: "دریافت اطلاعات کاربر",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/finder-get-user",
          label: "دریافت اطلاعات کاربر",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/finder-search-post-v-2",
          label: "جستجو آگهی‌های دیوار با فیلترهایی",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Post",
      link: {
        type: "doc",
        id: "openapi-doc/post",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/post-get-post-stats",
          label: "دریافت آمارهای آگهی",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/post-get-image-upload-url",
          label: "دریافت URL آپلود تصویر",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/post-edit-post",
          label: "ویرایش آگهی",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "limited",
      link: {
        type: "doc",
        id: "openapi-doc/limited",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/payment-get-balance",
          label: "Payment_GetBalance",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/payment-reorder-post",
          label: "Payment_ReorderPost",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/payment-list-transactions",
          label: "Payment_ListTransactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/payment-get-transaction",
          label: "Payment_GetTransaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi-doc/payment-get-post-pricing",
          label: "دریافت هزینه سرویس",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "PaymentTicket",
      link: {
        type: "doc",
        id: "openapi-doc/payment-ticket",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/payment-ticket-validate",
          label: "اعتبارسنجی بلیط پرداخت",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Semantic",
      link: {
        type: "doc",
        id: "openapi-doc/semantic",
      },
      items: [
        {
          type: "doc",
          id: "openapi-doc/semantic-create-post-semantic",
          label: "ایجاد اطلاعات معنایی آگهی",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/semantic-delete-user-semantic",
          label: "حذف اطلاعات معنایی کاربر",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi-doc/semantic-create-user-semantic",
          label: "ایجاد اطلاعات معنایی کاربر",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi-doc/semantic-delete-user-semantic-2",
          label: "حذف اطلاعات معنایی کاربر",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi-doc/semantic-create-user-semantic-2",
          label: "ایجاد اطلاعات معنایی کاربر",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
