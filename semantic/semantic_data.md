# اطلاعات معنایی

در هنگام ساخت افزونه می‌‌توانید اطلاعات معنایی دربارهٔ افزونه خود بدهید تا از این اطلاعات در تیم های داخلی استفاده شود.
این اطلاعات به دو روش از شما دریافت می‌شود:
## اطلاعات معنایی ویجت ها
اگر از `api` های با قابلیت ویجت استفاده میکنید، می‌ٰتوانید به اطلاعاتی که در ویجت ها استفاده کرده‌اید اشاره کنید. این مقادیر از ویجت شما استخراج و در کنار بقیه اطلاعات معنایی به صورت رمز نشده قرار داده می‌شوند.
برای اطلاعات بیشتر به [اینجا](/widgets#%D8%A7%D8%B7%D9%84%D8%A7%D8%B9%D8%A7%D8%AA-%D9%85%D8%B9%D9%86%D8%A7%DB%8C%DB%8C-%D9%88%DB%8C%D8%AC%D8%AA%DB%8C) مراجعه کنید.

## اطلاعات معنایی اضافی
برای اینکار کافیست اطلاعات معنایی رو به صورت یک ‍`json object` در فیلد `semantic` قرار دهید که تمام value های آن از تایپ `string` هستند. فیلد هایی که توسط تیم های دیواری از پیش تعیین شده باشند به صورت ساده و `plain` استخراج می‌شوند و بقیه فیلد ها به صورت کامل رمز و چکید‌ه‌سازی می‌شوند و تیم های داخلی به محتویات اصلی آن دسترسی نخواهند داشت.

### فیلد های تعیین شده

اطلاعات معنایی در صورتی استخراج و استفاده میشوند که کلید ها و مقدار های تعیین  شده را داشته باشند.

فیلد های زیر توسط تیم سرچ دیوار تعیین شده‌اند و با توجه به اپ شما **ممکن** است منجر به بدج شوند:

|            نام فیلد            |         مقدار مجاز         |                    توضیحات |
|:------------------------------:|:--------------------------:|---------------------------:|
|        `payment_method`        |          `SECURE`          |    توصیف نحوه پرداخت کاربر |
| `identity_verification_result` |   `FACE_AND_ID_MATCHED`    |  توصیف نتیجه‌ی احراز کاربر |
|   `post_verifcation_result`    | `POST_INFORMATION_MATCHED` |   توصیف نتیجه‌ی احراز آگهی |
|       `ownership_result`       |   `OWNERSHIP_CONFIRMED`    | توصیف نتیجه‌ی بررسی مالکیت |
|      `inspection_result`       |   `INSPECTION_APPROVED`    | توصیف نتیجه‌ی کارشناسی فنی |


### فیلد‌های مربوط به احراز

- فیلد `status` برای توصیف وضعیت احراز مقادیر مجاز : `SUCCEEDED`, `FAILED` ,`EXPIRED`
- فیلد `identity_verification_last_successful_stage` برای مشخص کردن آخرین مرحله موفق احراز هویت مقادیر مجاز : `IDENTITYVERIFICATIONSTAGE_NOT_STARTED`, `NATIONAL_INFO_VERIFICATION`, `IMAGE_VERIFICATION` ,`VIDEO_VERIFICATION`
- فیلد `identity_verification_failure_reason` برای مشخص کردن دلیل ناموفق بودن احراز هویت مقادیر مجاز : `IDENTITYVERIFICATIONSTAGE_NOT_STARTED`, `NATIONAL_INFO_VERIFICATION`, `IMAGE_VERIFICATION` ,`VIDEO_VERIFICATION`
- فیلد `car_verification_last_successful_stage` برای مشخص کردن آخرین مرحله موفق احراز مالکیت خودرو مقادیر مجاز : `CARVERIFICATIONSTAGE_NOT_STARTED`, `CARVERIFICATIONSTAGE_SHAHKAR`, `CAR_CARD_VERIFICATION` ,`CAR_MODEL_VERIFICATION`
- فیلد `car_verification_failure_reason` برای مشخص کردن دلیل ناموفق بودن احراز مالکیت خودرو مقادیر مجاز : `CARVERIFICATIONSTAGE_NOT_STARTED`, `CARVERIFICATIONSTAGE_SHAHKAR`, `CAR_CARD_VERIFICATION` ,`CAR_MODEL_VERIFICATION`

برای اضافه شدن فیلد جدید، به تیم دیواری مربوطه درخواست خود را اعلام کنید.
