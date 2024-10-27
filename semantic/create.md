# ساخت و به روز رسانی

| Upsert User Semantic |                          |
|--------------------------|--------------------------|
| API Permissions          | USER_SEMANTIC_CREATE |
| OAuth Permissions        | USER_VERIFICATION_CREATE |
| Rate Limit               | Unlimited                |


## ریکوئست

```http request
POST https://api.divar.ir/v1/open-platform/semantic/user/{{phone}}
x-access-token: {{access-token}}
x-api-key: {{api-key}}

{

    "semantic": {
        "identity_verifcation_result": "FACE_AND_ID_MATCHED",
        "some-key": "some value to be hashed"
    },
    "ticket_uuid": "812d56e6-e44d-45e7-8932-f9acbd416999",
    "cost": 12000
}
```

| Field                | Type     | Example                                | Description                                                                                                |
|----------------------|----------|----------------------------------------|------------------------------------------------------------------------------------------------------------|
| phone                | string   | "09991234567"                          | آیدی کاربر متقاضی افزونه کاربر                                                                             |
| ticket_uuid  (optional)        | string   | "812d56e6-e44d-45e7-8932-f9acbd416999" | مشاهده [بلیط پرداخت](../payment-ticket)                                                                    |
| cost (optional)   | int32    | 124000                                 | هزینه انجام خدمت به ریال                                                                                   |
| semantic             | object   | {}                                     | [اطلاعات معنایی](semantic_data.md)                                                                              |


> - داشتن اکسس توکن با درسترسی مربوطه برای الصاق این نوع احراز الزامی است
> - در صورتی که سرویس با استفاده از تیکت پرداخت را هندل میکند ، در صورتی که هزینه ای برای احراز داده شده اما هویت فرد محرز نشده با هماهنگی قبلی ، میتوان این موارد را نیز از طریق این اندپوینت اعلام کرد. در این صورت تیکت باطل میشود و مقدار هزینه برای سرویس پروایدر فاکتور میشود.
 > - این ‍`api` در صورت وجود اطلاعات معنایی آن را اپدیت و جایگزین می‌کند.

## ریسپانس
```json
{
    "id": "124e4568-e44d-45e7-8932-f9acbd416999"
}
```



