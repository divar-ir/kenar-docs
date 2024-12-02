## ارسال پیام با چت‌بات [آزمایشی]

**نکته:** در حال حاضر برای استفاده از این امکان تستی باید درخواست تون رو در پنل به شکل تیکت ثبت کنید و در حال حاضر ممکنه مقداری زمان‌بر باشه فراهم شدن امکان تست اش براتون
<br>
به زودی این فرایند ساده‌سازی خواهد شد

### پیش‌نیاز ها:
1. اضافه کردن قابلیت چت‌بات به اپ شما که در حال حاضر به دلیل آزمایشی بودن توسط 
2. داشتن دسترسی `CHAT_BOT_SEND_MESSAGE` (در صورتی که در قسمت دسترسی ها در پنل همچین چیزی رو نمی‌بینید میتونید تیکت بزنید و دسترسی‌ش رو بگیرید)

حال کافی است به اندپوینت `https://api.divar.ir/v2/open-platform/chatbot-conversations/{conversation_id}/messages`  ریکوئست بزنید و پیامی که میخواهید ارسال کنید را در بدنه ریکوئست قراردهید 

مثال:

```http request
POST https://api.divar.ir/v2/open-platform/chatbot-conversations/{conversation_id}/messages
Content-Type: application/json
X-Api-Key: {your-api-key}

{
    "type": "TEXT",
    "text_message": "hello, World!"
}
```

```bash
curl --location 'https://api.divar.ir/v2/open-platform/chatbot-conversations/{conversation_id}/messages' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {your-api-key}' \
--data '{
    "type": "TEXT",
    "text_message": "hello, World!"
}'
```
