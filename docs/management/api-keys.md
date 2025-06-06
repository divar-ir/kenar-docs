# کلیدهای API

هر درخواستی که از یک اپلیکیشن به سرورهای دیوار زده می‌شود می‌بایست شامل رشته (string) مشخصی به نام «کلید API» یا «API Key» باشد. سرورهای دیوار از طریق این کلید می‌فهمند درخواست از سمت کدام اپلیکیشن ارسال شده‌است. درخواست‌های بدون کلید رد خواهند شد.

👈 کلید API را در هدر `x-api-key` درخواست‌های خود قرار دهید:

```http request
POST https://open-api.divar.ir/v1/open-platform/finder/post/{{token}}
x-api-key: {{apikey}}
```

<br />

## ساختن کلید جدید

۱. به [صفحه‌ی مدیریت برنامه‌ها در پنل کنار][پنل کنار » مدیریت برنامه‌ها] بروید. \
۲. وارد صفحه جزئیات برنامه خود شوید. \
۳. روی دکمهٔ «کلیدهای API» کلید کنید.\
۴. روی دکمهٔ «ساخت کلید جدید» کلیک کنید.\
۵. عنوانی برای کلید جدید خود انتخاب کنید و کلید خود را بسازید.\
۶. مقدار کلیدی که به شما داده می‌شود را ذخیره کنید و در جایی امن نگه‌داری کنید.\
<br />

> ⚠️ **_دقت کنید!_**
>
> در پنل کنار، مقدار یک کلید را تنها در هنگام ساختن آن می‌توانید ببینید، حتما مقدار کلید را قبل از اتمام ساخت کلید کپی کرده و در جای امنی ذخیره کنید. این قاعده برای تامین امنیت شماست: با دسترسی به کلید API هر کس می‌تواند خود را به جای شما جا بزند!

<br />

## امنیت کلیدها

اشخاص ثالث با دسترسی به کلیدهای API شما می‌توانند به جای شما، و با هویت شما، در **کنار دیوار**‌ فعالیت کرده و با کاربرها تعامل کنند. در نتیجه حفظ امنیت کلیدهای API بسیار مهم است. **_مسوولیت هرگونه سوءاستفاده از کلیدهای API شما، بر عهده‌ی خود شماست._** برای حفظ امنیت کلیدها به نکات زیر توجه کنید:

<br />

### 🔐 نگهداری کلیدها

برای امنیت شما، در پنل کنار، مقدار کلید را صرفا هنگام ساختن کلید می‌توانید ببینید. مطمئن شوید کلید را در جای امنی ذخیره کرده‌اید.

---

**کلیدها را در کد ذخیره نکنید**❗ \
 از متغیرهای محیطی (Environment Variable)، فایل‌های کانفیگ یا ابزارهای مدیریت کلید استفاده کنید.

---

**کلیدها را در git ذخیره نکنید**❗ \
 اگر کلیدها را در فایل‌های کانفیگی نگه می‌دارید، مطمئن شوید این فایل‌ها توسط git (یا سایر ابزارهای مدیریت ورژن) کنترل نمی‌شوند. برای مثال، اگر از git استفاده می‌کنید، حتما این فایل‌ها را به [`.gitignore` پروژه‌ی خود][gitignore] اضافه کنید.

---

<br />

### 🛂 دسترسی‌های کلیدها

هر اپلیکیشن می‌تواند کلیدهای مختلف با [دسترسی‌های مختلف](#دسترسیهای-پرکاربرد) داشته باشد. مثلا یک کلید می‌تواند مختص [افزودن][راهنما » ساخت افزونه] و [حذف][راهنما » حذف افزونه] افزونه به آگهی باشد، درحالیکه کلید دیگری فقط دسترسی [دریافت اطلاعات کاربر][راهنما » اطلاعات کاربر] را دارد، و کلید دیگری دسترسی [ارسال پیام در چت][راهنما » ارسال پیام]. با توزیع دسترسی‌ها بین کلیدهای مختلف، ریسک افشای هر کلید را کاهش دهید.

- اگر کدبیس شما شامل سرویس‌های مختلف است، برای هر سرویس کلید مجزایی با کمینه‌ی دسترسی‌های مورد نیاز بسازید.
- برای تست و توسعه از کلیدهای مجزایی با دسترسی‌های محدود استفاده کنید.
- کلیدهای مورد استفاده برای تست و توسعه را به صورت منظم [حذف کنید](#حذف-کلید).

<br />

### 🕰️ چرخش کلیدها

برای کاهش ریسک افشای کلیدها، آن‌ها را به طور دوره‌ای [حذف کنید](#حذف-کلید). توصیه می‌شود کلیدهای خود را حداکثر هر ۶۰ روز پاک کنید و [کلیدهای جدیدی بسازید](#ساختن-کلید-جدید). به علاوه در صورت تغییر اعضای تیم، کلیدهایی که اعضای سابق به آن‌ها دسترسی داشته‌اند را حذف کنید.

<br />

## حذف کلید

۱. به [صفحه‌ی مدیریت کلیدها در پنل کنار][پنل کنار » مدیریت کلیدها] بروید. \
۲. کلید مورد نظر را برای تغییر انتخاب کنید.

<div align="left">
<img width="640" alt="Screenshot 2023-12-20 at 09 47 43" src="https://github.com/divar-ir/kenar-docs/assets/13572283/6f3bd05e-0028-45d3-b448-f28276619543"/></div>

۳. وضعیت کلید را به Revoked تغییر دهید.

<div align="left">
<img width="512" alt="Screenshot 2023-12-20 at 09 48 31" src="https://github.com/divar-ir/kenar-docs/assets/13572283/3f9bb04d-1224-4a43-9264-3f03df62bd1f"/></div>

۴. روی دکمه‌ی **Save** کلیک کنید. \
۵. در لیست کلیدها، از تغییر وضعیت کلید مطمئن شوید.

<div align="left">
<img width="640" alt="Screenshot 2023-12-20 at 09 47 50" src="https://github.com/divar-ir/kenar-docs/assets/13572283/571d131b-6555-4f9b-baa6-21c61784dcee"/></div>

<br />

## دسترسی‌های پرکاربرد

قابلیت‌های مختلف **کنار دیوار** (مثل [ساخت افزونه][راهنما » ساخت افزونه] یا [ارسال پیام در چت][راهنما » ارسال پیام]) نیازمند دسترسی‌های متفاوتی هستند، و کلیدی که در هدر `x-api-key` هر درخواست قرار می‌گیرد می‌بایست دسترسی‌های مورد نیاز را داشته باشد. در صفحه‌ی توضیحات هر قابلیت، دسترسی‌های مورد نیاز را می‌توانید ببینید. در جدول زیر لیست دسترسی‌های پرکاربرد را مشاهده کنید.

---

🛂 **فقط و فقط**‌ دسترسی‌های مورد نیاز را به هر کلید بدهید. توضیحات بیشتر در مورد امنیت کلیدها را [اینجا بخوانید](#امنیت-کلیدها).

---

<div align="right">

| قابلیت                                         | دسترسی                  | توضیحات                                             |
| ---------------------------------------------- | ----------------------- | --------------------------------------------------- |
| [ساخت افزونه][راهنما » ساخت افزونه]            | ADD_ON_CREATE           | نیازمند [دریافت اجازه از کاربر][راهنما » احراز باز] |
| [دریافت اطلاعات آگهی][راهنما » اطلاعات آگهی]   | GET_POST                |                                                     |
| [دریافت اطلاعات کاربر][راهنما » اطلاعات کاربر] | USER_RETRIEVE           | نیازمند [دریافت اجازه از کاربر][راهنما » احراز باز] |
| [ارسال پیام در چت][راهنما » ارسال پیام]        | CHAT_SEND_MESSAGE_OAUTH | نیازمند [دریافت اجازه از کاربر][راهنما » احراز باز] |

</div>

<br />

> 💡 لیست دسترسی‌هایی که می‌توانید به کلیدهای خود بدهید محدود به دسترسی‌هایی است که به اپلیکیشن شما داده شده است. در صورتی که نیاز به دسترسی‌ای دارید که در پنل کنار آن را نمی‌بینید، با ما تماس بگیرید تا دسترسی اپلیکیشن شما را گسترش دهیم.

[پنل کنار » مدیریت برنامه‌ها]: https://divar.ir/kenar/management/apps
[راهنما » ساخت افزونه]: ../addons/post_addons.md
[راهنما » اطلاعات کاربر]: ../oauth/get_user.md
[راهنما » ارسال پیام]: ../chat/users_conversations.md
[gitignore]: https://git-scm.com/docs/gitignore
[راهنما » احراز باز]: ../oauth
[راهنما » اطلاعات آگهی]: ../post/get_post.md

<br /><br />

<div align="center">

![Wire Puzzle](../static/img/wire-puzzle.svg)

</div>

<br /><br />
