# پنهان‌سازی مضاعف مقادیر حساس

از آنجا که حساسیت حفظ اطلاعات شخصی کاربران دیوار بالاترین اولویت ماست، لازم است پیش از قرار دادن کلیدهای سمنتیک زیر در افزونه، این مقادیر یک مرحله در سرور شما هش شوند.

دیوار از این مقادیر هش شده برای یکتاسازی احرازها استفاده میکند. به همین دلیل لازم است یک ورودی ثابت در سرویس پروایدرهای مختلف، منجر به هش‌های یکسانی شوند.

تست کیس:

| VIN               | sha256 hash hex                                                     |
|-------------------|---------------------------------------------------------------------|
| IRJC95R23KJ039206 | e0c01d18d946a4145892bba6a6f31d1c0bc16de04f3df3d3ccd3adfe63e838bf    |
| IRJC95r23kj039206 | e0c01d18d946a4145892bba6a6f31d1c0bc16de04f3df3d3ccd3adfe63e838bf    |
| IRJC95r۲۳kj039206 | e0c01d18d946a4145892bba6a6f31d1c0bc16de04f3df3d3ccd3adfe63e838bf    |

## سمنتیک‌های تاثیرپذیر

- VIN
- chassis_number
- engine_number
- real_estate_id

## قواعد تمیزکاری

- همه اعداد به ascii تبدیل شوند و کاراکتر‌های فارسی یا عربی در رشته نباشد.
- حروف انگلیسی کپیتال شوند.
- در ابتدا یا انتهای رشته حرف خالی یا اسپیس نباشد.
- مقدار هش شده عینا برابر مقدار مندرج روی کارت ماشین یا سند باشد و پیشوند یا پسوند از آن کاسته نشود.

## تولید و مقایسه مقادیر

برای تولید مقادیر تست کیس بیشتر و صحت‌سنجی پیاده‌سازی خود، میتوانید از اسکریپت زیر استفاده کنید.

```python
import hashlib

def persian_numbers_to_ascii(text):
    persian_to_ascii = {
        '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
        '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9'
    }
    return ''.join(persian_to_ascii.get(ch, ch) for ch in text)

def sha256_vin(vin):
    vin_clean = persian_numbers_to_ascii(vin.strip().upper())
    hash_object = hashlib.sha256(vin_clean.encode('utf-8'))
    return hash_object.hexdigest()

vin_input = input("Enter car VIN (can contain Persian numbers and letters): ")
vin_hash = sha256_vin(vin_input)
print(f"SHA-256 hash of processed VIN: {vin_hash}")
```
