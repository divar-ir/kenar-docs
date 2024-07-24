# لیست افزونه‌های آگهی

| List Post AddOn |     |
|-----------------|-----|
| Permissions     | N/A |
| Default Rate    | N/A |

---

برای دریافت افزونه‌های یک آگهی میتوانید از فانکشن زیر استفاده کنید.

ریکوئست

```http request
GET https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}
Content-Type: application/json

```

ریسپانس

```json5
{
    "addons": [
        {
            "meta_data": {
                "id": "406597",
                "app": {
                    "slug": "karnameh"
                },
                "created_at": "2023-08-11T02:00:14.669638Z"
            },
            "token": "AZJXXtlr",
            "widgets": {
                "widget_list": [
                    {
                        "widget_type": "LEGEND_TITLE_ROW",
                        "data": {
                            "@type": "type.googleapis.com/widgets.LegendTitleRowData",
                            "title": "اعزام فوری کارشناس در 30 دقیقه",
                            "has_divider": true,
                            "image_url": "https://s100.divarcdn.com/static/images/open-platform/MzQv3t1oQUPhk7oR5rg4aA.jpg"
                        }
                    }
                ]
            }
        },
        /// ...
    ]
}
```
