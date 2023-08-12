# جستجوی آگهی

| Search Post  |             |
|--------------|-------------|
| Permissions  | SEARCH_POST |
| Default Rate | 10K R/WEEK  |

برای یافتن آگهی و ویژگی‌های عمومی آن از طریق جستجوی دیوار
و تنظیم فیلترهای مناسب میتوان به لیست کوتاه آگهی دست یافت

```http request
POST https://api.divar.ir/v1/open-platform/finder/post
Content-Type: application/json
x-api-key: {{apikey}}

{
    "city": "tehran",
    "category": "light",
    "districts": ["abshar"],
    "query": {
        "brand_model": {
            "value": ["Pride 111 EX"]
        },
        "production-year": {
            "min": 1385,
            "max": 1390
        },
        "usage": {
            "max": 200000
        }
    }
}
```

- [لیست شهرهای قایل جستجو](../assets/assets.md#شهرها)
- [لیست محله‌های قابل فیلتر](../assets/assets.md#محلهها)
- [لیست برندمدل‌های قابل فیلتر](../assets/assets.md#برندمدلها)
