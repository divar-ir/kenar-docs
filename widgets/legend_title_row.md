# Legend Title Row
<div dir="rtl">
 ویجت legend title row دارای یکی از دو فرمت زیر است
</div>

```json
{
    "widget_type": "LEGEND_TITLE_ROW",
    "data": {
        "@type": "type.googleapis.com/widgets.LegendTitleRowData",
        "title": "کارشناسی ملک",
        "subtitle": "گروه املاک علی‌پور",
        "has_divider": true,
        "image_url": "logo"
    }
}
```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/legend_title_row.png)

حتما باید `widget_type` برابر با `LEGEND_TITLE_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- type: یک مقدار ثابت برابر با `type.googleapis.com/widgets.LegendTitleRowData`
- title: تایتل مورد نطر برای ویجت
- subtitle: سابتایتل مورد نطر برای ویجت. سابتاتل زیر تایتل قرار میگیرد و متن آن طوسی و نسبت به تایتل کمرنگ تر است
- has_divider: یک فیلد بولین نشان دهنده ی قرار گرفتن یک خط جداکننده در انتهای ویجت
- image_url: این فیلد تا اطلاع ثانوی باید مقدار ثابت `logo` داشته باشد.

# اعتبارسنجی ویجت:

حداکثر طول قابل قبول برای فیلد `title` برابر با ۵۵ کاراکتر است ، برای فیلد `subtitle` محدودیت حداکثر ۳۶ کاراکتر داریم و فیلد `image_url` اجباری است. در حال حاضر تنها گذاشتن آواتار برای این ویجت قابل قبول است و عکس دیگری پذیرفته نمیشود. با نوشتن "`logo`" در مقدار این فیلد ، لوگوی شرکت شما در ویجت قرار میگیرد.
</div>