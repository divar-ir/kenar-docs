# ساخت و به روز رسانی

| Upsert Post Semantic |                      |
|----------------------|----------------------|
| OAuth Permissions    | POST_SEMANTIC_CREATE |
| Rate Limit           | Unlimited            |

### ویژگی‌ها
با استفاده از این اندپوینت می‌توانید اطلاعات معنایی یک آگهی را ایجاد یا به روز رسانی کنید.
اطلاعات معنایی می‌تواند اطلاعاتی مانند نتیجه احراز هویت، اطلاعات مربوط به محتوای آگهی و ... باشد.
توجه داشته باشید که این اطلاعات برای کاربران دیوار قابل مشاهده نیست و تنها برای استفاده‌ی دیوار در پردازش‌های داخلی مورد استفاده قرار می‌گیرد.

## ریکوئست

```http request
POST https://api.divar.ir/experimental/open-platform/semantic/post/{{post_token}}
x-access-token: {{access-token}}
x-api-key: {{api-key}}

{

    "semantic": {
        "some-key": "some value to be hashed",
        "identity_verification_result": "FACE_AND_ID_MATCHED"
    },
}
```
