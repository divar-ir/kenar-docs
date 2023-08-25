# title Row
<div dir="rtl">
ویجت title row دارای یکی از دو فرمت زیر است
</div>

```json
{
    "widget_type": "TITLE_ROW",
    "data": {
        "@type": "type.googleapis.com/widgets.TitleRowData",
        "text": "این یک تایتل رو هست",
        "has_divider": true
    }
}
```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/title_row.png)

حتما باید `widget_type` برابر با `TITLE_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- type: یک مقدار ثابت برابر با `type.googleapis.com/widgets.TitleRowData`
- text: متن مورد نطر برای ویجت
- has_divider: یک فیلد بولین نشان دهنده ی قرار گرفتن یک خط جداکننده در انتهای ویجت

# اعتبارسنجی ویجت:

حداکثر طول قابل قبول برای فیلد `text` برابر با ۴۹ کاراکتر است.
</div>