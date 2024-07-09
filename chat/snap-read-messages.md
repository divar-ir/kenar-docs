# خواندن پیام مکالمه تا زمان مشخص
| GET CONVERSATION  |                   |
|-------------------|-------------------|
| API Permissions   | CHAT_READ_CONVERSATION |
| OAuth Permissions | CHAT_CONVERSATION_READ.$conversation_id:$time_seconds_unix |

# دسترسی oauth
این API با استفاده از اسکوپ مشخص شده بالا قابل دسترس است. در قسمت resource_id باید ایدی مکالمه مورد نظر و [زمان unix](https://en.wikipedia.org/wiki/Unix_time)(دسترسی پیام های مکالمه تا این زمان به شما داده می‌شود) که با استفاده از `:` جدا شده است قرار دهید به طورمثال اگر ایدی مکالمه `1ed9d49a-ceac-4eee-b82e-920fa5875ad8` باشد و زمان با فرمت گفته شده `1720526424` اسکوپ مورد نظر `CHAT_CONVERSATION_READ.1ed9d49a-ceac-4eee-b82e-920fa5875ad8:1720526424` خواهد بود.
*نکته*: زمان گذاشته شده در اسکوپ نمی‌تواند بزرگتر مساوی زمانی که مجوز را از کاربر طبق فرایند احراز میگرید باشد در صورت رعایت نشدن این شرط فرایند با خطا مواجه می‌شود.

# رکوئست

```http request
GET https://api.divar.ir/v1/open-platform/chat/conversations/{{conversation_id}}
x-access-token: {{access-token}}
x-api-key: {{api-key}}
```

# نمونه پاسخ
```json5
{
    "conversation_info": {
        "title": "آئودی Q5",
        "post_token": "gZ8BFtNV"
    },
    "messages": [
        {
            "id": "8bab967e-33e4-11ef-8bd1-9e4e3dbb641b",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "BUYER"
            },
            "type": "TEXT",
            "sent_at": "2024-06-26T17:50:16.061Z",
            "text": "سلام"
        },
        {
            "id": "9b5c5766-33e4-11ef-a8f6-aad3e348e738",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-06-26T17:50:42.385Z",
            "text": "سلام"
        },
        {
            "id": "a54d5d7e-33e9-11ef-961f-2a6965fa4cd4",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "BOT"
            },
            "type": "TEXT",
            "sent_at": "2024-06-26T18:26:46.548Z",
            "text": "Ansjsj"
        },
        {
            "id": "4f6d956c-33ea-11ef-8fe6-361eecbcedf6",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-06-26T18:31:31.972Z",
            "text": "درست شد"
        },
        {
            "id": "5161c37a-33ea-11ef-8fe6-361eecbcedf6",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-06-26T18:31:35.250Z",
            "text": "هورااااا"
        },
        {
            "id": "5729228a-33ea-11ef-8fe6-361eecbcedf6",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-06-26T18:31:44.945Z",
            "text": "چت چرا گیف نداره"
        },
        {
            "id": "3e88a7a8-3d06-11ef-beec-ca1059ce56c8",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-07-08T08:44:10.001Z",
            "text": "یه سری چرت و پرت چون میخوام تست کنم"
        },
        {
            "id": "41638d9e-3d06-11ef-beec-ca1059ce56c8",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-07-08T08:44:14.791Z",
            "text": "ببخشید دانیال تست منی"
        },
        {
            "id": "41ee7d96-3d06-11ef-beec-ca1059ce56c8",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-07-08T08:44:15.702Z",
            "text": ":دی"
        },
        {
            "id": "8a42d2b0-3dea-11ef-a416-a2801e203ff0",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-07-09T11:58:22.305Z",
            "text": "دسترسیش درسته؟"
        },
        {
            "id": "90423458-3dea-11ef-a416-a2801e203ff0",
            "conversation_id": "1ed9d49a-ceac-4eee-b82e-920fa5875ad8",
            "sender": {
                "type": "SELLER"
            },
            "type": "TEXT",
            "sent_at": "2024-07-09T11:58:32.367Z",
            "text": "اره درسته"
        }
    ]
}
```
