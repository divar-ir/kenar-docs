# دریافت اطلاعات آگهی

| Get Post     |            |
|--------------|------------|
| Permissions  | GET_POST   |
| Default Rate | 10K R/WEEK |

برای دریافت اطلاعات یک آگهی در دیوار تنها با استفاده از توکن میتوانید از این ای پی آی استفاده کنید 

در حالت عادی، این ای پی آی به دسترسی OAuth نیاز ندارد. در صورت گرفتن دسترسی، می‌توانید به عکس‌های آگهی قبل از انتشار در دیوار دسترسی داشته باشید.

در صورتی که فیلدی در پاسخ وجود نداشته باشد به معنی صفر بودن مقدار آن هست. برای مثال، در صورتی که فیلد `chat_enabled` در پاسخ نباشد، به این معنی است که چت برای آگهی فعال نیست.


### درخواست

```http request
GET https://api.divar.ir/v1/open-platform/finder/post/{{token}}
x-api-key: {{apikey}}
```

### پاسخ

شامل اطلاعات یکسانی از پست در بخش جستجوی پست می‌باشد 

```json
{
    "token": "AZir15UU",
    "category": "mobile-phones",
    "city": "tehran",
    "district": "nazi-abad",
    "chat_enabled": true,
    "data": {
        "brand_model": "samsung galaxy j2",
        "color": "gold",
        "description": "بدون هیچ ایرادی   سالم سالم  \nبهمراه کارتن شارژر",
        "expire_days": 31,
        "images": [
            "https://s101.divarcdn.com/static/live-post-image/127de243-e80d-4896-a05c-41f322ad2cfd.jpg",
            "https://s101.divarcdn.com/static/live-post-image/68bb821b-7a61-4270-b9a8-a03cf53ae4eb.jpg",
            "https://s101.divarcdn.com/static/live-post-image/317a1376-b2c1-4a39-a4a5-2a4b6ea23743.jpg"
        ],
        "internal_storage": "8GB",
        "new_price": 1100000,
        "originality": "original",
        "prefilled_title": "سامسونگ Galaxy J2 با حافظهٔ ۸ گیگابایت",
        "price": {
            "mode": "مقطوع",
            "value": 1100000
        },
        "ram_memory": "1GB",
        "sim_card_slot": "2",
        "status": "used",
        "title": "سامسونگ Galaxy J2 با حافظهٔ ۸ گیگابایت"
    }
}
```

# دریافت عکس‌های آگهی قبل از انتشار

| Get Post          |                         |
|-------------------|-------------------------|
| Permissions       | GET_POST                |
| OAuth Permissions | POST_ONGOING_IMAGES_GET |
| Resource ID       | post_token              |
| Default Rate      | 10K R/WEEK              |

در حالت عادی، این ای پی آی به دسترسی OAuth نیاز ندارد. در صورت گرفتن دسترسی، می‌توانید به عکس‌های آگهی قبل از انتشار در دیوار دسترسی داشته باشید.


### درخواست

```http request
GET https://api.divar.ir/v1/open-platform/finder/post/{{token}}
x-api-key: {{apikey}}
x-access-token: {{access_token}}
```

### پاسخ

شامل اطلاعات یکسانی از پست در بخش جستجوی پست میباشد 

```json
{
  "token": "AZir15UU",
  "category": "mobile-phones",
  "city": "tehran",
  "district": "nazi-abad",
  "chat_enabled": true,
  "data": {
    "brand_model": "samsung galaxy j2",
    "color": "gold",
    "description": "بدون هیچ ایرادی   سالم سالم  \nبهمراه کارتن شارژر",
    "expire_days": 31,
    "images": [
      // ongoing images
      "https://s101.divarcdn.com/static/live-post-image/127de243-e80d-4896-a05c-41f322ad2cfd.jpg",
      "https://s101.divarcdn.com/static/live-post-image/68bb821b-7a61-4270-b9a8-a03cf53ae4eb.jpg",
      "https://s101.divarcdn.com/static/live-post-image/317a1376-b2c1-4a39-a4a5-2a4b6ea23743.jpg"
    ],
    "internal_storage": "8GB",
    "new_price": 1100000,
    "originality": "original",
    "prefilled_title": "سامسونگ Galaxy J2 با حافظهٔ ۸ گیگابایت",
    "price": {
      "mode": "مقطوع",
      "value": 1100000
    },
    "ram_memory": "1GB",
    "sim_card_slot": "2",
    "status": "used",
    "title": "سامسونگ Galaxy J2 با حافظهٔ ۸ گیگابایت"
  }
}
```
