# Evaluation Row
<div dir="rtl">
 ویجت evaluation row دارای فرمت زیر است
</div>

```json
{
"widget_type": "EVALUATION_ROW",
  "data": {
    "@type": "type.googleapis.com/widgets.EvaluationRowData",
    "indicator_text": "متن روی شاخص",
    "indicator_percentage": 50,
    "indicator_icon": {
      "image_url_dark": "",
      "image_url_light": "",
      "icon_name": "ADD",
      "icon_color": "BRAND_PRIMARY"
    },
    "indicator_color": "BRAND_PRIMARY",
    "left": {
      "text": "left text",
      "text_color": "ICON_PRIMARY",
      "section_color": "ICON_SECONDARY"
    },
    "middle": {
      "text": "middle text",
      "text_color": "ICON_PRIMARY",
      "section_color": "ICON_SECONDARY"
    },
    "right": {
      "text": "right text",
      "text_color": "ICON_PRIMARY",
      "section_color": "ICON_SECONDARY"
    }
  }
}

```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/evaluation_row.png)

این ویجت دارای سه بخش افقی است و هر بخش یک متن میگیرد. میتوان یک شاخص بالای این ویجت گذاشت تا به یکی از این بخش ها اشاره کند ، این ویجت به طور معمول برای قیمت گذاری و نشان دادن قیمت اصلی به عنوان متن روی شاخص استفاده میشود.

حتما باید `widget_type` برابر با `EVALUATION_ROW` قرار داده شود.
در ادامه فیلد های این ویجت را توضیح میدهیم:
- **type**: یک مقدار ثابت برابر با `type.googleapis.com/widgets.EvaluationRowData`
- indicator_text: این متن روی شاخص نشان داده میشود.
- indicator_percentage: این فیلد به صورت عددی بین ۰ تا ۱۰۰ است و محدوده ی قرارگیری شاخص را مشخص میکند. به عنوان مثال اگر برابر با ۱۰۰ باشد ، این شاخص در لبه ی ویحت سمت راست نمایش داده میشود.
- indicator_icon: این فیلد نشان دهنده ی آیکون کنار متن شاخص است
  - icon_name: اسم آیکون از لیست آیکون های دیوار است . این آیکون در کنار ویجت قرار میگیرد
  - icon_color: رنگ آیکون که میتواند از لیست رنگ های دیوار اننخاب شود.
- indicator_color: رنگ مورد نظر برای شاخص را مشخص میکند. در کلاینت اندروید و iOS استفاده میشود. این رنگ باید از لیست رنگ های دیوار انتخاب شود.
- left/middle/right: این فیلد ها محتوای متن و نمایش هر بخش را مشخص میکنند.
  - text: متن داخل بخش را مشخص میکند.
  - text_color: رنگ متن را مشخص میکند. این رنگ باید از لیست رنگ های دیوار انتخاب شود.
  - section_color: رنگ پس زمینه ی بخش را مشخص میکند. این رنگ باید از لیست رنگ های دیوار انتخاب شود.

# اعتبارسنجی ویجت:

حداکثر طول قابل قبول برای هر قسمت (`right`/`left`/`middle`) برابر با 18 کاراکتر است. همچین مقدار فیلد `indicator_percentage` باید همواره در بازه ی معقول درصدی (۰ تا ۱۰۰) باشد.

</div>