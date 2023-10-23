### ارسال پیام در مکالمه

| CHAT SEND MESSAGE |                                    |
| ----------------- | ---------------------------------- |
| API Permissions   | CHAT_SEND_MESSAGE_OAUTH            |
| OAuth Permissions | CHAT_SEND_MESSAGE_OAUTH            |
| Resource ID       | BASE64(user_id:post_token:peer_id) |

نمونه برای پارامترهای ارسالی

```
user_id = e9ba8a81-9583-4f7c-af54-b07df089d971
post_token = AZf3Uqr3
peer_id = 1697004f-e902-44c2-bbbe-bf8e20d54bff

resource_id = BASE64(e9ba8a81-9583-4f7c-af54-b07df089d971:AZf3Uqr3:1697004f-e902-44c2-bbbe-bf8e20d54bff) = ZTliYThhODEtOTU4My00ZjdjLWFmNTQtYjA3ZGYwODlkOTcxOkFaZjNVcXIzOjE2OTcwMDRmLWU5MDItNDRjMi1iYmJlLWJmOGUyMGQ1NGJmZg==

Scope:
CHAT_SEND_MESSAGE_OAUTH__ZTliYThhODEtOTU4My00ZjdjLWFmNTQtYjA3ZGYwODlkOTcxOkFaZjNVcXIzOjE2OTcwMDRmLWU5MDItNDRjMi1iYmJlLWJmOGUyMGQ1NGJmZg==
```

نمونهٔ درخواست ارسالی برای ارسال پیام در یک چت مشخص

```http request
POST https://api.divar.ir/v2/open-platform/chat/conversation
Content-Type: application/json
x-api-key: {{apikey}}
x-access-token: {{access_token}}

{
    "user_id": "شناسهٔ کاربری که می خواهیم پیامی از سمت او وارد مکالمه کنیم",
    "post_token": "توکن آگهی مورد مکالمه",
    "peer_id": "شناسهٔ طرف مقابل در مکالمه",
    "type": "TEXT",
    "message": "متن پیام",
    "sender_btn": {
        "action": "LINK",
        "data": {
            "icon_name": "نام آیکون مورد نظر برای این دکمه",
            "extra_data": {
                "your_custom_key":"اطلاعاتی که در ادامه هنگام کلیک روی دکمه نیاز داریم"
            },
            "caption": "متن دکمهٔ زیر پیام برای طرف فرستنده"
        }
    },
    "receiver_btn": {
        "action": "LINK",
        "data": {
            "icon_name": "نام آیکون مورد نظر برای این دکمه",
            "extra_data": {
                "your_custom_key":"اطلاعاتی که در ادامه هنگام کلیک روی دکمه نیاز داریم"
            },
            "caption": "متن دکمهٔ زیر پیام برای طرف گیرنده"
        }
    }
}
```

نمونهٔ پاسخ

```json
{
  "status": 200,
  "message": "success"
}
```

## کلیک کاربر روی دکمهٔ درج شده زیر پیام

در صورتی که کاربر روی دکمه‌ای که زیر پیام اضافه کرده‌اید کلیک کند، ابتدا دیوار یک درخواست به آدرس که در ابتدا تنظیم کرده‌اید می‌زند. [توضیحات بیشتر](/panel/)
به همراه این درخواست موارد زیر ارسال خواهند شد و سپس کاربر به آدرسی که در دکمهٔ مورد نظر درج شده‌است هدایت می‌شود.

نمونهٔ محتوای ارسالی درخواست از سمت دیوار

```JSON
{
    "extra_data": {
        "provider_data": {"your_custom_key":"اطلاعاتی که در درخواست ارسال پیام در مرحلهٔ قبل فرستادید"},
        "location": {
            "latitude": 35.683374373999364,
            "longitude": 51.34850978851319
        }    
    },
    "callback_url": "آدرسی که کاربر پس از انجام فرایند در سرویس شما باید به آن هدایت شود",
    "post_token":   "توکن آگهی",
    "user_id":      "شناسهٔ کسی که روی لینک کلیک کرده یا فرایند را شروع کرده",
    "peer_id":      "شناسهٔ طرف مقابل مکالمه",
    "Supplier": {
        "id": "شناسهٔ کاربر فروشنده (صاحب آگهی)"
    },
    "demand": {
        "id": "شناسهٔ کاربر خریدار"
    }
}

```
> در صورتی که پیام از نوع موقعیت مکانی باشد اطلاعات مرتبط به آن موقعیت در مقدار `location` قرار می‌گیرد.
در پاسخ به این درخواست دیوار شما باید چنین پاسخی به دیوار بدهید تا کاربر به آدرس مورد نظر شما هدایت شود.

```
{
"status": "http status code (200, 400, ...)",
"message": "string",
"url": "https://yourapp.com/divar/will/redirect/user/here"
}
```

برای گرفتن شماره تماس کاربر می‌توانید از [احراز باز](/oauth/) و توضیحات [درخواست شماره تماس](oauth/get_user.md) استفاده کنید.
