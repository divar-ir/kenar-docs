# Event Row

<div dir="rtl"> 
ویجت event row دارای فرمت زیر است.
</div>


```json
{
  "event_row": {
    "title": "یه تایتل مناسب",
    "subtitle": "یه زیر تایتل مناسب تر",
    "label": "یه لیبل زیبا",
    "image_id": "someuuid.jpg",
    "has_divider": true,
    "icon_name": "ADD"
    "action": {
      "open_direct_link": "https://google.com"
    }
  },
  "semantic_paths": {
    "user_face": "image_id"
  }
}
```
<div dir="rtl">

##  نمایش
![ScreenShot](doc-images/event_row.png)

در ادامه فیلد های این ویجت را توضیح میدهیم:
- title: تایتل مورد نظر برای قرار دادن در ویجت
- subtitle: ساب‌تایتل نسبت به تایتل فونت کوچک تری دارد و در پایین تایتا قرار میگیرد
- label: با استفاده از این فیلد ، در گوشه ی سمت چپ ویجت میتوان یک متن قرار داد
- icon_name: اسم آیکون از لیست آیکون های دیوار است . این آیکون در کنار ویجت قرار میگیرد
- image_id: یک ایدی عکس که با استفاده از این [داک](./image.md) تهیه شده است
- action: اکشن با توجه به [این داک](./actions/ReadMe.md) به صورت اختیاری قرار داده شود.
# اعتبارسنجی ویجت:
برای این ویجت محدودیت کاراکتر فیلد `title` برابر با ۲۴ کاراکتر ، فیلد `subtitle` برابر با ۵۹ و فیلد `label` برابر با ۱۵ است.
فیلد `action` نیز مطابق با ولیدیشن اکشن بررسی میشود.

</div>
