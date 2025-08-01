# محدودیت‌های API و Rate Limit

برای تضمین پایداری و کیفیت سرویس (QoS) برای تمام توسعه‌دهندگان، **خدمات‌دهندگان کنار دیوار** و **تیم‌های داخلی دیوار**، تمام درخواست‌های API در پلتفرم «کنار» مشمول محدودیت‌هایی هستند. این محدودیت‌ها از استفاده بیش از حد و ناخواسته از منابع جلوگیری کرده و تجربه‌ای یکسان و پایدار را برای همه فراهم می‌کنند.

دو نوع محدودیت اصلی وجود دارد: **محدودیت دقیقه‌ای** و **سهمیه روزانه**.

## انواع محدودیت‌ها

### ۱. محدودیت دقیقه‌ای (Minutely Rate Limit)

این محدودیت به تعداد درخواست‌هایی اشاره دارد که برنامه شما می‌تواند در هر دقیقه ارسال کند.

- **نوع:** سراسری و به ازای هر برنامه (Global & Per-App).
- **قابلیت تنظیم:** این محدودیت **غیر قابل تنظیم** است و برای تمام برنامه‌ها به صورت یکسان اعمال می‌شود تا از سلامت کلی پلتفرم محافظت شود.

### ۲. سهمیه روزانه (Daily Quota)

این محدودیت، تعداد کل درخواست‌هایی است که برنامه شما می‌تواند در یک بازه ۲۴ ساعته ارسال کند.

- **نوع:** به ازای هر برنامه (Per-App).
- **قابلیت تنظیم:** این سهمیه بر اساس نوع برنامه (تستی یا Production)، موارد استفاده (Use Case) و راهنماهای کلی «کنار» تعیین می‌شود و **قابل افزایش** است.
- **بازنشانی (Reset):** سهمیه روزانه هر روز به صورت خودکار ریست می‌شود.

## مشاهده محدودیت‌های برنامه

شما می‌توانید مقادیر دقیق محدودیت دقیقه‌ای و سهمیه روزانه برنامه خود را در پنل توسعه‌دهندگان مشاهده کنید:

1.  به صفحه **[مدیریت برنامه‌ها](https://divar.ir/kenar/management/apps)** بروید.
2.  برنامه مورد نظر را پیدا کرده و روی دکمه **«دسترسی‌ها»** کلیک کنید.

## خطای `429 Too Many Requests`

در صورتی که برنامه شما از محدودیت دقیقه‌ای یا سهمیه روزانه عبور کند، سرور با کد وضعیت HTTP `429 Too Many Requests` به درخواست شما پاسخ خواهد داد. بدنه پاسخ (Response Body) شامل جزئیات بیشتری درباره نوع محدودیت نقض‌شده خواهد بود.

## اعلان‌ها و درخواست افزایش سهمیه

### برنامه‌های منتشر شده

برای کمک به مدیریت مصرف، هنگامی که برنامه **Production** شما به **۸۰٪ از سهمیه روزانه** خود برسد، یک ایمیل اطلاع‌رسانی برای شما ارسال خواهد شد.

اگر به دلیل رشد کسب‌وکار یا افزایش تعداد کاربران نیاز به سهمیه بیشتری دارید، می‌توانید از طریق سیستم تیکتینگ درخواست خود را ثبت کنید. در تیکت خود حتماً **دلیل قانع‌کننده‌ای برای این رشد** ارائه دهید. تیم کنار پس از بررسی جزئیات و موارد استفاده، در مورد افزایش سهمیه تصمیم‌گیری خواهد کرد.

<p style={{textAlign: 'center'}}>
    <a href="https://divar.ir/kenar/management/issues/new" className="button button--primary">ثبت تیکت برای افزایش سهمیه</a>
</p>

### برنامه‌های تستی

تمام برنامه‌های تستی به صورت پیش‌فرض دارای سهمیه روزانه یکسانی هستند. در موارد خاص و با ارائه **دلایل معتبر**، امکان افزایش این سهمیه وجود دارد. درخواست شما باید با **راهنماها و قوانین کلی دیوار و کنار** مطابقت داشته باشد.

## تفاوت دسترسی‌ها: تستی در مقابل منتشر شده

یک تفاوت کلیدی دیگر بین برنامه‌های تستی و منتشر شده، نحوه تخصیص دسترسی‌های OAuth (OAuth Scopes) است.

- ✅ **برنامه‌های تستی (Development):** به صورت پیش‌فرض به **تمام دسترسی‌های OAuth** دسترسی دارند تا فرآیند توسعه و تست را برای شما آسان کنند.

- 🔒 **برنامه‌های منتشر شده (Production):** برای هر دسترسی OAuth باید به صورت جداگانه و از طریق **سیستم تیکتینگ** درخواست دهید. هر دسترسی تنها در صورتی تایید می‌شود که با موارد استفاده (Use Case) برنامه شما همخوانی داشته باشد.

:::danger نکته بسیار مهم
پیش از درخواست دسترسی برای برنامه ، اطمینان حاصل کنید که عملکرد مورد نظر شما در مستندات توضیح داده شده و با قوانین پلتفرم مطابقت دارد.
:::
