### ریدایرکت لینک
در ریدایرکت کردن کاربر از دیوار به اپ های کنار دیوار از صفحه آگهی و مدیریت آگهی ، تعدادی پارامتر در لینک قرار میگیرد که یکی از این پارامتر ها `return_url` نام دارد. هدف این لینک بازگرداندن کاربر به دیوار است. اپ کنار دیوار موظف است پس از اتمام کار کاربر را به این لینک برگرداند.

نکته بسیار مهم این است که این عملیات ممکن است باعث [open redirection](https://learn.snyk.io/lesson/open-redirect/) یا حتی [xss](https://owasp.org/www-community/attacks/xss/)  شود بنابراین حتما بررسی کنید که url داده شده برای دیوار باشد. تیکه کد زیر یک فانکشن جاوا اسکریپت است که با استفاده از regex این کار را انجام میدهد.
```js
function isDivarLink(link) {
  // Define the regular expression for divar.ir and its subdomains
  const divarRegex = /^https:\/\/(?:[a-zA-Z0-9-]+\.)?divar\.ir(\/?|\/.+)/;

  // Test the link against the regular expression
  return divarRegex.test(link);
}
```
