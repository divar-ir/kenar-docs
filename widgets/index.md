# ساختار ویجت های دیوار
<div dir="rtl">
براس ساخت افزونه نیاز است تا یک فیلد widgets در ریکوئست قرار داده شودک. این فیلد بیانگر اطلاعات و تحوه ی تمایش آن در افزونه است.
به عنوان مثال ، در ریکوئست ساخت اند آن میتواند این اطلاعات وجود داشته باشد:
</div>

```http request
{
    "widgets": {
        "widget_list": [
            {
                "widget_type": "LEGEND_TITLE_ROW",
                "data": {
                    "@type": "type.googleapis.com/widgets.LegendTitleRowData",
                    "title": "تایتل افزونه",
                    "subtitle": "ساب تایتل افزونه",
                    "has_divider": true,
                    "image_url": "logo"
                }
            }
        ]
    }
}
```
<div dir="rtl">
اطلاعاتی که درون widget_list قرار دارد ، لیستی از ویجت ها و فرمت داده هایی هست که کلاینت های دیوار برای نمایش اطلاعات ساپورت میکنند.
به عنوان مثال برای قرار دادن یک تایتل همراه ساب تایتل و قرار دادن لوگوی شرکت در کنار آن ، یک ویجت از تایپ LEGEND_TITLE_ROW وجود دارد و میتوان فیلد های آن را مانند ریکوئست بالا پر کرد.
همانطور که مشاهده میکنید علاوه بر فیلد های اطلاعاتی مانند title و subtitle و image_url ، فیلد های نمایشی نیز وجود دارد ، برای مثال has_divider یک فیلد بولین است که مشخص میکند پایین ویجت ، یک خط جداکننده وجود داشته باشد یا خیر.

# لیست ویجت های کنار دیوار
- [DESCRIPTION_ROW](./description_row.md)
- [EVALUATION_ROW](./evaluation_row.md)
- [LEGEND_TITLE_ROW](./legend_title_row.md)
- [TITLE_ROW](./title_row.md)
- [SUBTITLE_ROW](./subtitle_row.md)
- [WIDE_BUTTON_BAR](./wide_button_bar.md)
- [SELECTOR_ROW](./selector_row.md)
- [EVENT_ROW](./event_row.md)
- [GROUP_INFO_ROW](./group_info_row.md)
- [SCORE_ROW](./score_row.md)

بعضی از این ویجت ها علاوه بر نمایش اطلاعات ، میتوانند دکمه ها و لینک هایی به وب سایت دیگری داشته باشند.
در ریدمی هر کدام از این ویجت ها فیلد های آن و ویژگی های آن به تفصیل توضیح داده شده است.


همچنین هر ویجت دارای شرایط اعتبار‌سنجی است ، برای مثال طول متن تایتل یا گزینه های انتخاب رنگ متن محدود است و باید هنگام ساخت افزونه به آن توجه شود.
</div>
