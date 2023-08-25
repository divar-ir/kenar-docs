# Score Row
<div dir="rtl">
ویجت score row دارای یکی از دو فرمت زیر است
</div>

```json
{
    "widget_type": "SCORE_ROW",
    "data": {
        "@type": "type.googleapis.com/widgets.ScoreRowData",
        "title": "متن تایتل",
        "percentage_score": 80,
        "score_color": "SUCCESS_PRIMARY",
        "hasDivider": true,
        "icon": {
            "icon_name": "HISTORY",
            "icon_color": "SUCCESS_PRIMARY"
        },
        "action": {
            "type": "LOAD_WEB_VIEW_PAGE",
            "fallback_link": "https://google.com/",
            "payload": {
                "@type": "type.googleapis.com/widgets.LoadWebViewPagePayload",
                "url": "https://google.com/"
            }
        }
    }
}
```
##  نمایش
![ScreenShot](doc-images/score_row_percentage.png)
یا 
```json
{
    "widget_type": "SCORE_ROW",
    "data": {
        "@type": "type.googleapis.com/widgets.ScoreRowData",
        "title": "متن تایتل",
        "descriptive_score": "متن توضیحی کوتاه",
        "score_color": "SUCCESS_PRIMARY",
        "hasDivider": true,
        "icon": {
            "icon_name": "HISTORY",
            "icon_color": "SUCCESS_PRIMARY"
        },
        "action": {
            "type": "LOAD_WEB_VIEW_PAGE",
            "fallback_link": "https://google.com/",
            "payload": {
                "@type": "type.googleapis.com/widgets.LoadWebViewPagePayload",
                "url": "https://google.com/"
            }
        }
    }
}
```

## نمایش
![ScreenShot](doc-images/score_row_descriptive.png)
<div dir="rtl">

حتما باید `widget_type` برابر با `SCORE_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- type: یک مقدار ثابت برابر با `type.googleapis.com/widgets.ScoreRowData`
- title: متن مورد نظر برای قرار دادن در ویجت
- فیلد مربوط به اسکور:یک از دو فیلد زیر میتواند در ساختار ما قرار داده شوند
  -  percentage_score: مانند حالت اول است ، یک مقدار درصدی برای توضیح میزان قرار داده شده در تایتل
  - descriptive_score: مانند حالت دوم ، یک مقدار متنی برای توضیح کیفیت موضوغ قرار داده شده در تایتل
- score_color: بیانگر رنگ متن فیلد مربوط به اسکور است و میتواند از مقادیر
- has_divider: یک فیلد بولین نشان دهنده ی قرار گرفتن یک خط جداکننده در انتهای ویجت
- icon: این فیلد تایپ json دارد :
  - icon_name: اسم آیکون از لیست آیکون های دیوار است . این آیکون در کنار ویجت قرار میگیرد
  - icon_color: رنگ آیکون که میتواند از لیست رنگ های دیوار اننخاب شود.
- action: همانطور که در [اینجا](actions/index.md) توضیح دادیم یکی از دو اکشن تعریف شده را میپذیرد


# اعتبارسنجی ویجت:
حداکثر طول قابل قبول برای فیلد `title` برابر با ۲۵ کاراکتر است. در صورتی که فیلد `percentage_score` پر شود ، نیاز است مقدار عدد ، خارج از محدوده ی درصدی نباشد و در صورتی که فیلد `descriptive_score` پر شود ، محدودیت تعداد کاراکتر ۱۷ داریم.
فیلد `action` نیز مطابق با ولیدیشن اکشن استفاده شده ، بررسی میشود.
</div>
