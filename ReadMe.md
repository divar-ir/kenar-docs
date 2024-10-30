<br>

<div align="right">

<img src="img/logo.svg" height="72px"/>

</div>

<br><br>

 **کنار دیوار** بستری برای افزودن اطلاعات و خدمات به دیوار است.
 با ارائهٔ خدمات خود در **کنار دیوار**، به کاربران دیوار کمک کنید تجربهٔ خرید و فروش ساده‌تر، مطمئن‌تر و دلنشین‌تری را تجربه کنند.
در **کنار دیوار** می‌توانید:
- به آگهی‌گذاران کمک کنید اطلاعات تکمیلی در آگهی‌های خود درج کنند.
- با همکاری آگهی‌گذاران خدمات تکمیلی روی آگهی‌ها ارائه دهید.
- با ارائهٔ خدمات در چت، تعامل کاربران را در راستای معاملهٔ سریع‌تر و مطمئن‌تر تسهیل کنید.
---

🚀 برای شروع کار در **کنار دیوار**، در [پنل کنار دیوار][پنل کنار] ثبت‌نام کنید. 


---

<br>

> 🚧 ***در دست احداث*** 🚧
>
> **کنار دیوار**‌ در حال حاضر در مرحلهٔ آزمایشی است. در این مرحله ممکن است قواعد، سیاست‌ها و ابزارهای **کنار دیوار**، به خصوص ابزارهای جدیدتر، در بازه‌های زمانی کوتاه تغییر کنند. به دلیل سرعت تغییرات، ممکن است در بازه‌های زمانی خاصی اطلاعات ارائه شده در این مخزن نیز ناقص یا نیازمند بروزرسانی باشند.

<br>

> ☎️ ***تماس با ما***
>
> - پاسخ سوالتان را در این مستندات پیدا نکرده‌اید؟ سوالات خود را [اینجا][ایشوی جدید] بپرسید.
> - برای افزونه‌ی خود درخواست تغییر یا انتشار دارید؟ در توسعه‌ی افزونه‌ی خود دچار مشکلی شده‌اید؟ درخواست خود را در [پنل کنار دیوار][پنل کنار] ثبت کنید.
> - برای طرح سایر مشکلات، موضوعات، نظرات، پیشنهادات، و ... با ما از طریق آدرس ایمیل kenar.support@divar.ir تماس بگیرید.




<br>

# شروع سریع

برای ارسال اولین درخواست به API های کنار دیوار این مراحل را بروید.

۱. در [پنل کنار][پنل کنار] دیوار وارد شوید.\
۲. یک برنامهٔ تستی بسازید، یا از مدیر یک برنامهٔ دیگر بخواهید شما را به برنامه‌اش اضافه کند.\
۳. برای برنامهٔ مورد نظرتان کلید API بسازید.\
۴. در قسمت آگهی‌های تستی یک آگهی بسازید تا بتوانید راحت‌تر تست کنید.\
۵. می‌توانید [فهرست درخواست‌ها](#فهرست-درخواستها) را ببینید یا [این کالکشن][postman_collection] را دانلود کنید و در ابزارهایی مثل Postman وارد کنید و شروع کنید.

# پروژه‌های قدرت‌گرفته از کنار دیوار
⏺ [مستر دیاگ](https://github.com/amirsalarsafaei/mrdiag)

⏺ [ریتینو](https://github.com/mohammadmasoumi/ratino)

⏺ [مثال ساده](https://github.com/Mobin-Pourabedini/kenar-divar-example)

# نمای کلی و پیش‌نیاز‌ها

خدمات مختلف در **کنار دیوار** در قالب «برنامه‌» یا «اپلیکیشن» (Application) ها به کاربران ارائه می‌شوند. کاربران در نقاط مشخصی از دیوار مثل [صفحهٔ آگهی](#خدمات-روی-آگهیها-) یا [چت](#خدمات-در-چت-)، می‌توانند به درخواست خودشان با برنامهٔ شما در قالب یک **برنامهٔ وب** (**Web Application**)تعامل کنند، در صورت نیاز اجازه‌های لازم را به شما بدهند، خدمات مورد نظر را دریافت کنند و به دیوار برگردند.

برنامه‌های متصل به کنار دیوار با هر زبانی می‌توانند توسعه یابند، اما برقراری ارتباطشان با کنار دیوار از طریق [درخواست‌های HTTP](#تعامل-با-سرویسهای-دیوار) خواهد‌بود.

جزییات برنامه‌(ها)ی خود را در [صفحهٔ اپ‌ها در پنل کنار دیوار][پنل کنار » اپ‌ها] می‌توانید ببینید. اطلاعات بیشتر در مورد مدیریت برنامه‌ها را [اینجا بخوانید][راهنما » مدیریت اپ].


<br>


## خدمات روی آگهی‌ها 📜

در حال حاضر خدماتی که از طریق صفحات مربوط به آگهی می‌توانید ارائه دهید، در قالب زیر است:

۱. برنامه‌های مرتبط با آگهی (از نظر دسته، شهر یا موارد دیگر) در قسمت مدیریت آگهی به کاربر پیشنهاد می‌شود.\
۲. کاربر پس از انتخاب برنامهٔ شما، به [آدرس مشخص شده][راهنما » مدیریت اپ »‌ تعامل در آگهی] هدایت می‌شود و وب‌اپلیکیشن شما در اپ دیوار باز خواهد شد.\
۳. در صورت نیاز می‌توانید در وب‌اپ خود  [اطلاعات آگهی][راهنما » اطلاعات آگهی]، [اطلاعات کاربر][راهنما » اطلاعات کاربر] یا [آگهی‌های کاربر][راهنما » آگهی‌های کاربر] (با [کسب اجازهٔ کاربر][راهنما » احراز باز]) را از دیوار دریافت کنید.\
۴. به علاوه می‌توانید از کاربر [اجازهٔ درج محتوا][راهنما » احراز باز] در آگهی مورد نظر را نیز بگیرید.  این محتوا از [ویجت‌های][راهنما » ویجت‌ها] دیوار مثل متن، عکس، امتیاز و  ... تشکیل می‌شود.\
۵. پس از پایان کار، برنامه باید [کاربر را به دیوار برگرداند][راهنما » مدیریت اپ »‌ تعامل در آگهی]. \
۶. پس از انتشار، کاربران آگهی‌بیننده می‌توانند با محتوای درج‌شده تعامل داشته‌باشند (برای مثال، با استفاده از دکمه‌های اضافه شده، آدرس‌های مشخص شده در برنامهٔ شما را باز کرده و با وب‌اپلیکیشن شما تعامل کنند). دقت کنید که حتما بعد از پایان تعامل با کاربر، وی را [به دیوار بازگردانید][راهنما » مدیریت اپ »‌ تعامل در آگهی].

![مسیر ارائهٔ خدمات در آگهی](img/post-flow.png)

<br>

> 💡 ***مثال*** \
> یک سرویس پرداخت آنلاین، بعد از ثبت آگهی کالای نو، با فروشنده هماهنگ کرده، اطلاعات و مجوزهای لازم را از وی می‌گیرد، سپس با افزودن دکمهٔ پرداخت آنلاین به آگهی، به آگهی‌‌بینندگان امکان پرداخت سریع و از طریق درگاه را فراهم می‌آورد.

<br>

### ارائه خدمات به بیننده آگهی
در این حالت سرویس شما به عنوان سرویس سمت بیننده آگهی ثبت می‌شود، در هنگام بازدید آگهی به کاربر معرفی خواهد شد و اگر کاربر بیننده انتخاب کند به سایت شما منتقل خواهد شد و اطلاعات مورد نیاز بیندده آگهی را در اختیار او قرار می‌دهید
<br>
برای اطلاعات دقیق تر [اینجا][راهنما » افزونه‌های بیننده آگهی] را مطالعه کنید

> 💡 ***مثال*** \
> یک سرویس ارزیابی قیمت خودرو تحت عنوان ارزیابی قیمت در دسته‌های خودرو به بیننده های آگهی نمایش داده می‌شود، کاربر در صورت انتخاب کردن این سرویس به سایت آن ریدایرکت خواهد شد. سرویس مذکور اطلاعات آگهی را دریافت کرده و درباره مناسب بودن یا نبودن قیمت به کاربر اطلاعات می‌دهد.

<br>

---

📖 اطلاعات بیشتر در مورد افزونه‌های آگهی‌ها را [اینجا بخوانید][راهنما » افزونه‌های آگهی].

---

<br>

## خدمات در چت 💬

ارائهٔ خدمات در چت دیوار به طور کلی در قالب زیر انجام می‌شود:

۱. برنامه‌های مرتبط با آگهی و چت کاربران به آنها پیشنهاد داده‌می‌شود.\
۲. پس از انتخاب برنامهٔ شما توسط کاربر، درخواستی از طرف دیوار به [آدرسی که از قبل توسط شما در پنل مشخص شده][راهنما » مدیریت اپ »‌ تعامل در چت] ارسال می‌شود و کاربر به آدرسی که در پاسخ به درخواست دیوار می‌دهید، هدایت می‌شود.\
۳. در این مرحله شما می‌توانید [اطلاعات آگهی][راهنما » اطلاعات آگهی] یا [اطلاعات کاربر][راهنما » اطلاعات کاربر] را ([با اجازهٔ کاربر][راهنما » احراز باز]) از دیوار بگیرید.\
۴. به علاوه، در این مرحله می‌توانید [با اجازهٔ کاربر][راهنما » احراز باز]، در چت‌ [پیام ارسال کنید][راهنما » افزونه‌های چت » ارسال پیام]. \
۵. شما می‌توانید به پیام‌های ارسالی در چت، دکمه‌هایی برای طرفین چت ضمیمه کنید که کاربران با استفاده از آن‌ها، [با برنامهٔ شما تعامل نمایند][راهنما » افزونه‌های چت » ارسال پیام‌ » دکمه].\
۶. بعد از پایان تعامل، برنامهٔ شما باید کاربر را [به دیوار برگرداند][راهنما » مدیریت اپ »‌ تعامل در چت].


![مسیر ارائهٔ خدمات در چت](img/chat-flow.png)
<br>

> 💡 ***مثال*** \
>  برنامهٔ پرداخت به کاربر خریدار پیشنهاد شده و وی برنامه را باز کرده، به آدرس ارسالی هدایت می‌شود. برنامه اطلاعات آگهی و شمارهٔ کاربر را دریافت کرده و از طریق درگاه بانکی، مبلغ را از وی دریافت می‌کند. برنامهٔ پرداخت سپس پیامی در چت ارسال می‌کند که ذیل آن دکمه‌ای برای فروشنده قرار گرفته تا از طریق آن، مبلغ را دریافت کند. فروشنده با زذ دکمه به آدرس مشخص شده هدایت می‌شود، برنامه شمارهٔ تماس وی را از دیوار دریافت کرده و سپس با دریافت اطلاعات بانکی، مبلغ را به فروشنده منتقل می‌کند.

<br>

> 💡 ***مثال*** \
>  برنامهٔ تنظیم قرارداد به کاربر پیشنهاد می‌شود. وی از طریق برنامه نمونهٔ قرارداد دلخواه را انتخاب کرده، اطلاعات مربوط به خویش را وارد کرده و به شکل دیجیتال امضاء می‌کند. برنامه لینک مربوط به این قرارداد را به همراه پیامی در چت برای طرف دیگر ارسال می‌کند، کاربر دیگر با باز کردن لینک مشخص شده قرارداد را پر نموده و به صورت دیجیتال امضاء می‌کند، سپس برنامه نسخهٔ امضاء شده را برای طرفین در چت ارسال می‌کند.

<br>

---

📖 اطلاعات بیشتر در مورد افزونه‌های چت را [اینجا بخوانید][راهنما » افزونه‌های چت].

---

<br>

# تعامل با سرویس‌های دیوار

برای استفاده از قابلیت‌های **کنار دیوار** باید درخواست‌های HTTP به آدرس مربوطه ارسال کنید. هر درخواست باید شامل یک [کلید API][راهنما » کلیدها] متعلق به برنامهٔ شما باشد تا دیوار از طریق آن هویت شما را احراز کند. برای ایجاد کلید برای برنامهٔ خود به [صفحهٔ کلیدها در پنل کنار][پنل کنار‌ » کلیدها] مراجعه کنید.

<br>

> 🔒 ***نکات امنیتی*** \
> \
🔑 کلید را در هدر `x-api-key` قرار دهید. درخواست‌های بدون کلید رد خواهند شد. \
🙈 در پنل کنار، کلید API را فقط در زمان ساخت می‌توانید ببینید. در نگهداری از آن دقت کنید. \
🤹 یک اپلیکیشن می‌تواند کلیدهای مختلف با دسترسی‌های متفاوت داشته باشد. \
🛂 مطمئن شوید که هر کلید کمینهٔ دسترسی‌های مورد نیاز را دارد. \
🕰️ کلیدها را به شکل دوره‌ای و منظم پاک کرده و با کلید‌های جدید جایگزین کنید. \
🔥 هر اپلیکیشن می‌تواند فقط یک کلید برای [دریافت اجازه‌های مختلف از کاربر][راهنما » احراز باز] داشته باشد.

<br>

---

📖 برای اطلاعات بیشتر در مورد امنیت کلیدها [اینجا را بخوانید][راهنما » کلیدها » امنیت]. برای اطلاعات بیشتر در مورد کلیدهای API [اینجا را بخوانید][راهنما » کلیدها].

---

<br>

برخی قابلیت‌ها، مثل دریافت اطلاعات شخصی کاربران یا افزودن محتوا به آگهی، نیازمند دریافت اجازه از کاربر هستند. در **کنار دیوار**، این فرآیند بر مبنای [استاندارد OAuth 2.0][احراز باز] انجام می‌شود.  برای کار با این استاندارد، در زبان‌ها و فریم‌ورک‌های مختلف، ابزارهای متنوعی وجود دارند که [برخی از آن‌ها را می‌توانید اینجا ببینید][احراز باز » ابزارها]. برای اطلاعات بیشتر در این مورد، [اینجا را بخوانید][راهنما » احراز باز].

<br>

# محیط تست

- برای تست خدمات روی آگهی‌ها [اینجا را بخوانید][راهنما » افزونه‌های آگهی » تست].
- برای تست خدمات در چت [اینجا را بخوانید][راهنما » افزونه‌های چت »‌ تست].
- برای اتصال یک آدرس عمومی و قابل دسترس در اینترنت به localhost خود، می‌توانید از سرویس‌هایی مثل [ngrok](https://ngrok.com/) یا [Pinggy](https://pinggy.io/) یا [Loophole](https://loophole.cloud/) استفاده کنید.

<br>

# فهرست درخواست‌ها
در این قسمت فهرست ‌درخواست‌ها، پارامترها و دسترسی‌های لازم برای هر کدام را می‌بینید. جزییات بیشتر در مورد هر درخواست را در صفحهٔ جزییات مربوط به درخواست مورد نظر می‌توانید بیابید.\

همهٔ آدرس‌های زیر با `https://api.divar.ir/v${v}/open-platform` شروع می‌شوند.
| v | endpoint                                    | method | توضیحات                                                           | دسترسی‌های لازم برای اپ       | دسترسی‌های احراز باز لازم  | مستندات                                                         |
|---|---------------------------------------------|--------|-------------------------------------------------------------------|------------------------------|---------------------------|-----------------------------------------------------------------|
| 1 | /finder/post/{{token}}                      | GET    | دریافت اطلاعات یک آگهی                                            | GET_POST                     | -                         | [اطلاعات آگهی][راهنما » اطلاعات آگهی]                           |
| 1 | /finder/user-posts                          | GET    | دریافت آگهی‌های یک کاربر                                           | GET_USER_POSTS               | USER_POSTS_GET            | [آگهی‌های کاربر][راهنما » آگهی‌های کاربر]                         |
| 1 | /finder/posts                               | POST   | جستجوی آگهی بر اساس شهر و محله، دسته، کلیدواژه                    | SEARCH_POST                  | -                         | [جستجو در آگهی‌ها][راهنما » اطلاعات آگهی » جستجو]                |
| 1 | /users                                      | POST   | دریافت اطلاعات تماس یک کاربر                                      | USER_RETRIEVE                | USER_PHONE                | [اطلاعات کاربر][راهنما » اطلاعات کاربر]                         |
| 2 | /addons/user/{{phone}}                      | POST   | درج افزونه برای همهٔ آگهی‌های یک کاربر                              | USER_ADDON_CREATE            | USER_ADDON_CREATE         | [درج افزونه‌ی کاربر][راهنما » افزونه‌های کاربر » ساخت]           |
| 1 | /addons/user/{{id}}                         | DELETE | حذف یک افزونهٔ درج شده از همهٔ آگهی‌های یک کاربر                     | USER_ADDON_CREATE            | USER_ADDON_CREATE         | [حذف افزونه کاربر][راهنما » افزونه‌های کاربر » حذف]              |
| 1 | /semantic/user/{{phone}}                    | POST   | درج اطلاعات احراز به یک کاربر                                     | USER_SEMANTIC_CREATE         | USER_VERIFICATION_CREATE  | [درج اطلاعات معنایی کاربر][راهنما » اطلاعات معنایی کاربر » درج] |
| 1 | /semantic/user/{{phone}}                    | DELETE | حذف اطلاعات احراز درج شده برای یک کاربر                           | USER_SEMANTIC_DELETE         | -                         | [حذف اطلاعات معنایی کاربر][راهنما » اطلاعات معنایی کاربر » حذف] |
| 1 | /payment-ticket/validate                    | POST   | بررسی معتبر بودن تیکت پرداخت                                      | -                            | -                         | [بررسی صحت تیکت پرداخت][راهنما » تیکت پرداخت » بررسی صحت]       |
| 2 | /events/subscriptions                       | POST   | ایجاد هوک مطلع شدن از رویدادها                                    | EVENTS_REGISTER_SUBSCRIPTION | -                         | [راهنما » رویدادها][رویداد‌ها]                                   |
| 2 | /conversations/{{conversation-id}}/messages | POST   | ارسال پیام در یک چت                                               | CHAT_SEND_MESSAGE_OAUTH      | CONVERSATION_SEND_MESSAGE | [ارسال پیام در چت][راهنما » افزونه‌های چت » ارسال پیام]          |
| 1 | /assets/category                            | GET    | فهرست دسته‌ها                                                      | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/city                                | GET    | فهرست شهرها                                                       | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/district/{{city}}                   | GET    | فهرست همهٔ محله‌ها یا محله‌های یک شهر با تنظیم شهر در آدرس           | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/brand-model/light                   | GET    | فهرست برندمدل‌ها در دستهٔ خودروی سواری                              | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/body-status                         | GET    | فهرست نام‌های مربوط به وضعیت بدنه برای دستهٔ خودروی سواری           | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/color/light                         | GET    | فهرست رنگ‌ها در دستهٔ خودروی سواری                                  | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/brand-model/mobile-phones           | GET    | فهرست برندمدل‌ها در دستهٔ گوشی موبایل                               | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/color/mobile-phones                 | GET    | فهرست رنگ‌ها در دستهٔ گوشی موبایل                                   | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/internal-storage                    | GET    | فهرست نام‌ها و مقدار مربوط به حافظهٔ داخلی در دسته‌های مرتبط دیجیتال | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |
| 1 | /assets/ram-memory                          | GET    | فهرست نام‌ها و مقدار مربوط به حافظهٔ RAM در دسته‌های مرتبط دیجیتال   | -                            | -                         | [مقادیر][راهنما » مقادیر]                                       |

# احراز باز
برای ارسال درخواست‌هایی که نیاز به دریافت مجوز از کاربر دارد از OAuth استفاده کنید. فرایند در یافت کلید دسترسی را در ادامه می‌بینید. جزییات اسکو‌پ‌های دسترسی را در مستندات هر درخواست و همچنین صفحهٔ اسکوپ‌ها می‌توانید ببینید
### گام اول (درخواست اجازه از کاربر)
`Redirect https://api.divar.ir/oauth2/auth`
|  نام پارامتر  |     مقدار  |        توضیحات  |
|-----------------|------------|------------|
| response_type   | code       |  مقدار بازگشتی بعد از ریدایرکت کاربر از صفحهٔ احراز باز دیوار به صفحهٔ شما که در پارامتر `redirect_uri` مشخص می‌کنید |
| client_id       | <app-slug> |  نام یکتای برنامهٔ شما که در قسمت مدیریت برنامه‌ٔ پنل کنار دیوار می‌توانید ببینید |
| redirect_uri    | <url>      |  آدرسی از برنامهٔ شما که کاربر بعد از صدور (یا رد) اجازه‌های درخواستی به آن هدایت شود. (این آدرس باید URL encoded باشد، در فهرست آدرس‌های مجاز برنامهٔ شما در پنل کنار ثبت شده‌باشد و هیچ پارامتری در آن نباشد.) |
| scope           | <scope>    |  جازه‌های مورد نیاز برای دریافت از کاربر که با اسپیس (‍‍`" "`) از هم جدا شدند. |
| state           | <state>    |  ک مقدار دلخواه که در بازگشت کاربر به اپلیکیشن شما مجدد در پارامترهای URL قرار می‌گیرد. |
### گام دوم (بازگشت به برنامهٔ شما)
کاربر به آدرس `redirect_uri` که در گام اول مشخص کردید با پارامترهای زیر ریدایرکت می‌شود.
|  نام پارامتر  |  مقدار  |  توضیحات  |
|-----------|---------|---------------|
| code      | code    | اگر کاربر با درخواست اجازهٔ شما موافقت کرده‌باشد، این مقدار را خواهید داشت. در غیر این صورت می‌توانید خطای متناسب به کاربر نمایش دهید.|
| state     | <state> | مقداری که در پارامتر `state` در بخش قبل قرار دادید را عیناً این قسمت دریافت می‌کنید. |
### گام سوم (دریافت توکن)
در صورت موافقت کاربر و دریافت `code` در هنگام بازگشت به برنامه، می‌توانید با درخواست زیر `access token` دریافت کنید.
دقت شود در این درخواست هدر `Content-Type` حتما باید `application/x-www-form-urlencoded` باشد.
```http request
POST https://api.divar.ir/oauth2/token

{
  "code": "c87sDtaqmWwgis7dYyukMqy6KAArNUFkukAPW8O90GmiEJkdmSTWH4KjSkNUP6FZ",
  "client_id": "{{app_slug}}",
  "client_secret": "{{client_secret}}",
  "grant_type": "authorization_code",
  "redirect_uri": "your redirect_uri"
}
```
|  نام پارامتر  |  مقدار  |  توضیحات  |
|-----------|---------|---------------|
| code      | code    | اگر کاربر با درخواست اجازهٔ شما موافقت کرده‌باشد، این مقدار را خواهید داشت. در غیر این صورت می‌توانید خطای متناسب به کاربر نمایش دهید.|
| redirect_uri     | <redirect_uri> | با همان مقداری که برای ریکوئست اول (گرفتن کد در گام اول) قرار داده شده است پر شود. |
## دریافت اطلاعات یک آگهی

# دسترسی سریع

- [پنل کنار][پنل کنار]
  - [پنل کنار » مدیریت اپ‌ها][پنل کنار » اپ‌ها]
- [اطلاعات آگهی][راهنما » آگهی]
  - [اطلاعات آگهی » جزئیات آگهی][راهنما » اطلاعات آگهی]
  - [اطلاعات آگهی » جستجو][راهنما » اطلاعات آگهی » جستجو]
  - [اطلاعات آگهی » آگهی‌های کاربر][راهنما » آگهی‌های کاربر]
- [افزونه‌های آگهی][راهنما » افزونه‌های آگهی]
  - [افزونه‌های آگهی » ساخت افزونه][راهنما » افزونه‌های آگهی » ساخت]
  - [افزونه‌های آگهی » حذف افزونه][راهنما » افزونه‌های آگهی » حذف]
  - [افزونه‌های آگهی » اطلاعات معنایی][راهنما » افزونه‌های آگهی » معنی]
  - [افزونه‌های آگهی » محیط تست][راهنما » افزونه‌های آگهی » تست]
- [ویجت‌ها][راهنما » ویجت‌ها]
- [افزونه‌های چت][راهنما » افزونه‌های چت]
  - [افزونه‌های چت » ارسال پیام][راهنما » افزونه‌های چت » ارسال پیام]
  - [افزونه‌های چت » محیط تست][راهنما » افزونه‌های چت »‌ تست]
- [احراز باز][راهنما » احراز باز]
  - [احراز باز » ابزارها][احراز باز » ابزارها]
- [افزونه‌های کاربر][راهنما » افزونه‌های کاربر]
  - [افزونه‌های کاربر » اطلاعات معنایی][راهنما » افزونه‌های کاربر » اطلاعات معنایی]
  - [افزونه‌های کاربر » ساخت][راهنما » افزونه‌های کاربر » ساخت]
  - [افزونه‌های کاربر » حذف][راهنما » افزونه‌های کاربر » حذف]
- [تیکت پرداخت][راهنما » تیکت پرداخت]

[فرم ثبت‌نام]: https://docs.google.com/forms/d/1DmO0gYv3fpjzNV_zh1EEZiaKIkSDq3KXQijQKlMtIfg/edit
[پنل کنار]: https://divar.ir/kenar
[تلگرام کنار]: https://t.me/kenar_divar
[پنل کنار » اپ‌ها]: https://divar.ir/kenar/management/apps

[راهنما » مدیریت اپ]: ./management
[راهنما » مدیریت اپ »‌ تعامل در آگهی]: /management#تعامل-با-کاربر-پس-از-ثبت-آگهی
[راهنما » مدیریت اپ »‌ تعامل در چت]: /management#تعامل-با-کاربر-در-چت

[راهنما » اطلاعات آگهی]: ./finder/get_post.md
[راهنما » آگهی‌های کاربر]: ./finder/get_user_posts.md

[راهنما » احراز باز]: ./oauth
[راهنما » اطلاعات کاربر]: ./oauth/get_user.md

[راهنما » افزونه‌های آگهی]: ./addons
[راهنما » افزونه‌های بیننده آگهی]: ./addons/demand_addon.md

[راهنما » افزونه‌های آگهی » ساخت]: ./addons/create.md
[راهنما » افزونه‌های آگهی » حذف]: ./addons/delete.md
[راهنما » افزونه‌های آگهی » معنی]: ./semantic/semantic_data.md
[راهنما » افزونه‌های آگهی » تست]: ./addons/test_environment.md

[راهنما » ویجت‌ها]: ./widgets
[راهنما » بازگشت کاربر]: ./misc

[راهنما » افزونه‌های چت]: ./chat
[راهنما » افزونه‌های چت » ارسال پیام]: ./chat/send_message.md
[راهنما » افزونه‌های چت » ارسال پیام‌ » دکمه]: ./chat/send_message.md#کلیک-کاربر-روی-دکمهٔ-درج-شده-زیر-پیام

[راهنما » رویدادها]: ./events

[احراز باز]: https://oauth.net/2/
[احراز باز » ابزارها]: https://oauth.net/code/

[راهنما » کلیدها]: ./management/api-keys.md
[راهنما » کلیدها » امنیت]: ./management/api-keys.md#امنیت-کلیدها

[راهنما » افزونه‌های کاربر]: ./addons#افزونه-کاربر
[راهنما » افزونه‌های کاربر » اطلاعات معنایی]: ./semantic/semantic_data.md
[راهنما » افزونه‌های کاربر » ساخت]: ./addons/user-addons.md
[راهنما » افزونه‌های کاربر » حذف]: ./addons/user-addons.md#حذف-افزونه-کاربر

[راهنما » اطلاعات معنایی کاربر]: ./semantic
[راهنما » اطلاعات معنایی کاربر » درج]: ./semantic/create.md
[راهنما » اطلاعات معنایی کاربر » حذف]: ./semantic/delete.md

[راهنما » تیکت پرداخت]: ./payment-ticket
[راهنما » تیکت پرداخت » بررسی صحت]: ./payment-ticket/validate.md

[postman_collection]: ./Divar-Kenar.postman_collection.json
[ایشوی جدید]: https://github.com/divar-ir/kenar-docs/issues/new

[راهنما » آگهی]: ./finder
[راهنما » مقادیر]: ./assets
[راهنما » اطلاعات آگهی » جستجو]: ./finder/search_post.md

<br><br>

<div align="center">

<img src="./img/wire-puzzle.svg" height="156px"/>

</div>

<br><br>
