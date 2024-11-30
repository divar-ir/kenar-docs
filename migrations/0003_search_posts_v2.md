# تغییرات

API جدید برای جست و جوی پست‌ها منتشر شده است و API قبلی منسوخ شده است.

تغییرات این API شامل تغییر در آدرس، ساختار درخواست و پاسخ‌ها است.

```diff
POST https://api.divar.ir/
-v1
+v2
/open-platform/finder/post
Content-Type: application/json
x-api-key: {{apikey}}

{
-    "city": "tehran",
     "category": "light",
     "districts": ["abshar", "nazi-abad"],
     "query": {
-        "brand_model": {
-            "value": ["Pride 111 EX", "MVM 110"]
-        },
+        "brand_model": ["Pride 111 EX", "MVM 110"],
         "production- year": {
             "min": 1385,
             "max": 1390
         },
         "usage": {
             "min": 0,
             "max": 100000
         }
     }
}
```

