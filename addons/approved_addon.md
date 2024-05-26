### درج افزونه تأیید شده

| CREATE APPROVED ADDON |                     |
|-----------------------|---------------------|
| API Permissions       | ADD_ON_CREATE       |
| OAuth Permissions     | POST_ADDON_CREATE |
| Resource ID           | post_token          |

```http request
POST https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}
Content-Type: application/json
x-api-key: {{apikey}}
x-access-token: {{access_token}}

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
{}
```
