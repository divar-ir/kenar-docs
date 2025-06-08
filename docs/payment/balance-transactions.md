# موجودی و تراکنش‌ها

این مجموعه از API‌ها برای مدیریت موجودی و مشاهده تراکنش‌های برنامه‌ی شما استفاده می‌شود. با استفاده از این سرویس‌ها می‌توانید موجودی فعلی برنامه‌تان را بررسی کنید و جزئیات تراکنش‌ها را مشاهده نمایید.

## دسترسی‌های مورد نیاز

برای استفاده از این API‌ها فقط نیاز به کلید API با دسترسی‌های مناسب دارید:
- برای موجودی: دسترسی API Key با `BALANCE_RETRIEVE`
- برای تراکنش‌ها: دسترسی API Key با `TRANSACTION_RETRIEVE` و `TRANSACTION_LIST`

## مشاهده موجودی

```http request
GET https://open-api.divar.ir/experimental/open-platform/balance
x-api-key: {{apikey}}
```

### پاسخ موجودی

```json
{
    "balance_rials": "150000"
}
```

#### پارامترهای پاسخ

|     پارامتر     |  نوع   |           توضیحات |
|:---------------:|:------:|------------------:|
| `balance_rials` | int64  | موجودی برنامه به ریال |

## مشاهده جزئیات تراکنش

```http request
GET https://open-api.divar.ir/experimental/open-platform/transactions/{{id}}
x-api-key: {{apikey}}
```

### پارامترهای درخواست

| پارامتر |  نوع   | اجباری |                                   توضیحات |
|:-------:|:------:|:-------:|------------------------------------------:|
|  `id`   | string |   بله   | شناسه منحصر به فرد تراکنش، همان id درخواست |

### پاسخ جزئیات تراکنش

```json
{
    "transaction": {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "cost_rials": 50000,
        "extra_details": "Details for tracking purposes",
        "state": "TRANSACTION_STATE_COMPLETED",
        "type": "TRANSACTION_TYPE_REORDER",
        "created_at": "2023-10-20T10:30:00Z"
    }
}
```

## لیست تراکنش‌ها

```http request
GET https://open-api.divar.ir/experimental/open-platform/transactions?page_size=100&page_token={{next_page_token}}
x-api-key: {{apikey}}
```

### پارامترهای درخواست

|   پارامتر    |  نوع   | اجباری |                        توضیحات |
|:------------:|:------:|:-------:|-------------------------------:|
| `page_size`  | int32  |  خیر   | تعداد تراکنش‌ها در هر صفحه (۱ تا ۱۰۰) |
| `page_token` | string |  خیر   |        توکن برای صفحه بعدی نتایج |

### پاسخ لیست تراکنش‌ها

```json
{
    "transactions": [
        {
            "id": "550e8400-e29b-41d4-a716-446655440000",
            "cost_rials": 50000,
            "extra_details": "Details for tracking purposes",
            "state": "TRANSACTION_STATE_COMPLETED",
            "type": "TRANSACTION_TYPE_REORDER",
            "created_at": "2023-10-20T10:30:00Z"
        }
    ],
    "next_page_token": "eyJwYWdlIjoyLCJsaW1pdCI6MjB9"
}
```

#### پارامترهای پاسخ

|      پارامتر      |      نوع      |                          توضیحات |
|:-----------------:|:-------------:|---------------------------------:|
|  `transactions`   | Transaction[] | لیست تراکنش‌های منطبق با درخواست |
| `next_page_token` |    string     |        توکن برای صفحه بعدی نتایج |

## شیء Transaction

|     پارامتر     |    نوع    |                                     توضیحات |
|:---------------:|:---------:|--------------------------------------------:|
|      `id`       |  string   |        همان uuid که در درخواست ایجاد تراکنش |
|  `cost_rials`   |   int64   |      هزینه تراکنش به ریال برای برنامه‌ی شما |
| `extra_details` |  string   | همان جزئیات اضافی که در درخواست ارسال کردید |
|     `state`     |   State   |                                وضعیت تراکنش |
|     `type`      |   Type    |                                  نوع تراکنش |
|  `created_at`   | Timestamp |                           زمان ایجاد تراکنش |

### انواع وضعیت تراکنش (State)

|             وضعیت             |        توضیحات |
|:-----------------------------:|---------------:|
|  `TRANSACTION_STATE_PENDING`  |      در انتظار |
| `TRANSACTION_STATE_COMPLETED` |      تکمیل شده |
|  `TRANSACTION_STATE_FAILED`   |         ناموفق |
| `TRANSACTION_STATE_REFUNDED`  | برگشت داده شده |

### انواع تراکنش (Type)

|            نوع             | توضیحات |
|:--------------------------:|--------:|
| `TRANSACTION_TYPE_REORDER` |  نردبان |

## نکات مهم

- برای دریافت تمام تراکنش‌ها، صفحات را دنبال کنید تا لیست خالی دریافت کنید
- موجودی برنامه‌ی شما پس از هر تراکنش موفق به‌روزرسانی می‌شود
- تراکنش‌های `REFUNDED` مبلغ آن‌ها به موجودی شما برگردانده شده است
- تراکنش‌های `FAILED` هیچ تأثیری بر موجودی شما ندارند
- تراکنش‌های `PENDING` در حال انجام یا بررسی هستند. مبلغ این تراکنش‌ها از کیف پول شما برداشته شده است و پس از مشخص شدن وضعیت تراکنش، به روز خواهد شد