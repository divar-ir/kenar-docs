# درج تصویر در ویجت‌ها

تعدادی از ویجت‌های دیوار امکان نمایش تصویر در قسمتی از خود را دارند. برای اضافه کردن تصویر به ویجت مورد نظر ابتدا باید تصویر را آپلود کنید و سپس شناسهٔ آن را در مشخصات ویجت قرار دهید.

```mermaid
sequenceDiagram
    participant Third-Party
    participant Kenar
    participant Divar Image Service
    Third-Party->>+Divar Image Service: Upload Binary Image
    Divar Image Service->>-Third-Party: Creates temporary image and returns its ID
    Third-Party->>+Kenar: Uses the given ID in some widget
    Kenar->>Divar Image Service: Sends Make Permanent request with the given ID
    Divar Image Service->>Kenar: Makes Permanent image and returns a new ID
    Kenar->>-Third-Party: Creates widget with the new image ID and responds with success
```

### آپلود تصویر

در ابتدا با یک رکوئست PUT باینری فایل تصویر خود را به صورت زیر آپلود کنید. (ترجیحا فرمت عکس ها jpeg باشد)

```http request
PUT /v2/image-service/open-platform/image.jpg HTTP/1.1
Host: divar.ir
Content-Type: image/jpeg
Content-Length: 22

"<file contents here>"
```

دفت شود که`image.jpg` انتهای url یک نام ثابت است و ربطی به نام عکس آپلودشده ندارد! (در تمام رکوئست ها `image.jpg` بگذارید)

پس از ارسال درخواست، چنین پاسخی دریافت می‌شود.

```json5
{
  image_name: "57c76b48-d381-4b8a-b34f-355f6869b6ed.jpg",
}
```

### درج تصویر در افزونه

حال در محل مورد نظرتان برای درج تصویر، `id` دریافتی از درخواست قبلی را قرار دهید.

برای مثال در نمونه درخواست زیر در ویجت `EVENT_ROW` تصویر مورد نظرمان را قرار دادیم.

```http request
POST /v2/open-platform/add-ons/post/AZqfx5i2 HTTP/1.1
Host: api.divar.ir

Content-Type: application/json
x-api-key: {{your-api-key}}

{
    "widgets": [
        {
            "title_row": {
                "text": "تایتل رو",
                "has_divider": true
            }
        },
        {
            "event_row": {
                "title": "یک اونت رو",
                "subtitle": "اطلاعات بیشتر اونت رو",
                "has_divider": true,
                "image_url": "57c76b48-d381-4b8a-b34f-355f6869b6ed.jpg"
            }
        }
    ]
}
```

علاوه بر درج تصویر دلخواه می‌توان به جای `{id}` مقدار `logo` را به عنوان `image_url` فرستاد تا لوگوی اپ شما که در پنل کنار دیوار قابل تنظیم است، در ویجت درج شود.
### ویجت های عکس دار
<ul dir="rtl" />
<li><a href="event_row.md">EVENT_ROW</a></li>
<li><a href="image_carousel_row.md">IMAGE_CAROUSEL_ROW</a></li>
<ul />
