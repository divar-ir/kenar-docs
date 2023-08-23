# الصاق افزونه آگهی

| Create Post AddOn |               |
|-------------------|---------------|
| Permissions       | ADD_ON_CREATE |
| Default Rate      | 100 R/WEEK    |

---

برای الصاق افزونه روی آگهی لازم است
API
زیر صدا زده شود. برای آگاهی از نحوه ساخت ویجت‌ها و قراردادن لینک در آنها، میتوانید به [قسمت ویجت‌ها](../widgets/index.md) مراجعه نمائید.

ریکوئست

```http request
POST https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}
Content-Type: application/json
x-api-key: {{apikey}}
X-Debug-Token: {{debug_token}}

{
    "widgets": {
        "widget_list": [
            {
                "widget_type": "LEGEND_TITLE_ROW",
                "data": {
                    "@type": "type.googleapis.com/widgets.LegendTitleRowData",
                    "title": "کارشناسی دمپایی",
                    "subtitle": "کارشناسی",
                    "has_divider": true,
                    "image_url": "logo"
                }
            }
        ]
    }
}
```

ریسپانس

```json
{
    "id": "123"
}
```

- برای حذف افزونه از آگهی میتوانید آیدی آن را نگهداری کرده و در آینده از API خذف افزونه استفاده نمائید
