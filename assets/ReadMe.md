# اَسِت‌ها assets

است‌ها مقادیر اینام‌های پرکاربرد دیوار هستند که برای تولید افزونه یا خواندن
منابعی که از دیوار دریافت میکنید کاربرد دارند. برای مثال در جستجوی آگهی برای
فیلتر کردن روی مقادیر برند-مدل خودرو از است برند-مدل میتوانید گزینه‌های موجود را دریافت کنید.

> اگرچه این مقادیر ثابت هستند و به ندرت تغییر میکنند، اما تضمینی برای ثابت ماندن پاسخ دریافتی نیست و ممکن است هر زمان و بدون اطلاع تغییر کنند.
> البته ساختمان دادهٔ پاسخ، تغییری که باعث بروز خطا شود، نخواهد داشت.

## دسته‌ها

درخواست

```http
GET https://api.divar.ir/v1/open-platform/assets/category
```

نمونهٔ پاسخ

```JSON
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

نمونهٔ پاسخ

```JSON
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

نمونهٔ پاسخ

```JSON
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

### محله‌های یک شهر
می‌توانید محله‌های شهرهای زیر را از آدرسی که در ادامه می‌بینید دریافت کنید:
- tehran
- karaj
- mashhad
- isfahan
- shiraz
- rasht
- qom
- ahvaz

```http request
GET https://api.divar.ir/v1/open-platform/assets/district/{{city}}
```

> سایر شهرهای دیوار دارای محله نیستند.

## برند-مدل‌ها

در دسته‌های `light` برای خودرو و `mobile-phones` برای کالاهای دیجیتال می‌توانید از آدرس زیر لیست برند‌مدل‌ها را دریافت کنید:

```http request
GET https://api.divar.ir/v1/open-platform/assets/brand-model/{{category}}
```

نمونهٔ پاسخ

```JSON
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

## رنگ‌ها

مشابه برند-مدل، برای دسته‌بندی‌های `light` و `mobile-phones` می‌توانید لیست رنگ‌های موجود در دیوار را از آدرس زیر دریافت کنید.

```http request
GET https://api.divar.ir/v1/open-platform/assets/color/{{category}}
```
نمونه پاسخ

```JSON
{
    "colors": [
        {
            "display": "آبی",
            "slug": "آبی"
        },
        {
            "display": "آلبالویی",
            "slug": "آلبالویی"
        },
        /// ...
    ]
}
```

## حافظه‌داخلی

```http request
GET https://api.divar.ir//v1/open-platform/assets/internal-storage
```

نمونهٔ پاسخ

```JSON
{
    "internal_storages": [
        {
            "display": "مطرح نیست",
            "slug": "irrelevant"
        },
        {
            "display": "۵۱۲ مگابایت",
            "slug": "512MB"
        },
        /// ...
      ]
}
```

## رم‌مموری‌

```http request
GET https://api.divar.ir//v1/open-platform/assets/ram-memory
```


نمونهٔ پاسخ

```JSON
{
    "ram_memories": [
        {
            "display": "مطرح نیست",
            "slug": "irrelevant"
        },
        {
            "display": "۵۱۲ مگابایت",
            "slug": "512MB"
        },
        /// ...
      ]
}
```

## وضعیت‌بدنه

```http request
GET https://api.divar.ir//v1/open-platform/assets/body-status
```

نمونهٔ پاسخ

```JSON
{
    "body_status": [
        {
            "display": "سالم و بی‌خط و خش",
            "slug": "intact"
        },
        {
            "display": "خط و خش جزیی",
            "slug": "some-scratches"
        },
        /// ...
      ]
}
```
