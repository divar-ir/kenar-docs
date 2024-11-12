# حذف افزونه آگهی

| Delete Post AddOn |               |
|-------------------|---------------|
| Permissions       | ADD_ON_DELETE |
| Default Rate      | N/A           |

---

برای حذف افزونه‌های اپلیکیشن خود از روی یک آگهی با توکن مشخص میتوانید از فانکشن زیر استفاده کنید.

**توجه: برای بروزرسانی افزونه (تغییر ویجت یا ...) حتما از  اندپوینت ساخت و بروزرسانی استفاده کنید**

این API تنها برای حذف دائمی افزونه کاربرد دارد.

ریکوئست

```http request
DELETE https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}
Content-Type: application/json
x-api-key: {{apikey}}
```

بر اساس استتوس کد میتوانید موفقیت آمیز بودن فانکشن را بسینجید.
