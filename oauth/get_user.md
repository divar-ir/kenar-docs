### دریافت اطلاعات کاربر

| GET USER          |               |
|-------------------|---------------|
| API Permissions   | USER_RETRIEVE |
| OAuth Permissions | USER_PHONE، USER_ID |

با استفاده از `access_token` می‌توانید شماره همراه کاربر و شناسه کاربری یکتا را دریافت کنید. کافیست درخواست زیر را به صورت فرم ارسال کنید.

اگر هر دو اسکوپ OAuth `USER_PHONE` و `USER_ID` را در اکسس توکن داشته باشید، هر دو فیلد شناسه کاربری یکتا و شماره کاربر را دریافت می‌کنید. در غیر این صورت، فقط فیلد مربوط به اسکوپی که در اکسس توکن موجود است را دریافت می‌کنید.

> شناسه کاربری یک کاربر برای اپ‌های مختلف متفاوت می‌باشد، اما تضمین می‌شود که برای یک کاربر دیوار (بر اساس شماره یکتا) و یک اپ، *همیشه* یک شناسه‌ کاربری یکتا ارائه شود.

| FIELD         | OAUTH_SCOPE  |
|---------------|--------------|
| phone_number  | USER_PHONE   |
| user_id       | USER_ID      |

```http
GET https://api.divar.ir/v1/open-platform/users
Content-Type: application/json
x-api-key: {{apikey}}
x-access-token: {{access_token}}
```

نمونه پاسخ نیز به صورت زیر است:

```json5
{
  "phone_number": "09990000000", // در صورت وجود USER_PHONE
  "user_id": "awoDdf1ecd2wac" // در صورت وجود USER_ID
}
```
