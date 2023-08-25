# LoadWebViewPage 
اکشن load webview page به صورت فیلد json زیر در ویجت قرار میگیرد:
```yaml
"action": {
    "type": "LOAD_WEB_VIEW_PAGE",
    "fallback_link": "https://your.website.com",
    "payload": {
        "@type": "type.googleapis.com/widgets.LoadWebViewPagePayload",
        "url": "https://your.website.com"
    }
}
```
در صورتی که کاربر از کلاینت وب استفاده میکند ، فرد به تب دیگری با `url` مشخص شده ریدایرکت میشود و اگر کاربر از کلاینت اندروید و iOS استفاده کند ، داخل اپلیکیشن یک صفحه ی وب با `url` ذکر شده باز میشود. 
فیلد های این اکشن به صورت زیر است:
- **fallback_link**: در صورتی که در کلاینت این اکشن تعریف نشده باشد (کلاینت های قدیمی) کاربر را به این `url` ریدایرکت میکند.
- **url**: این فیلد همان `url` ای هست که میخواهیم کاربر را به آن ریدایرکت کنیم.

# اعتبارسنجی اکشن

نیاز است تا هر دو فیلد `fallback_link` و `url` پر شود و value آن ها یک url ولید بدون **whitespace** باشد. 

