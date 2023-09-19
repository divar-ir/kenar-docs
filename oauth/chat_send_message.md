### ارسال پیام در مکالمه

| CHAT SEND MESSAGE |                     |
|-----------------------|---------------------|
| API Permissions       | CHAT_SEND_MESSAGE_OAUTH       |
| OAuth Permissions     | CHAT_SEND_MESSAGE_OAUTH |
| Resource ID           | BASE64(user_id:post_token:peer_id) |

مثال از اسکوپ
```
user_id = e9ba8a81-9583-4f7c-af54-b07df089d971
post_token = AZf3Uqr3
peer_id = 1697004f-e902-44c2-bbbe-bf8e20d54bff

resource_id = BASE64(e9ba8a81-9583-4f7c-af54-b07df089d971:AZf3Uqr3:1697004f-e902-44c2-bbbe-bf8e20d54bff) = ZTliYThhODEtOTU4My00ZjdjLWFmNTQtYjA3ZGYwODlkOTcxOkFaZjNVcXIzOjE2OTcwMDRmLWU5MDItNDRjMi1iYmJlLWJmOGUyMGQ1NGJmZg==

Scope:
CHAT_SEND_MESSAGE_OAUTH__ZTliYThhODEtOTU4My00ZjdjLWFmNTQtYjA3ZGYwODlkOTcxOkFaZjNVcXIzOjE2OTcwMDRmLWU5MDItNDRjMi1iYmJlLWJmOGUyMGQ1NGJmZg==
```

با استفاده از access_token می‌توانید در یک مکالمه پیام ارسال کنید. کافیست رکوئست زیر را بزنید.
```http request
POST https://api.divar.ir/v2/open-platform/chat/conversation
Content-Type: application/json
x-api-key: {{apikey}}
x-access-token: {{access_token}}

{
    "user_id": "",
    "post_token": "",
    "peer_id": "",
    "type": "TEXT",
    "message": "Hello World!",
    "sender_btn": {
        "action": "LINK",
        "data": {
            "icon_name": "icon",
            "extra_data": {},
            "caption": "It's caption"
        }
    },
    "receiver_btn": {
        "action": "LINK",
        "data": {
            "icon_name": "icon",
            "extra_data": {},
            "caption": "It's caption"
        }
    }
}
```

ریسپانس

```json
{
    "status": 200,
    "message": "success"
}
```
