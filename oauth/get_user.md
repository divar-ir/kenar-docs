### گرفتن اطلاعات کاربر


| GET USER          |               |
|-------------------|---------------|
| API Permissions   | USER_RETRIEVE |
| OAuth Permissions | USER_PHONE    |

با استفاده از access_token می توانید شماره همراه کاربر احراز شده را دریافت کنید. کافیست رکوئست زیر را به صورت فرم ارسال کنید..

```http request
POST https://api.divar.ir/v1/open-platform/users
x-api-key: {{apikey}}
x-access-token: {{access_token}}
```
نمونه پاسخ نیز مانند زیر است.
```json5
{
  "phone_numbers": ["09990000000"]
}
```
