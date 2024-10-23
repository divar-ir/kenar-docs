# ساختار ویجت های دیوار (Widgets)
ویجت‌ها اجزای تشکیل دهندهٔ صفحات در دیوار هستند، که برخی از آنها را می‌توانید در افزونه‌های خود استفاده کنید..
برای درج یک ویجت در یک افزونه باید نام ویجت و جزییات مرتبط با آن را همراه درخواست درج افزونه ارسال کنید.

به عنوان مثال ، در ریکوئست ساخت اند آن میتواند این اطلاعات وجود داشته باشد:

مثال از قراردادن ویجت در درخواست درج افزونه به یک آگهی
```JSON
{
    "widgets": [

    ...moreWidgets
    ]
}
```

اطلاعاتی که درون `widget_list` قرار دارد ، لیستی از ویجت ها و ساختار داده‌هایی است که دیوار برای نمایش اطلاعات پشتیبانی می‌کنند.
هر ویجت ویژگی‌های خود را دارد که در قسمت `data` می‌توان تعیینشان کرد. مثلاً با `true` گذاشتن مثدار `divider` برای ویجت‌هایی که این ویژگی را دارند، می‌توان یک خط جدا کننده زیر ویجت نمایش داد.

ویژگی‌های هر ویجت، شرایط اعتبار سنجی و توضیحات مرتبط هر کدام در صفحات زیر دسترس‌ است.
# لیست ویجت های کنار دیوار
- [DESCRIPTION_ROW](./description_row.md)
![DESCRIPTION_ROW](doc-images/description_row_not_expanded.png)
![DESCRIPTION_ROW](doc-images/description_row_expanded.png)
- [EVALUATION_ROW](./evaluation_row.md)
![EVALUATION_ROW](doc-images/evaluation_row.png)
- [TITLE_ROW](./title_row.md)
![TITLE_ROW](doc-images/title_row.png)
- [SUBTITLE_ROW](./subtitle_row.md)
![SUBTITLE_ROW](doc-images/subtitle_row.png)
- [BUTTON_BAR](./button_bar.md)
![BUTTON_BAR](doc-images/wide_button_bar.png)
- [SELECTOR_ROW](./selector_row.md)
![SELECTOR_ROW](doc-images/selector_row.png)
- [EVENT_ROW](./event_row.md)
![EVENT_ROW](doc-images/event_row.png)
- [GROUP_INFO_ROW](./group_info_row.md)
![GROUP_INFO_ROW](doc-images/group_info_row.png)
- [SCORE_ROW](./score_row.md)
![SCORE_ROW](doc-images/score_row_percentage.png)
![SCORE_ROW](doc-images/score_row_descriptive.png)
- [IMAGE_CAROUSEL_ROW](./score_row.md)
![SCORE_ROW](doc-images/image_carousel_row.png)
### ویجت‌های دارای تصویر
برای اطلاع از درج تصویر در ویجت‌هایی که امکان نمایش تصویر در قسمتی از خود را دارند، [صفحهٔ تصاویر در ویجت‌ها](./image.md) را ببینید

### اکشن‌ها
اکشن‌های قابل استفاده در پلتفرم کنار دیوار در
[قسمت اکشن‌ها](./actions/ReadMe.md)
توضیح داده شده است.

### فایل فیگمای ویجت‌ها و آیکون‌ها

- [فیگمای آیکون‌ها و رنگ‌ها و ویجت‌های دیوار](https://www.figma.com/file/ZhhSihwKTjiER1VUDX4ovh/%F0%9F%93%92-Kenar-Docs-(WIP)?type=design&node-id=2-4&mode=design&t=RbiQ2ay29ombNJKz-11)
