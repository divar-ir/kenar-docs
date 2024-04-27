# OpenWebPage 
اکشن open web page به صورت فیلد json زیر در ویجت قرار میگیرد:
```yaml
"action": {
    "type": "OPEN_WEB_PAGE",
    "fallback_link": "https://your.website.com",
    "payload": {
        "@type": "type.googleapis.com/widgets.OpenWebPagePayload",
        "link": "https://your.website.com"
    }
}
```
این اکشن کاربر را به مرورگر میفرستد و در آن `url` را باز میکند.

فیلد های این اکشن به صورت زیر است:
- **fallback_link**: در صورتی که در کلاینت این اکشن تعریف نشده باشد (کلاینت های قدیمی) کاربر به این آدرس ریدایرکت می‌شود.
- **link**: آدرسی که می‌خواهید کاربر را در صورت قدیمی بودن کلاینت به آن ریدایرکت کنید. این آدرس در مرورگر باز خواهد شد.


# اعتبارسنجی اکشن 

نیاز است تا هر دو فیلد `fallback_link` و `url` پر شود و value آن ها یک url ولید بدون whitespace باشد.

### اعلام وضعیت کاربر در زمان بازگشت به دیوار
برای اعلام وضعیت کاربر و اطلاع دیوار از موفقیت یا عدم موفقیت فرایند کاربر، لازم است هنگام هدایت کاربر به آدرسی که در در پاسخ به درخواست بالا با عنوان `return_url` دریافت کرده‌اید، پارامترهای زیر را اضافه کنید.
| مثال    | توضیحات                                                       | پارامتر |
|---------|---------------------------------------------------------------|---------|
| 200000  | هزینه پرداخت شده توسط کاربر به ریال                           | price   |
| success | success or fail نشان دهنده موفق بودن یا نبودن عملیات است | status  |

نکته بسیار مهم این است که این عملیات ممکن است باعث [open redirection](https://learn.snyk.io/lesson/open-redirect/) یا حتی [xss](https://owasp.org/www-community/attacks/xss/)  شود بنابراین حتما بررسی کنید که url داده شده برای دیوار باشد. تکه کد زیر یک فانکشن جاوااسکریپت است که بررسی می‌کند آدرس ورودی برای دیوار باشد.
```js
function isDivarLink(link) {
  // Define the regular expression for divar.ir and its subdomains
  const divarRegex = /^https:\/\/(?:[a-zA-Z0-9-]+\.)?divar\.ir(\/?|\/.+)/;

  // Test the link against the regular expression
  return divarRegex.test(link);
}
```

*نکته:* ر صورتی که آدرس بازگشت به دیوار را به هر دلیل ندارید، می‌توانید کاربر را به صفحهٔ [دیوار من](https://divar.ir/my-divar/my-posts) یا دیپ‌لینک‌های دیگر هدایت کنید یا از طریق جاواسکریپت، تب باز شده رو ببندید(لیست دیپ‌لینک‌ها به زودی به مستندات افزوده خواهدشد)
