# ساخت و بروزرسانی افزونه کاربر

| CREATE USER ADDON |                   |
|-------------------|-------------------|
| OAuth Permissions | USER_ADDON_CREATE |


## ریکوئست

```http request
POST https://open-api.divar.ir/v2/open-platform/addons/users/{{divar-user-id}}
Authorization: Bearer {{access-token}}
x-api-key: {{api-key}}

{
    "widgets": [
        {
            "description_row": {
                "text": "این یک دسکریپشن رو هست",
                "has_divider": false,
                "expandable": false,
            }
            "semantic_paths": {
              "a sample sentence": "text"
            }
        },
        {
          "event_row": {
            "title": "یه تایتل مناسب",
            "subtitle": "یه زیر تایتل مناسب تر",
            "label": "یه لیبل زیبا",
            "image_id": "someuuid.jpg",
            "has_divider": true,
            "icon_name": "ADD"
          },
          "semantic_paths": {
            "user_face": "image_id"
          }
        }
    ],
    "categories": [],
    "ticket_uuid": "812d56e6-e44d-45e7-8932-f9acbd416999",
    "cost": 124000,
    "semantic": {
        "identity_verification_result": "FACE_AND_ID_MATCHED"
    }
}
```

| Field                | Type     | Example                                | Description                                                                                             |
|----------------------|----------|----------------------------------------|---------------------------------------------------------------------------------------------------------|
| widgets              | array    | []                                     | مشاهده [ویجت‌های کنار دیوار](../widgets)                                                                |
| phone                | string   | "09991234567"                          | آیدی کاربر متقاضی افزونه کاربر                                                                          |
| categories           | string[] | ["light"] or []                                     | لیست دسته‌بندی‌هایی که افزونه روی آگهی‌های آن دسته‌ها به شکل خودکار الصاق گردد                          |
| ticket_uuid (optional)         | string   | "812d56e6-e44d-45e7-8932-f9acbd416999" | مشاهده [بلیط پرداخت](../payment-ticket)                                                                 |
| cost (optional)   | int32    | 124000                                 | هزینه انجام خدمت به ریال                                                                                |
| semantic             | object   | {}                                     | [اطلاعات معنایی](/semantic/semantic_data.md)                                                                           |

> - داشتن اکسس توکن با درسترسی مربوطه برای الصاق این نوع افزونه الزامی است
> - برای الصاق افزونه‌آگهی روی همه دسته‌هایی که اپ مربوطه در آن نمایش داده می‌شود، کافیست لیست دسته‌بندی‌ها را خالی بگذارید.
- با استفاده از این API می‌توانید افزونه کاربر را بروزرسانی نیز بکنید. افزونه کاربر به روز شده بر روی پست های آینده کاربر اعمال می‌شود.

## ریسپانس

```json
{
    "id": "812d56e6-e44d-45e7-8932-f9acbd416999"
}
```

# حذف افزونه کاربر

برای حذف کامل افزونه کاربر میتوان از ریکوئست زیر استفاده نمایید:

```http request
DELETE https://open-api.divar.ir/v1/open-platform/addons/user/{{id}}
x-api-key: {{api-key}}
```

با در دست داشتن آیدی (uuid) افزونه کاربر متناظر میتوانید اقدام به حذف آن نمائید.

> برای بروزرسانی از اندپوینت بروزرسانی معرفی شده استفاده کنید.
