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
    "from": {
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
    "to": {
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
