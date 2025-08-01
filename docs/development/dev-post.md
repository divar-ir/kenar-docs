# آگهی تستی (Development Post)

آگهی‌های تستی ابزاری ضروری برای آزمایش تعامل برنامه شما با آگهی‌های دیوار هستند. این آگهی‌ها در یک محیط ایزوله ساخته می‌شوند و به شما اجازه می‌دهند تمام قابلیت‌های اپلیکیشن خود، مانند افزودن افزونه یا تعامل در چت را، بدون تاثیر بر آگهی‌های واقعی، تست کنید.

:::tip نکته کلیدی
**برنامه‌های تستی (Development Apps) فقط می‌توانند با آگهی‌های تستی تعامل داشته باشند.**
:::

## چگونه یک آگهی تستی بسازیم؟

برای ساخت آگهی تستی، به پنل توسعه‌دهندگان کنار مراجعه کنید:

<p style={{textAlign: 'center'}}>
    <a href="https://divar.ir/kenar/management/development-posts" className="button button--primary button--lg">مدیریت آگهی‌های تستی</a>
</p>

در این صفحه، روی دکمه **«ساخت آگهی جدید»** کلیک کنید تا فرآیند ساخت آغاز شود.

## محدودیت‌ها و قوانین

لطفاً پیش از ساخت آگهی تستی به محدودیت‌های زیر توجه کنید:

:::caution قوانین مهم

- **ظرفیت آگهی فعال:** شما می‌توانید به طور همزمان حداکثر **۱۰ آگهی تستی فعال** داشته باشید.
- **محدودیت ساخت روزانه:** برای جلوگیری از استفاده بی‌رویه، محدودیت‌های ساعتی و روزانه برای ساخت آگهی‌های جدید وجود دارد.
  :::

## ویژگی‌ها و رفتار

آگهی‌های تستی در چند مورد کلیدی با آگهی‌های واقعی تفاوت دارند:

### ۱. عدم نمایش عمومی

آگهی‌های تستی در لیست‌های عمومی دیوار (مانند صفحه اصلی یا نتایج جستجو) نمایش داده **نمی‌شوند**. آن‌ها فقط از طریق لینک مستقیم و برای توسعه‌دهندگان قابل مشاهده هستند.

### ۲. فیلدهای محدود

برخلاف آگهی‌های واقعی، شما **نمی‌توانید** تمام فیلدهای یک آگهی تستی را به دلخواه تعیین کنید. در هنگام ساخت، تنها می‌توانید از میان تعداد محدودی از دسته‌بندی‌های از پیش تعریف‌شده انتخاب کنید و فیلدهای دیگر به صورت خودکار پر می‌شوند.

### ۳. فرآیند بررسی و چرخه حیات

:::info فرآیند بررسی مشابه آگهی واقعی است
ویرایش آگهی‌های تستی، دقیقاً مشابه آگهی‌های واقعی، وارد فرآیند بررسی (Review) تیم دیوار می‌شود.

این بدان معناست که آگهی شما ممکن است pending_payment (در حال پرداخت) درآید. در این حالت‌ها، آگهی همچنان یکی از **۱۰ اسلات فعال** شما را اشغال می‌کند تا زمانی که وضعیت آن به`retired`(منقضی) یا`archived` (حذف) تغییر کند.
:::

<p>
    برای درک کامل وضعیت‌های مختلف یک آگهی (مانند `published`, `pending`, `archived`) و چرخه حیات آن، مطالعه مستندات زیر ضروری است:
    <br/>
    <a href="/docs/divar/post"><b>راهنمای چرخه حیات آگهی (Post Lifecycle)</b></a>
</p>
