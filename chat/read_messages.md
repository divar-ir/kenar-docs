### دسترسی خواندن پیام‌های یک چت

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
            "sender": {
                "id": "",
                "is_supply": bool
            },
            "receiver": {
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


### دسترسی خواندن پیام‌های تمام مکالمات یک آگهی

| CHAT READ POST CONVERSATIONS |                                      |
| ---------------------------- | -------------------------------------|
| API Permissions              | CHAT_READ_POST_CONVERSATIONS         |
| OAuth Permissions            | CHAT_READ_POST_CONVERSATIONS         |
| Resource ID                  | post_token                           |


بعد از گرفتن دسترسی خواندن پیام‌ها، با صدا زدن این
API
میتوانید آن را فعال کنید. توجه شود که برای صدا زدن این
API
کلید
API
شما باید
CHAT_SET_NOTIFY_POST_CONVERSATIONS
دسترسی را داشته باشد.

```http request
POST https://api.divar.ir/v1/open-platform/notify/chat/post-conversations
Content-Type: application/json
x-api-key: {{apikey}}
x-access-token: {{access_token}}

{
    "post_token": "توکن آگهی",
    "endpoint": "آدرسی که پیام‌ها به آن فرستاده می‌شوند",
    "identification_key": "کلید احراز منبع درخواست‌ها"
}
```

پس از فعال سازی، هر پیامی که در یکی از مکالمات مربوط به آگهی داده شود، در قالب یک ریکوئست POST به آدرس مشخص شده در پارامتر endpoint با هدر 
Authorization: {{ identification_key }}
فرستاده می‌شود. کاربرد این هدر همانند Divar Identification Key می‌باشد.
ریکوئست:

```http
POST {{ endpoint }}
Content-Type: application/json
authorization: {{ identification_key }}

{
  "payload": {
    "data": {
      "text": ""
    },
    "sender": {
      "id": "",
      "is_supply": bool
    },
    "id": "",
    "metadata": {
      "category": "",
      "post_token": "",
      "title": ""
    },
    "sent_at": "",
    "receiver": {
      "id": "",
      "is_supply": bool
    },
    "type": "TEXT"
  },
  "timestamp": "",
  "type": "CHAT_MESSAGE"
}
```

| Parameter  | Description |
| ------------- | ------------- |
| type  | تایپ پیلود   |
| timestamp  |  زمان فرستاده شدن پیلود  |
| payload__id  | آیدی پیام  |
| payload__type  | تایپ پیام  |
| payload__data__text  | متن پیام  |
| payload__from__id  | آیدی کاربری که پیام را فرستاده است  |
| payload__from__is_supply  | اگر درست باشد فرستنده آگهی گذار است  |
| payload__to__id  | آیدی کاربری که پیام را دریافت می‌کند  |
| payload__to__is_supply  | اگر درست باشد گیرنده آگهی گذار است  |
| payload__metadata__post_token  | توکن آگهی مربوطه  |
| payload__metadata__category  | دسته‌بندی آگهی مربوطه  |
| payload__metadata__title  | عنوان آگهی مربوطه  |
| payload__sent_at  |  زمان فرستاده شدن پیام  |
