# Wide Button Bar
<div dir="rtl"> 
ویجت wide button bar دارای فرمت زیر است
</div>

```json
{
    "widget_type": "WIDE_BUTTON_BAR",
    "data": {
        "@type": "type.googleapis.com/widgets.WideButtonBarWidgetData",
        "style": "SECONDARY",
        "button": {
            "action": {
                "type": "OPEN_WEB_PAGE",
                "fallback_link": "https://your.website.ir",
                "payload": {
                    "@type": "type.googleapis.com/widgets.OpenWebPagePayload",
                    "link": "https://your.website.ir"
                }
            },
            "title": "به سمت کارشناسی ماشین",
        }
    }
}
```

<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/wide_button_bar.png)

حتما باید `widget_type` برابر با `WIDE_BUTTON_BAR` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- **type**: یک مقدار ثابت برابر با `type.googleapis.com/widgets.WideButtonBarWidgetData`
- **style**: فرمت نمایش دکمه را مشخص میکند ، دو حالت `PRIMARY` و `SECONDARY` را ساپورت میکند.
- **button**: مشخصات دکمه در این json قرار میگیرد:
  - action: همانطور که در [اینجا](actions/index.md) توضیح دادیم یکی از اکشن های تعریف شده را میپذیرد
  - title: متن روی دکمه را مشخص میکند

# اعتبارسنجی ویجت:
حداکثر طول قابل قبول برای فیلد title در button برابر با ۴۹ کاراکتر است.
</div>