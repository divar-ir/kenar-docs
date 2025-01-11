 # ساخت بلیط

ساخت بلیط فقط از طریق سرویس پروایدر های داخلی دیوار امکان پذیر است. مراحل برای ساخت بلیط و فرستادن سمت سرویس پروایدر‌های خارجی:

0. هماهنگی با تیم پلتفرم دیوار
1. ساخت یک اپ در سرویس کنار 
2. ساخت apikey در پنل کنار برای فراخوانی اندپوینت ساخت تیکت با پرمیشن PAYMENT_TICKET_GENERATE.
3. فراخوانی اندپوینت `Generate` از سرویس `PaymentTicket` برای ساخت تیکت. برای فراخوانی توابع پلتفرم دیوار، نیاز است تا در متادیتای ریکوئست دو فیلد `x-app-slug` و `x-api-key-id` قرار داده شود.
۴- قرار دادن این تیکت در body ریکوئست ListPostServiceProviders
در مسیج ListPostServiceProvidersRequest یک فیلد آپشنال به نام `ticket_uuid` قرار دارد که میتوان این فیلد را با مقدار تیکت ساخته شده از اندپوینت قبلی ، پر کرد. با پر کردن این فیلد ، سرویس پروایدر خارجی از نمایش درگاه پرداخت به کاربر جلوگیری میکند و در هنگام ساخت افزونه ی کاربر ،‌این تیکت باطل میشود.

### ریکوئست
```go
metadata = (('x-app-slug', 'test'),('x-api-key-id', '110'))
```

```go
req := &pb.GenerateRequest{
    DivarUserId: "sample_divar_user_id",
    ServiceType: pb.ServiceType_REPORT_VERIFICATION,
    MaxAmountSponsored: 10000,
}

// or the deprecated version
req := &pb.GenerateRequest{
    Phone: "09990000000", // deprecated
    ServiceType: pb.ServiceType_REPORT_VERIFICATION,
    MaxAmountSponsored: 10000,
}
```
```go
stub.Generate(request=req)
```

- فیلد `x-api-ket-id` برابر با آیدی `api key` است که با پرمیشن ساخت بلیط ساخته شده است.
- فیلد `x-app-slug` برابر با `slug` اپ ساخته شده در پنل کناز است.
- فیلد `phone_number` می‌تواند با شماره کاربری که میخواهیم احراز رایگان را انجام دهد پر شود یا در صورت استفاده از 
  `divar_user_id` خالی باشد. 
- فیلد `divar_user_id` برابر با شناسه کاربر در دیوار است.
- فیلد `service_type` برابر با نوع سرویس مورد استفاده است. برای سرویس احراز این مقدار برابر با `REPORT_VERIFICATION` می‌باشد.
- فیلد `max_amount_sponsored` برابر با حداکثر مقدار مدنظر برای هزینه ی احراز به ریال است. 

### ریسپانس
```json
{
    "ticket_uuid": "4ddaff7e-275a-4928-9d4a-25765114fa3b"
}
```