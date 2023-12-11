# Event Row

<div dir="rtl"> 
ویجت event row دارای فرمت زیر است
</div>

```json
{
  "widget_type": "EVENT_ROW",
  "data": {
    "@type": "type.googleapis.com/widgets.EventRowData",
    "title": "کیفیت کارشناسی",
    "subtitle": "با ۱ سال گارانتی قیمت",
    "label": "تضمینی",
    "image_url": "e7172fc8-2a9c-43c7-927d-93ac7477eb06.jpg",
    "padded": true,
    "icon": {
      "icon_name": "CAR_HYDRAULICS",
      "icon_color": "WARNING_SECONDARY"
    }
  }
}

```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/event_row.png)

حتما باید `widget_type` برابر با `EVENT_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- **type**: یک مقدار ثابت برابر با `type.googleapis.com/widgets.EventRowData`
- title: تایتل مورد نظر برای قرار دادن در ویجت
- subtitle: ساب‌تایتل نسبت به تایتل فونت کوچک تری دارد و در پایین تایتا قرار میگیرد
- label: با استفاده از این فیلد ، در گوشه ی سمت چپ ویجت میتوان یک متن قرار داد
- padded: این فیلد یک بولین است در صورتی که مقدار `true` داشته باشد ، فاصله ی این ویجت با ویجت بعدی بیشتر میشود.
- icon: این فیلد تایپ `json` دارد : 
  - icon_name: اسم آیکون از لیست آیکون های دیوار است . این آیکون در کنار ویجت قرار میگیرد
  - icon_color: رنگ آیکون که میتواند از لیست رنگ های دیوار اننخاب شود.
- image_url: یک ایدی عکس که با استفاده از این [داک](./image.md) تهیه شده است
# اعتبارسنجی ویجت:
برای این ویجت محدودیت کاراکتر فیلد `title` برابر با ۲۴ کاراکتر ، فیلد `subtitle` برابر با ۵۹ و فیلد `label` برابر با ۱۵ است.
فیلد `action` نیز مطابق با ولیدیشن اکشن بررسی میشود.

</div>
