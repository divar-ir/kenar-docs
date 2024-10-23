# Evaluation Row
<div dir="rtl">
 ویجت evaluation row دارای فرمت زیر است
</div>

```json
{
    "evaluation_row": {
        "left": {
            "text": "cheap",
            "section_color": "SUCCESS_PRIMARY"
        },
        "middle": {
            "text": "fair",
            "section_color": "WARNING_SECONDARY"
        },
        "right": {
            "text": "expensive",
            "section_color": "ERROR_PRIMARY"
        },
        "indicator_text": "evaluation",
        "indicator_percentage": 50,
        "icon_name": "MONEY"
    },
    "semantic_paths": {
      "price_evaluation": "indicator_percentage"
    }
}
```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/evaluation_row.png)

این ویجت دارای سه بخش افقی است و هر بخش یک متن میگیرد. میتوان یک شاخص بالای این ویجت گذاشت تا به یکی از این بخش ها اشاره کند ، این ویجت به طور معمول برای قیمت گذاری و نشان دادن قیمت اصلی به عنوان متن روی شاخص استفاده میشود.

در ادامه فیلد های این ویجت را توضیح میدهیم:
- indicator_text: این متن روی شاخص نشان داده میشود.
- indicator_percentage: این فیلد به صورت عددی بین ۰ تا ۱۰۰ است و محدوده ی قرارگیری شاخص را مشخص میکند. به عنوان مثال اگر برابر با ۱۰۰ باشد ، این شاخص در لبه ی ویحت سمت راست نمایش داده میشود.
- indicator_icon: این فیلد نشان دهنده ی آیکون کنار متن شاخص است
  - icon_name: اسم آیکون از لیست آیکون های دیوار است . این آیکون در کنار ویجت قرار میگیرد
- left/middle/right: این فیلد ها محتوای متن و نمایش هر بخش را مشخص میکنند.
  - text: متن داخل بخش را مشخص میکند.
  - section_color: رنگ پس زمینه ی بخش را مشخص میکند. این رنگ باید از لیست رنگ های دیوار انتخاب شود.

# اعتبارسنجی ویجت:

حداکثر طول قابل قبول برای هر قسمت (`right`/`left`/`middle`) برابر با 18 کاراکتر است. همچین مقدار فیلد `indicator_percentage` باید همواره در بازه ی معقول درصدی (۰ تا ۱۰۰) باشد.

</div>
