# گرفتن آگهی‌های کاربر


| GET USER          |                |
|-------------------|----------------|
| OAuth Permissions | USER_POSTS_GET |

با استفاده از access_token می توانید آگهی‌های کاربر احراز شده را دریافت کنید. کافیست رکوئست زیر را بزنید.
```http request
GET https://api.divar.ir/v1/open-platform/finder/user-posts
x-api-key: {{apikey}}
x-access-token: {{access_token}}
```
نمونه پاسخ نیز مانند زیر است.
```json5
{
  "posts": [
    {
      "token": "QVZ8LgaW",
      "title": "اجاره آپارتمان ۱۰۰ متری",
      "images": [
        "https://s100.divarcdn.com/static/photo/afra/post/5nR_yv4kKEISbwtjwcc0Q/474c536e-bd6d-491b-afrf-72bfar916022.jpg"
      ],
      "category": "apartment-rent"
    }
  ]
}
```
