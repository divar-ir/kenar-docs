# حذف افزونه آگهی

| Delete Post AddOn |               |
|-------------------|---------------|
| Permissions       | ADD_ON_DELETE |
| Default Rate      | N/A           |

---

برای حذف افزونه‌های اپلیکیشن خود از روی یک آگهی با توکن مشخص میتوانید از فانکشن زیر استفاده کنید.

ریکوئست

```http request
DELETE https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}
Content-Type: application/json
x-api-key: {{apikey}}
X-Debug-Token: {{debug_token}}
```

بر اساس استتوس کد میتوانید موفقیت آمیز بودن فانکشن را بسینجید.
