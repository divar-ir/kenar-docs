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
POST https://api.divar.ir/expermiental/open-platform/chatbot-conversations/{conversation_id}/messages
Content-Type: application/json
X-Api-Key: {your-api-key}

{
    "type": "TEXT",
    "text_message": "Hello, World!"
}
```

#### مثال

در اینجا یک مثال از ارسال پیام با استفاده از `curl` آمده است:

```bash
curl --location 'https://api.divar.ir/v2/open-platform/chatbot-conversations/{conversation_id}/messages' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {your-api-key}' \
--data '{
    "type": "TEXT",
    "text_message": "hello, World!"
}'
```
