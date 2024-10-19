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
        "id": "123456",
        "app": {
          "slug": "app_slug",
          "service_type": "REPORT_PRICE_EVALUATION"
        },
        "created_at": "2024-10-01T17:01:08.793398Z",
        "last_modified": "2024-10-01T17:01:08.793398Z",
        "status": "ACTIVE"
      },
      "token": "gZ7nvW21",
      "widgets": {
        "widget_list": [
          {
            "widget_type": "EVALUATION_ROW",
            "data": {
              "@type": "type.googleapis.com/widgets.EvaluationRowData",
              "indicator_text": "قیمت ملک",
              "indicator_percentage": "69",
              "indicator_icon": {
                "icon_name": "REAL_ESTATE",
                "icon_color": "ICON_SECONDARY"
              },
              "indicator_color": "BRAND_PRIMARY",
              "left": {
                "text": "پایین",
                "text_color": "WHITE_PRIMARY",
                "section_color": "SUCCESS_PRIMARY"
              },
              "middle": {
                "text": "متوسط",
                "text_color": "WHITE_PRIMARY",
                "section_color": "SUCCESS_SECONDARY"
              },
              "right": {
                "text": "بالا",
                "text_color": "WHITE_PRIMARY",
                "section_color": "WARNING_SECONDARY"
              }
            }
          }
          // ...
        ]
      },
    }
    // ...
  ]
}
```
