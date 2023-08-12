# است‌ها

است‌ها مقادیر اینام‌های پرکاربرد دیوار هستند که برای تولید افزونه یا خواندن
منابعی که از دیوار دریافت میکنید کاربرد دارند. برای مثال در جستجوی آگهی برای
فیلتر کردن روی مقادیر برند-مدل خودرو از است برند-مدل میتوانید گزینه‌های موجود را دریافت کنید.

> اگرچه مقادیر است به ندرت تغییر میکنند، اما تضمینی برای ثابت ماندن ریسپانس نیست و هر زمان و بدون اطلاع تغییر خواهد کرد.
> اما ساختمان داده دارای تغییر شکننده نخواهد بود.

## دسته‌بندی‌ها

درخواست

```http
GET https://api.divar.ir/v1/open-platform/assets/category
```

پاسخ

```json5
{
    "categories": [
        {
            "display": "دسته بندی اصلی",
            "slug": "root"
        },
        {
            "display": "دسته بندی اصلی - املاک",
            "slug": "real-estate"
        },
        // ...
    ]
}
```

## شهرها

درخواست

```http
GET https://api.divar.ir/v1/open-platform/assets/city
```

پاسخ

```json5
{
    "cities": [
        {
            "display": "آبادان",
            "slug": "abadan"
        },
        {
            "display": "آباده",
            "slug": "abadeh"
        },
        /// ...
    ]
}
```

> ممکن است در سایر قسمت‌های دیوار مقادیر عددی یا city_id مشاهده کنید. این مقادیر در کنار دیوار کاربردی ندارند و نباید
> استفاده شوند.

## محله‌ها

درخواست

```http request
GET https://api.divar.ir/v1/open-platform/assets/district
```

پاسخ

```json5
{
    "districts": [
        {
            "display": "آبشار",
            "slug": "abshar"
        },
        // ...
    ]
}
```

برای دریافت محله‌های یک شهر خاص میتوان آنرا از طریق فانکشن زیر دریافت کرد

```http request
GET https://api.divar.ir/v1/open-platform/assets/district/tehran
```

## برندمدل‌ها

ریکوئست

```http request
GET https://api.divar.ir/v1/open-platform/assets/brand-model/{{category}}
```

فقط دسته‌بندی‌های `light` و `mobile-phones` دارای برندمدل هستند.

ریسپانس

```json5
{
    "brand_models": [
        {
            "display": "همه‌ی برند‌ها",
            "slug": "ROOT"
        },
        {
            "display": "آئودی",
            "slug": "Audi"
        },
        /// ...
    ]
}
```
