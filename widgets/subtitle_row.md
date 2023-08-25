# Subtitle Row
<div dir="rtl">
 ویجت subtitle row دارای یکی از دو فرمت زیر است
</div>

```json
{
    "widget_type": "SUBTITLE_ROW",
    "data": {
        "@type": "type.googleapis.com/widgets.SubtitleRowData",
        "text": "این یک سابتایتل رو هست",
        "has_divider": true
    }
}
```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/subtitle_row.png)

حتما باید `widget_type` برابر با `SUBTITLE_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- type: یک مقدار ثابت برابر با `type.googleapis.com/widgets.SubtitleRowData`
- text: متن مورد نطر برای ویجت
- has_divider: یک فیلد بولین نشان دهنده ی قرار گرفتن یک خط جداکننده در انتهای ویجت

# اعتبارسنجی ویجت:
حداکثر طول قابل قبول برای فیلد `text` برابر با ۲۰۰ کاراکتر است.
</div>
