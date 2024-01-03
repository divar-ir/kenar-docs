### دسترسی خواندن پیام‌های تمام مکالمات یک آگهی

| CHAT SEND MESSAGE |                                                 |
| ----------------- | ------------------------------------------------|
| API Permissions   | CHAT_READ_POST_CONVERSATIONS                    |
| OAuth Permissions | CHAT_READ_POST_CONVERSATIONS                    |
| Resource ID       | post_token                                      |


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
POST https://api.divar.ir/v2/open-platform/chat/conversation
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

}
```