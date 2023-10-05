# Selector Row
<div dir="rtl">
ویجت selector row دارای فرمت زیر است
</div>

```json
{
    "widget_type": "SELECTOR_ROW",
    "data": {
        "@type": "type.googleapis.com/widgets.SelectorRowData",
        "title": "این یک سلکتور رو هست",
        "image_url": "",
        "has_divider": false,
        "has_notification": true,
        "icon": {
           "icon_name": "ADD",
        },
        "notification_text": "",
        "description": "نوتیفیکیشن",
        "has_arrow": true,
        "small": true
    }
}
```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/selector_row.png)

حتما باید `widget_type` برابر با `SELECTOR_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- type: یک مقدار ثابت برابر با `type.googleapis.com/widgets.SelectorRowData`
- title: متن مورد نطر برای ویجت
- image_url: 
- has_divider: یک فیلد بولین نشان دهنده ی قرار گرفتن یک خط جداکننده در انتهای ویجت
- description: در کلاینت اندروید نمایش داده میشود و به صورت یک دیسکریپشن پایین تایتل است
- icon: این فیلد تایپ `json` دارد :
  - icon_name: اسم آیکون از لیست آیکون های دیوار است . این آیکون در کنار ویجت قرار میگیرد
  - ~~icon_color: رنگ آیکون که میتواند از لیست رنگ های دیوار اننخاب شود.~~
- action: همانطور که در [اینجا](actions/index.md) توضیح دادیم یکی از دو اکشن تعریف شده را میپذیرد


# اعتبارسنجی ویجت:
حداکثر طول قابل قبول برای فیلد `title` برابر با ۲۰۰ کاراکتر است.
فیلد `action` نیز مطابق با ولیدیشن اکشن استفاده شده ، بررسی میشود.
</div>
