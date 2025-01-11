## مکالمه با چت‌بات (آزمایشی)

### پیش‌نیازها

برای استفاده ازاین امکان، نیاز به موارد زیر دارید:

1. درخواست فعال‌سازی چت‌بات از طریق ثبت تیکت در پنل کنار دیوار
2. تنظیم "آدرس ارسال رویدادها" در پنل کنار برای دریافت پیام‌های کاربر
3. دسترسی `CHAT_BOT_SEND_MESSAGE` برای ارسال پیام (در صورت نیاز از طریق تیکت درخواست دهید)

### دریافت پیام‌های کاربر

پس از تنظیم آدرس ارسال رویدادها، پیام‌های کاربر به صورت درخواست POST به آدرس شما ارسال می‌شود:

```http request
POST https://{{new_events_url}}
Authorization: {{identification_key}}
Content-Type: application/json

{
    "type": "NEW_CHATBOT_MESSAGE",
    "new_chatbot_message": {
        "message_text": "hello world",
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

### ارسال پیام به کاربر

برای پاسخ دادن به کاربر، از API زیر استفاده کنید. توجه داشته باشید که برای استفاده از این قابلیت، باید دسترسی `CHAT_BOT_SEND_MESSAGE` را داشته باشید. در صورتی که این دسترسی را ندارید، می‌توانید از طریق ثبت تیکت در پنل کنار دیوار آن را درخواست کنید.

```http request
POST https://api.divar.ir/experimental/open-platform/chatbot-conversations/{conversation_id}/messages
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

### Icons
[آیکون‌ها][آیکون‌ها] موجود برای دکمه‌ها


#### مثال

در اینجا یک مثال از ارسال پیام با استفاده از `curl` آمده است:

```bash
curl --location 'https://api.divar.ir/experimental/open-platform/chatbot-conversations/{conversation_id}/messages' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {your-api-key}' \
--data '{
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
            "icon": "REAL_STATE",
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
}'
```

[آیکون‌ها]: https://www.figma.com/design/ZhhSihwKTjiER1VUDX4ovh/%F0%9F%93%92-Kenar-Docs-(WIP)?node-id=1501-2225&p=f

