# گرفتن آمار‌های آگهی

با استفاده از این API می‌توانید آمار بازدید یک آگهی را مشاهده کنید.

برای فراخوانی این سرویس به دسترسی‌های زیر نیاز دارید:
- دسترسی POST_STATS_RETRIEVE بر روی API KEY
- دسترسی USER_POSTS_STATS_READ در OAuth

نمونه درخواست:

```http request
GET https://open-api.divar.ir/experimental/open-platform/posts/{post_token}/stats
x-api-key: {{apikey}}
Authorization: Bearer {{access_token}}
```

نمونه پاسخ:
```json
{
  "views": {
    "daily": [
      {
        "count": 17,
        "date": "2025-06-01"
      },
      {
        "count": 6,
        "date": "2025-06-02"
      },
      {
        "count": 0,
        "date": "2025-06-03"
      },
      {
        "count": 0,
        "date": "2025-06-04"
      },
      {
        "count": 0,
        "date": "2025-06-05"
      },
      {
        "count": 0,
        "date": "2025-06-06"
      },
      {
        "count": 2,
        "date": "2025-06-07"
      }
    ],
    "total": 32
  }
}
```
