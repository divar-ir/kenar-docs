### دسترسی خواندن پیام‌های یک مکالمه

| CHAT READ CONVERSATION |                                    |
| ---------------------- | ---------------------------------- |
| API Permissions        | CHAT_READ_CONVERSATION             |
| OAuth Permissions      | CHAT_READ_CONVERSATION             |
| Resource ID            | BASE64(user_id:post_token:peer_id) |

نمونه برای پارامترهای ارسالی

```
user_id = e9ba8a81-9583-4f7c-af54-b07df089d971
post_token = AZf3Uqr3
peer_id = 1697004f-e902-44c2-bbbe-bf8e20d54bff

resource_id = BASE64(e9ba8a81-9583-4f7c-af54-b07df089d971:AZf3Uqr3:1697004f-e902-44c2-bbbe-bf8e20d54bff) = ZTliYThhODEtOTU4My00ZjdjLWFmNTQtYjA3ZGYwODlkOTcxOkFaZjNVcXIzOjE2OTcwMDRmLWU5MDItNDRjMi1iYmJlLWJmOGUyMGQ1NGJmZg==

Scope:
CHAT_READ_CONVERSATION__ZTliYThhODEtOTU4My00ZjdjLWFmNTQtYjA3ZGYwODlkOTcxOkFaZjNVcXIzOjE2OTcwMDRmLWU5MDItNDRjMi1iYmJlLWJmOGUyMGQ1NGJmZg==
```

نمونهٔ درخواست ارسالی برای گرفتن مکالمات یک چت مشخص

```http request
GET https://api.divar.ir/v1/open-platform/chat/conversation-messages?user_id={{user_id}}&peer_id={{peer_id}}&post_token={{post_token}} 
Content-Type: application/json
x-api-key: {{apikey}}
x-access-token: {{access_token}}
```

نمونهٔ پاسخ

```json
{
    "messages": [
        {
            "id": "",
            "type": "TEXT",
            "data": {
                "text": ""
            },
            "from": {
                "id": "",
                "is_supply": bool
            },
            "to": {
                "id": "",
                "is_supply": bool
            },
            "sent_at": ""
        },
        ...
    ]
}
```

| Parameter  | Description |
| ---------- | ----------- |
| id  | آیدی پیام  |
| type  | تایپ پیام  |
| data__text  | متن پیام  |
| from__id  | آیدی کاربری که پیام را فرستاده است  |
| from__is_supply  | اگر درست باشد فرستنده آگهی گذار است  |
| to__id  | آیدی کاربری که پیام را دریافت می‌کند  |
| to__is_supply  | اگر درست باشد گیرنده آگهی گذار است  |
| sent_at  |  زمان فرستاده شدن پیام  |
