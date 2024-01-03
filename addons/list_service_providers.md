# لیست ارائه‌دهندگان خدمات

از صفحه مدیریت آگهی یا احتمالا صفحات دیگری از دیوار میتوان به لیستی از ارائه دهندگان خدمات دست یافت. لینک مربوط به درخواست خدمت از اپلیکیشن شما را خود شما از طریق تماس با رابط پلتفرم دیوار در اختیار ما قرار داده اید.

> این لینک می‌تواند شامل query string باشد و پارامترهای مختلفی از طرف دیوار یا سرویس‌دهنده در آن وجود داشته‌باشند.

برای مثال در آدرس زیر سه دسته query param وجود دارد که در ادامه توضیح داده‌شده:
```text
https://example.com/service_path/?
    app_slug=example_app&
    body_chassis_status.back_chassis_status=healthy&
    body_chassis_status.body_status=some-scratches&
    body_chassis_status.front_chassis_status=healthy&
    body_status=some-scratches&
    brand_model=Pride+131+SE&
    category=light&
    chassis_status=both-healthy&
    color=%D8%B3%D9%81%DB%8C%D8%AF&
    fuel_type=benzine&
    gearbox=manual&
    motor_status=healthy&
    new_price=203000000.000000&
    post_token=QZk4AH_B&
    prefilled_title=%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF+131+SE%D8%8C+%D9%85%D8%AF%D9%84+%DB%B1%DB%B3%DB%B9%DB%B2&
    price.mode=%D9%85%D9%82%D8%B7%D9%88%D8%B9&
    price.value=203000000.000000&
    third_party_insurance_deadline=11&
    usage=256000.000000&
    utm_campaign=inspection_26aug&
    utm_medium=admanagement&
    utm_source=divar&
    year=%DB%B1%DB%B3%DB%B9%DB%B2
```

در اینجا مقدار پارامتر زیر را پلتفرم باز دیوار تنظیم میکند:
- app_slug
- post_token
- ticket_uuid

برخی مقادیر توسط خود اپلیکیشن در این لینک قرار داده شده:
- utm_campaign
- utm_medium
- utm_source

باقی پرامترها از روی اطلاعات آگهی برای شما تنظیم شده اند:
- price.value
- usage
- ...

> از این پارامترها میتوانید برای پر کردن مقدار اولیهٔ فرمهای خود یا نمایش اطلاعات اولیهٔ آگهی به کاربر استفاده کنید. این کار را برای جلوگیری از نیاز شما به ارسال درخواست برای دریافت اطلاعات آگهی انجام داده‌ایم.

> صفحهٔ شما باید نسبت به query param اضافه‌تر یا کمتر مقاوم باشد. همچنین ممکن است نوع مقدار یک پارامتر تغییر کند. برای مثال در آینده مقادیر float به integer تغییر خواهند کرد.

> این مثال ارائه شده برای یک نمونه آگهی در دسته‌بندی خودرو است. هر دسته‌بندی دارای مقادیر مختص خود است که فهرست آنها در آینده اضافه خواهد شد.

> پارامتر ticket_uuid توسط تیم های دیوار پر میشود. شما باید این پارامتر را استخراج کنید و در صورت معتبر بودن مقدار آن، از موجودی آن استفاده کنند. توضیحات بیشتر در قسمت [تیکت پرداخت](../payment-ticket/payment_ticket.md) ارائه شده‌است.

>در صورتی که پارامتر addon_creation با مقدار false در آدرس وجود داشت. شما می‌بایست فلوی خود را در حالت مینیمال اجرا کنید. (لینک به صفحه یا بخش‌های دیگری از خدماتتان نداشته‌باشد و صرفاً اطلاعات مورد نیاز برای انجام عملیات را از کاربر بگیرد و به دیوار برگردد). در این حالت مکملی هم برای نمایش در آگهی درج نمی‌شود.
