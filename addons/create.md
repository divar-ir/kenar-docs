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
    "link_in_spec": "https://your.site.ir"
}
```
در این ریکوئست علاوه بر لیست ویجت ها ، یک فیلد دیگر با نام link_in_spec وجود دارد. این فیلد برای app های با سرویس تایپ REPORT_INSPECTION کاربرد دارد. در صورتی که این فیلد پر شود ، علاوه بر نمایش افزونه، یک ویجت score row در ابتدای صفحه ی پست لیست قسمت مشخصات آگهی اضافه میشود. این امر برای پروموت کردن این نوع افزونه ها کاربرد دارد. در صروتی که کاربر روی این ویجت کلیک کند ، وارد لینک قرار داده شده در فیلد link_in_spec میشود.

ریسپانس

```json
{
    "id": "123"
}
```

# جایگاه نمایش افزونه ها
افزونه هایی که user approved باشند ، به جای نمایش در انتهای آگهی ، پیش از قسمت توضیحات خود کاربر ، نمایش داده میشوند. باقی افزونه ها که شامل این شرط نباشند ، در انتهای آگهی قابل مشاده هستند.

- برای حذف افزونه از آگهی میتوانید آیدی آن را نگهداری کرده و در آینده از API خذف افزونه استفاده نمائید
