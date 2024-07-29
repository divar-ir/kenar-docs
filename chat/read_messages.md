## دسترسی خواندن در لحظه پیام‌های تمام مکالمات یک آگهی (آزمایشی)
- SCOPE: CHAT_POST_CONVERSATIONS_READ
- IDENTIFIER: POST_TOKEN


بعد از گرفتن دسترسی خواندن پیام‌ها، با صدا زدن این
API
دسترسی خود را ثبت کنید:

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

در نهایت برای فعالسازی نهایی، از طریق تیکت در پنل کنار درخواست خود را ثبت کنید.


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
| payload__sender__id  | آیدی کاربری که پیام را فرستاده است  |
| payload__sender__is_supply  | اگر درست باشد فرستنده آگهی گذار است  |
| payload__receiver__id  | آیدی کاربری که پیام را دریافت می‌کند  |
| payload__receiver__is_supply  | اگر درست باشد گیرنده آگهی گذار است  |
| payload__metadata__post_token  | توکن آگهی مربوطه  |
| payload__metadata__category  | دسته‌بندی آگهی مربوطه  |
| payload__metadata__title  | عنوان آگهی مربوطه  |
| payload__sent_at  |  زمان فرستاده شدن پیام  |