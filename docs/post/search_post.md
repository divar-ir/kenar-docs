# جست و جوی آگهی

از این API می‌توانید برای جست و جوی آگهی در دیوار استفاده کنید. ورودی و خروجی این API مشابه جست و جوی دیوار است.

:::warning صفحه‌بندی (Pagination)
این API از صفحه‌بندی پشتیبانی نمی‌کند و همیشه حداکثر ۱۰۰ آگهی جدید (در صورت وجود) را برمی‌گرداند.
:::

## درخواست 

برای این درخواست، نیازی به توکن کاربر ندارید و فقط با استفاده از API Key می‌توانید این درخواست را ارسال کنید.
دقت کنید که دسترسی `SEARCH_POST` برای ارسال این درخواست ضروری است.

```HTTP request
POST https://open-api.divar.ir/v2/open-platform/finder/post
Content-Type: application/json
x-api-key: {{apikey}}

{
  "category": "light",
  "city": "tehran",
  "districts": ["abshar", "nazi-abad"],
  "query": {
    "brand_model": ["Pride 111 EX", "MVM 110"],
    "production_year": {
      "min": 1400,
      "max": 1403
    },
    "usage": {
      "min": 0,
      "max": 100000
    }
  }
}
```
```HTTP request
POST https://open-api.divar.ir/v2/open-platform/finder/post
Content-Type: application/json
x-api-key: {{apikey}}

{
  "category": "apartment-rent",
  "city": "tehran",
  "query": {
    "rent": {
      "min": 15500000,
      "max": 18500000
    },
    "size": {
        "min": 80,
        "max": 190
    },
    "rooms": [
        "یک"
    ],
    "only_with_parking": true
  }
}
```

| نام فیلد  |                نوع                | توضیح                                                                                              |
|:---------:|:---------------------------------:|----------------------------------------------------------------------------------------------------|
| category  |              string               | [دسته‌بندی‌ دیوار](https://divar.ir/kenar/api-doc#tag/assets/GET/v1/open-platform/assets/category) |
|   city    |              string               | [شهر دیوار](https://divar.ir/kenar/api-doc#tag/assets/GET/v1/open-platform/assets/city)            |
| districts |          array of string          | [محله‌های دیوار](https://divar.ir/kenar/api-doc#tag/assets/GET/v1/open-platform/assets/district)   |
|   query   | [SearchQuery](#فیلترهای-خاص-دسته) | فیلترهای خاص دسته.                                                                                 |

## فیلترهای خاص دسته
|     نام فیلد      |                        نوع                         | توضیح                                                                                                             |
|:-----------------:|:--------------------------------------------------:|-------------------------------------------------------------------------------------------------------------------|
|    brand_model    |                  array of string                   | [برندمدل‌های دیوار](https://divar.ir/kenar/api-doc#tag/assets/GET/v1/open-platform/assets/brand-model/{category}) |
|  production_year  |             [NumberRange](#بازه-عددی)              | فیلتر براساس بازه سال تولید.                                                                                      |
|       usage       |             [NumberRange](#بازه-عددی)              | فیلتر براساس بازه کارکرد.                                                                                         |
|       size        |             [NumberRange](#بازه-عددی)              | فیلتر براساس متراژ.                                                                                               |
|       rent        |             [NumberRange](#بازه-عددی)              | فیلتر براساس مقدار اجاره ماهیانه.                                                                                 |
|      credit       |             [NumberRange](#بازه-عددی)              | فیلتر براساس پول‌پیش (خانه).                                                                                      |
|       rooms       | array of [PersianNumberStrings](#رشته-اعداد-فارسی) | فیلتر براساس تعداد اتاق ها.                                                                                       |
| only_with_parking |                      boolean                       | اگر true ست شود فقط موارد دارای پارکینگ را نشان می‌دهد.                                                           |

## فیلترهای دسته‌ی موبایل
- `brand_model`

## فیلترهای دسته‌ی خودرو
- `brand_model`
- `production_year`
- `usage`

## بازه عددی
| نام فیلد |  نوع  | توضیح         |
|:--------:|:-----:|---------------|
|   min    | int64 | مقدار کمینه.  |
|   max    | int64 | مقدار بیشینه. |

## رشته اعداد فارسی
| اعداد |
|:-----:|
|  یک   |
|  دو   |
|  سه   |
| چهار  |
|  ...  |

## پاسخ

```json
{
  "posts": [
    {
      "token": "wZFdL0Vm",
      "category": "light",
      "last_modified_at": "2024-11-26T11:59:25.794428Z",
      "city": "tehran",
      "title": "چانگانcs55مدل2024",
      "price": {
        "mode": "مقطوع",
        "value": "100000000"
      },
      "vehicles_fields": {
        "usage": "10000"
      }
    }
  ]
}

```


| نام فیلد |               نوع               | توضیح              |
|:--------:|:-------------------------------:|--------------------|
|  posts   | array of [SearchPostItem](#پست) | لیست آیتم‌های پست. |

## پست
|             نام فیلد             |      نوع       | توضیح                                   |
|:--------------------------------:|:--------------:|-----------------------------------------|
|              token               |     string     | شناسه یکتا برای پست.                    |
|             category             |     string     | دسته‌بندی پست.                          |
|         last_modified_at         |   Timestamp    | زمان آخرین تغییرات پست.                 |
|               city               |     string     | شهری که پست در آن قرار دارد.            |
|              title               |     string     | عنوان پست.                              |
|              price               | [Price](#قیمت) | جزئیات قیمت پست.                        |
|        real_estate_fields        |     Object     | فیلدهای مروبط به دسته املاک             |
|         vehicles_fields          |     Object     | فیلدهای مروبط به دسته خودر.             |
|    electronic_devices_fields     |     Object     | فیلدهای مروبط به دسته وسایل الکترونیکی  |
|       home_kitchen_fields        |     Object     | فیلدهای مروبط به دسته خانه و آشپزخانه   |
|         services_fields          |     Object     | فیلدهای مروبط به دسته خدمات             |
|      personal_goods_fields       |     Object     | فیلدهای مروبط به دسته شخصی              |
|      leisure_hobbies_fields      |     Object     | فیلدهای مروبط به دسته سرگرمی و فراغت    |
|         community_fields         |     Object     | فیلدهای مروبط به دسته اجتماعی           |
| tools_materials_equipment_fields |     Object     | فیلدهای مروبط به دسته تجهیزات و صنعتی   |
|           jobs_fields            |     Object     | فیلدهای مروبط به دسته استخدام و کاریابی |

## قیمت
| نام فیلد |  نوع   | توضیح                         |
|:--------:|:------:|-------------------------------|
|   mode   | string | حالت قیمت‌گذاری.              |
|  value   | uint64 | مقدار قیمت به واحد پول تومان. |

