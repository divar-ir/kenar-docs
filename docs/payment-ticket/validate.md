# اندپوینت ولیدیت تیکت

سرویس پروایدر باید از صحت تیکت پیش از استفاده از آن، اطمینان حاصل کند و دیوار در قبال تیکت نامعتبر پاسخگو نیست. البته که صدازدن این تابع تیکت را قفل نمیکند و به دفعات دلخواه میتوانید بررسی کنید.

### ریکوئست

```http request
POST https://api.divar.ir/v1/open-platform/payment-ticket/validate
Content-Type: application/json
x-api-key: {{apikey}}

{
    "ticket_uuid": "6ca5ba03-f3a1-4761-9c60-8760f442a352", 
    "user_id": "sample_divar_user_id",
    "phone_number": "099800000",  // not required if user_id is provided
    "service_cost": 104000
}
```
-   حداقل یکی از فیلد های `user_id` یا `phone_number` باید پر شود.
-   فیلد‌های `service_cost` و `ticket_uuid` اجباری هستند.
-  گرفتن oauth شماره کاربر به منظور چک کردن تیکت پشنهاد نمی‌شود زیرا می‌توانید از `user_id` استفاده کنید که سبب بالا 
   رفتن conversion rate می‌شود.(برای به دست آوردن هر کدام از این دو مورد باید از oauth استفاده کنید)
- فیلد service_cost برابر با قیمت سرویس خود سرویس پروایدر به ریال است. 

### ریسپانس
```http request
{}
```
### خطاها

| توضیحات                                                        | متن خطا                                        | نوع خطا             | استتوس کد | شماره |
|----------------------------------------------------------------|------------------------------------------------|---------------------|-----------|-------|
| فیلد x-api-key ولید نمی‌باشد                                   | could not retrieve app from db                 | Precondition Failed | 412       | 1     |
| فیلد phone_number پر نشده باشد.                                | user_identifier is required                    | Bad Request         | 400       | 2     |
| قیمت سرویس مقصد از مقدار اسپانسر شده توسط دیوار بیشتر باشد.    | Actual cost is more than sponsored amount      | Bad Request         | 400       | 3     |
| بلیط برای شماره دیگری صادر شده باشد.                           | phone number not match with ticket phone       | Not Found           | 404       | 4     |
| بلیط برای سرویس تایپ دیگری صادر شده باشد.                      | App service_type not match ticket service_type | Not Found           | 404       | 5     |
| بلیط از قبل خرج شده باشد یا به طور کلی شناسه بلیط اشتباه باشد. | Not found ticket                               | Not Found           | 404       | 6     |


> در خطا های ۳ تا ۶ باید به کاربر ارور مناسب نمایش داده شود و از ادامه فرایند جلوگیری شود.
