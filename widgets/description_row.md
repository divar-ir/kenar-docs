# Description Row
 ویجت description row دارای یکی از دو فرمت زیر است
```json
{
    "widget_type": "DESCRIPTION_ROW",
    "data": {
        "@type": "type.googleapis.com/widgets.DescriptionRowData",
        "text": "این یک دسکریپشن رو هست",
        "has_divider": false,
        "is_primary": false,
        "expandable": false,
        "small": true,
        "padded": false
    }
}
```

## نمایش
اگر `expandable` برابر با `true` باشد
![ScreenShot](doc-images/description_row_not_expanded.png)
در صورت کلیک روی دیسکریپشن
![ScreenShot](doc-images/description_row_expanded.png)

حتما باید `widget_type` برابر با `DESCRIPTION_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- type: یک مقدار ثابت برابر با `type.googleapis.com/widgets.DescriptionRowData`
- text: متن مورد نطر برای ویجت
- has_divider: یک فیلد بولین نشان دهنده ی قرار گرفتن یک خط جداکننده در انتهای ویجت
- is_primary:<div dir="rtl"> یک فیلد بولین نشان‌دهنده ی پررنگ بودن و کم‌رنگ بودن متن دسیکریپشن است. اگر برابر با `false` باشد متن به رنگ طوسی پررنگ و اگر `true` باشد ، متن به رنگ سیاه در می‌آید.</div>
- small: یک فیلد بولین نشان دهنده ی سایز متن در کلاینت وب است.
- expandable:<div dir="rtl"> یک فیلد بولین نشان‌دهنده ی امکان اکسپند و دیسپند کردن متن است. در صورتی که این پارامتر `true` باشد ، متن به صورت دیفالت دیسپند شده است و با کلیک روی این ویجت ، بقیه ی متن قابل مشاهده میشود.</div>
- padded: <div dir="rtl">یک فیلد بولین است که با `true` کردن مقدار آن متن میتواند فاصله ی بیشتری با ویجت بعدی داشته باشد.</div>

# اعتبارسنجی ویجت:

<div dir="rtl">در صورتی که فیلد `expandable` برابر با `false` باشد ، محدودیت 200 کاراکتر برای فیلد `text` داریم.</div>
