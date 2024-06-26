# الصاق افزونه کاربر

| CREATE USER ADDON |                   |
|-------------------|-------------------|
| API Permissions   | USER_ADDON_CREATE |
| OAuth Permissions | USER_ADDON_CREATE |
| Rate Limit        | Unlimited         |


## ریکوئست

```http request
POST https://api.divar.ir/v1/open-platform/addons/user/{{phone}}
x-access-token: {{access-token}}
x-api-key: {{api-key}}

{
    "widgets": {
        "widget_list": [
            {
                "widget_type": "SCORE_ROW",
                "data": {
                    "@type": "type.googleapis.com/widgets.ScoreRowData",
                    "title": "فنی",
                    "percentage_score": 80,
                    "score_color": "SUCCESS_PRIMARY",
                    "hasDivider": true,
                    "icon": {
                        "icon_name": "HISTORY",
                        "icon_color": "SUCCESS_PRIMARY"
                    },
                    "action": {
                        "type": "LOAD_WEB_VIEW_PAGE",
                        "fallback_link": "https://google.com/",
                        "payload": {
                            "@type": "type.googleapis.com/widgets.LoadWebViewPagePayload",
                            "url": "https://google.com/"
                        }
                    }
                }
            }
        ]
    },
    "notes": "test note",
    "phone": "09991234567",
    "categories": [],
    "management_permalink": "https://same-domain.com/manage/id",
    "ticket_uuid": "812d56e6-e44d-45e7-8932-f9acbd416999",
    "verification_cost": 124000,
    "semantic": {
        "national_id": "0023456789",
        "full_name": "علی علوی",
        "external_reference": "ref-id"
    },
    "semantic_sensitives": ["national_id"]
}
```

| Field                | Type     | Example                                | Description                                                                                             |
|----------------------|----------|----------------------------------------|---------------------------------------------------------------------------------------------------------|
| widgets              | array    | []                                     | مشاهده [ویجت‌های کنار دیوار](../widgets)                                                                |
| notes                | string   | "note"                                 | یادداشت دلخواه برای شما حداکثر یک کیلوبایت                                                              |
| phone                | string   | "09991234567"                          | آیدی کاربر متقاضی افزونه کاربر                                                                          |
| categories           | []string | []                                     | لیست دسته‌بندی‌هایی که افزونه روی آگهی‌های آن دسته‌ها به شکل خودکار الصاق گردد                          |
| management_permalink | string   | "https://same-domain.com/manage/id"    | لینک مدیریت افزونه کاربر که از صفحه «دیوار من» قابل دسترسی خواهد بود. این صفحه باید با OAuth محافظت شود |
| ticket_uuid          | string   | "812d56e6-e44d-45e7-8932-f9acbd416999" | مشاهده [بلیط پرداخت](../payment-ticket)                                                                 |
| verification_cost    | int32    | 124000                                 | هزینه انجام خدمت به ریال                                                                                |
| semantic             | object   | {}                                     | [اطلاعات معنایی](semantic.md)                                                                           |
| semantic_sensitives | []string | ["national_id"] | این مقادیر در در دیتابیس کنار دیوار به شکل مشوّش و غیرقابل بازگشت ذخیره میشوند و در لاگ‌ها نیز پیدا نیستند

> - داشتن اکسس توکن با درسترسی مربوطه برای الصاق این نوع افزونه الزامی است
> - برای الصاق افزونه‌آگهی روی همه دسته‌ها، کافیست لیست دسته‌بندی‌ها را خالی بگذارید.
> - در صورتی که بخواهید روی هیچ دسته‌بندی‌ای افزونه آگهی الصاق نشود، لازم است لیست ویجت‌ها خالی باشد

## ریسپانس

```json
{
    "id": "812d56e6-e44d-45e7-8932-f9acbd416999"
}
```

# حذف افزونه کاربر

برای حذف افزونه کاربر میتوان از ریکوئست زیر استفاده نمود:

```http request
DELETE https://api.divar.ir/v1/open-platform/addons/user/{{id}}
x-api-key: {{api-key}}
```

با در دست داشتن آیدی (uuid) افزونه کاربر متناظر میتوانید اقدام به حذف آن نمائید.
