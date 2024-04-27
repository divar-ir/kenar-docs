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
- **fallback_link**: در صورتی که در کلاینت این اکشن تعریف نشده باشد (کلاینت های قدیمی) کاربر را به این `url` ریدایرکت میکند.
- **url**: این فیلد همان `url` ای هست که میخواهیم کاربر را به آن ریدایرکت کنیم.


# اعتبارسنجی اکشن 

نیاز است تا هر دو فیلد `fallback_link` و `url` پر شود و value آن ها یک url ولید بدون whitespace باشد.
