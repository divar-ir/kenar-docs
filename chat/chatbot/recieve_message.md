## دریافت پیام‌های چت‌بات [آزمایشی]

**نکته:** در حال حاضر برای استفاده از این امکان تستی باید درخواست تون رو در پنل به شکل تیکت ثبت کنید و در حال حاضر ممکنه مقداری زمان‌بر باشه فراهم شدن امکان تست اش براتون
<br>
به زودی این فرایند ساده‌سازی خواهد شد

### پیش‌نیاز ها:
1. قراردادن مقدار `آدرس ارسال رویدادها` به دامنه ای که میخواهید پیام ها به آن ارسال شود

پیام‌ها با به شکل ریکوئست پست به دامنه مشخص شده با فرمت قرارداده‌شده ارسال می‌شود

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
