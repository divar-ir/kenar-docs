# الصاق اطلاعات احراز کاربر

| CREATE USER Verification |                          |
|--------------------------|--------------------------|
| API Permissions          | USER_VERIFICATION_CREATE |
| OAuth Permissions        | USER_VERIFICATION_CREATE |
| Resource ID              | phone                    |
| Rate Limit               | Unlimited                |


## ریکوئست

```http request
POST https://api.divar.ir//v1/open-platform/verifications/user/{{phone}}
x-access-token: {{access-token}}
x-api-key: {{api-key}}

{
    "categories": [],
    "notes": "test note",
    "phone": "09120000000",
    "semantic": {"national-id": "12345678"},
    "semantic_sensitives": ["national-id"],
    "ticket_uuid": "812d56e6-e44d-45e7-8932-f9acbd416999",
    "verification_cost": 12000
}
```

| Field                | Type     | Example                                | Description                                                                                             |
|----------------------|----------|----------------------------------------|---------------------------------------------------------------------------------------------------------|
| phone                | string   | "09991234567"                          | آیدی کاربر متقاضی افزونه کاربر                                                                          |
| management_permalink | string   | "https://same-domain.com/manage/id"    | لینک مدیریت افزونه کاربر که از صفحه «دیوار من» قابل دسترسی خواهد بود. این صفحه باید با OAuth محافظت شود |
| management_permalink | string   | "https://same-domain.com/manage/id"    | لینک مدیریت افزونه کاربر که از صفحه «دیوار من» قابل دسترسی خواهد بود. این صفحه باید با OAuth محافظت شود |
| ticket_uuid          | string   | "812d56e6-e44d-45e7-8932-f9acbd416999" | مشاهده [بلیط پرداخت](../payment-ticket)                                                                 |
| verification_cost    | int32    | 124000                                 | هزینه انجام خدمت به ریال                                                                                |
| semantic             | object   | {}                                     | [اطلاعات معنایی](semantic.md)                                                                           |
| semantic_sensitives | []string | ["national_id"] | این مقادیر در در دیتابیس کنار دیوار به شکل مشوّش و غیرقابل بازگشت ذخیره میشوند و در لاگ‌ها نیز پیدا نیستند

> - داشتن اکسس توکن با درسترسی مربوطه برای الصاق این نوع افزونه الزامی است
> - فیلد نوت برای اطلاعاتی که مورد نیاز سرویس پروایدر است استفاده میگردد و سمنتیک مقادیر از پیش قرار داد شده ای دارد و  مصارف تحلیل و بررسی دارد
> - در صورتی که سرویس با استفادخ از تیکت پرداخت را هندل میکند ، در صورتی که هزینه ای برای احراز داده شده اما هویت فرد محرز نشده با هماهنگی قبلی ، میتوان این موارد را نیز از طریق این اندپوینت اعلام کرد. در این صورت تیکت باطل میشود و مقدار هزینه برای سرویس پروایدر فاکتور میشود
> - نیاز است در صورت عدم احراز کاربر شامل عدم تطابق یا رها کردن فرایند ، اطلاعاتی که از کاربر گرفته شده ، با تمییز اطلاعات بررسی شده و نشده از طریق semantic اطلاع داده شود.
## ریسپانس

```json
{
    "id": "124e4568-e44d-45e7-8932-f9acbd416999"
}
```



