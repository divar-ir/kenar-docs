## ارسال پیام با چت‌بات [آزمایشی]

**نکته:** فعلاً برای استفاده از این امکان تستی باید درخواست خود رو در قالب تیکت در پنل کنار ثبت کنید تا امکان تست این قابلیت برای شما فعال شود.
<br>
به زودی این فرایند ساده‌سازی خواهد شد.

### پیش‌نیاز ها:
1. اضافه کردن قابلیت چت‌بات به اپ شما که فعلاً به دلیل آزمایشی بودن توسط ادمین انجام می‌شود.
2. داشتن دسترسی `CHAT_BOT_SEND_MESSAGE` (در صورتی که در قسمت دسترسی‌ها در پنل چنین چیزی نمی‌بینید می‌توانید تیکت بزنید و دسترسی بگیرید)

حال کافی است به اندپوینت `https://api.divar.ir/v2/open-platform/chatbot-conversations/{conversation_id}/messages`  ریکوئست بزنید و پیامی که میخواهید ارسال کنید را در بدنهٔ ریکوئست قراردهید 

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
