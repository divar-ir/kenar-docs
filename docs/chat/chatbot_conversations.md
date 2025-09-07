# مکالمه با چت‌بات (آزمایشی)

### پیش‌نیازها

برای استفاده ازاین امکان، نیاز به موارد زیر دارید:

1. تنظیم "آدرس ارسال رویدادها" در پنل کنار برای دریافت پیام‌های کاربر

**چت‌بات برنامه شما در لینکی به فرم `https://divar.ir/chat/addon_{your_app_slug}` در دسترس قرار دارد**

## راه‌اندازی چت‌بات از نقاط تماس

چت‌بات شما می‌تواند از نقاط تماس مختلف دیوار راه‌اندازی شود. برای فعال‌سازی این قابلیت:

1. در پنل کنار، به بخش «نقاط تماس» برنامه خود مراجعه کنید
2. برای هر نقطه تماس، عمل «شروع چت‌بات» (START_CHAT_BOT) را فعال کنید

### پیام شروع از نقاط تماس

هنگام راه‌اندازی چت‌بات از نقاط تماس مختلف، یک پیام شروع خودکار با فرمت زیر ارسال می‌شود:

#### نقاط تماس جدید:
- **آگهی من (MY_POST)**: <code dir="ltr">/start MY_POST &#123;post_token&#125;</code>
- **دیوار من (MY_DIVAR)**: <code dir="ltr">/start MY_DIVAR</code>
- **پنل حرفه‌ای (DIVAR_PRO)**: <code dir="ltr">/start DIVAR_PRO</code>
- **چت (CHAT)**: <code dir="ltr">/start CHAT &#123;conversation_id&#125;</code>
- **آگهی تقاضا (DEMAND_POST)**: <code dir="ltr">/start DEMAND_POST &#123;post_token&#125;</code>

:::note توجه
در صورتی که شناسه آگهی در دسترس نباشد، فقط نام نقطه تماس ارسال می‌شود. مثلاً: <code dir="ltr">/start MY_DIVAR</code>
:::

### دریافت پیام‌های کاربر

پس از تنظیم آدرس ارسال رویدادها، پیام‌های کاربر به صورت درخواست POST به آدرس شما ارسال می‌شود:

```http request
POST https://{{new_events_url}}
Authorization: {{identification_key}}
Content-Type: application/json

{
    "type": "NEW_CHATBOT_MESSAGE",
    "new_chatbot_message": {
        "text": "hello world",
        "id": {{message_id}},
        "conversation": {
            "id": {{conversation_id}},
            "type": "BOT",
        },
        "sender": {
            "type": "HUMAN"
        },
        "type": "TEXT",
        "sent_at": 1729429926140000
    }
}
```

### ارسال پیام در مکالمه ایجاد شده (با در دست داشتن conversation id)

برای پاسخ دادن به کاربر در شرایطی که `conversation_id` را در اختیار دارید، می‌توانید از API زیر استفاده کنید. توجه داشته باشید که برای استفاده از این قابلیت، باید دسترسی `CHAT_BOT_SEND_MESSAGE` را داشته باشید.


```http request
POST https://open-api.divar.ir/v1/open-platform/chat/bot/conversations/{conversation_id}/messages
Content-Type: application/json
X-Api-Key: {your-api-key}

{
  "type": "TEXT",
  "text_message": "hello, World!",
  "buttons": {
    "rows": [
      {
        "buttons": [
          {
            "action": {
              "open_direct_link": "آدرس مورد نظر برای باز شدن بعد از کلیک"
            },
            "icon_name": "REAL_STATE",
            "caption": "متن دکمه"
          },
          {
            "action": {
              "open_server_link": {
                "data": {
                  "my_key_1": "value",
                  "my_key_2": "value2"
                }
              }
            },
            "icon": "HOME",
            "caption": "متن دکمه"
          }
        ]
      }
    ]
  }
}
```
### ارسال پیام مستقیم به کاربر
در این روش با در اختیار داشتن شناسه یکتا کاربر (user_id) و اخذ اجازه کاربر در فرایند OAuth می‌توانید بدون نیاز به `conversation_id` به کاربر پیام ارسال کنید.
> - در این روش شما قابلیت این را دارید که مکالمه را از سمت چت‌بات شروع کنید.
> - جهت دریافت اطلاعات بیشتر در مورد `user_id` [اینجا](../oauth/get_user.md) را مطالعه کنید.

| Authorization Level | Required Scope             |
|---------------------|----------------------------|
| User (OAuth)        | CHAT_BOT_USER_MESSAGE_SEND |

```http request
POST https://open-api.divar.ir/v1/open-platform/chat/bot/users/{user_id}/messages
Content-Type: application/json
X-Api-Key: {your-api-key}
Authorization: Bearer {your-access-token}

{
  "type": "TEXT",
  "text_message": "hello, World!",
  "buttons": {
    "rows": [
      {
        "buttons": [
          {
            "action": {
              "open_direct_link": "آدرس مورد نظر برای باز شدن بعد از کلیک"
            },
            "icon_name": "REAL_STATE",
            "caption": "متن دکمه"
          },
          {
            "action": {
              "open_server_link": {
                "data": {
                  "my_key_1": "value",
                  "my_key_2": "value2"
                }
              }
            },
            "icon": "HOME",
            "caption": "متن دکمه"
          }
        ]
      }
    ]
  }
}
```


### Icons
[آیکون‌ها][آیکون‌ها] موجود برای دکمه‌ها

[آیکون‌ها]: https://www.figma.com/design/ZhhSihwKTjiER1VUDX4ovh/%F0%9F%93%92-Kenar-Docs-(WIP)?node-id=1501-2225&p=f

