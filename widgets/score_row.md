# Score Row
<div dir="rtl">
ویجت score row دارای یکی از دو فرمت زیر است
</div>

```json
{
    "score_row": {
        "title": "متن تایتل",
        "percentage_score": 80,
        "score_color": "SUCCESS_PRIMARY",
        "hasDivider": true,
        "icon_name": "HISTORY",
        "action": {
            "open_direct_link": "https://google.com"
        }
    },
    "semantic_paths": {
        "inspection_result": "percentage_score"
    }
}
```
##  نمایش
![ScreenShot](doc-images/score_row_percentage.png)
یا 
```json
{
    "score_row": {
        "title": "متن تایتل",
        "descriptive_score": "متن توضیحی کوتاه",
        "score_color": "SUCCESS_PRIMARY",
        "hasDivider": true,
        "icon_name": "HISTORY",
        "action": {
            "open_direct_link": "https://google.com"
        }
    },
    "semantic_paths": {
        "inspection_result": "descriptive_score"
    }
}
```

## نمایش
![ScreenShot](doc-images/score_row_descriptive.png)
<div dir="rtl">

در ادامه فیلد های این ویجت را توضیح میدهیم:

| فیلد               | توضیحات                                                                                                         |
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| title              | متن مورد نظر برای قرار دادن در ویجت                                                                              |
| فیلد مربوط به اسکور| یکی از دو فیلد زیر می‌تواند در ساختار ما قرار داده شود:                                                            |
|                    | - `percentage_score`: مقدار درصدی برای توضیح میزان قرار داده شده در تایتل                                         |
|                    | - `descriptive_score`: مقدار متنی برای توضیح کیفیت موضوع قرار داده شده در تایتل                                   |
| score_color        | بیانگر رنگ متن فیلد مربوط به اسکور است و می‌تواند از مقادیر مختلفی برخوردار باشد.                                 |
| has_divider        | یک فیلد بولین نشان‌دهنده‌ی قرار گرفتن یک خط جداکننده در انتهای ویجت است.                                        |
| icon_name          | اسم آیکون از لیست آیکون‌های دیوار است. این آیکون در کنار ویجت قرار می‌گیرد.                                       |
| action             | همانطور که در [اینجا](actions/index.md) توضیح داده شده است به صورت اختیاری پر‌ می‌شود.                       |

# اعتبارسنجی ویجت:
حداکثر طول قابل قبول برای فیلد `title` برابر با ۲۵ کاراکتر است. در صورتی که فیلد `percentage_score` پر شود ، نیاز است مقدار عدد ، خارج از محدوده ی درصدی نباشد و در صورتی که فیلد `descriptive_score` پر شود ، محدودیت تعداد کاراکتر ۱۷ داریم.
فیلد `action` نیز مطابق با ولیدیشن اکشن استفاده شده ، بررسی میشود.
</div>
