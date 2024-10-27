در این داکیومنت تمام مراحل مورد نیاز برای مهاجرت:
- از user addon v1 به user addon v2
- از post addon v1 به post addon v2
- از user verification به user semantic
گفته می‌شود. توجه داشته باشید که `API` های قدیمی در لحظه maintain می‌شوند ولی پیشنهاد می‌شود تا قبل از اعلام `DEPRECATION` آن ها مهاجرت را انجام دهید.
# Post Addon V2
- در ابتدا `endpoint` را به `https://api.divar.ir/v2/open-platform/addons/post/{{token}}` تغییر دهید.
- فیلد `widgets`در رکوئست قبلا به شکل `widgets:{"widget_list":[]}` بود که در حالت جدید به شکل `widgets:[]` درآمده است. پس محتویات `widget_list` را در `widgets` قرار دهید و آن را لیست/آرایه بکنید.
- خود ویجت های دیوار نیز تغییر کرده اند. در این ورژن این ویجت ها ساده تر و خواناتر شده اند. طبق این قسمت تک تک ویجت هارا تغییر دهید.
- فیلد `semantic` مانند قبل یک `object` است که value های استرینگی دارد منتهی فیلد `sensitive_semantics` به طور کامل حذف شده است، هر فیلدی که در اینجا تعیین نشده باشد رمز می‌شود. برای اضافه کردن فیلد با تیم دیواری مربوطه در ارتباط باشید. پس `sensitive_semantics` را حذف کنید و طبق این جدول فیلد های مورد نظر خود را قرار دهید.

```diff
-GET https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}
+GET https://api.divar.ir/v2/open-platform/addons/post/{{post_token}}

Content-Type: application/json
x-api-key: {{apikey}}

x-access-token: {{access_token}}

{
-    "widgets": {
+    "widgets": [
-        "widget_list": [
            {
-                "widget_type": "TITLE_ROW",
-                "data": {
+                "title_row": {
-                   "@type": "type.googleapis.com/widgets.TitleRowData",
                    "text": "این یک تایتل رو هست",
                    "has_divider": true
                }
            }
-        ]
-    }
+    ]
    "semantic": {
-        "year": "1398",
-        "usage": "100000"
+        "payment_method": "SECURE",
+        "some-key": "some value to be hashed"
    },
    "notes": "any notes you want to get back on list api"
}
```














# New Widgets
در تمامی ویجت ها `@type` و `widget_type` را حذف کنید. نام فیلد `data` را با نام ویجت جایگزین کنید. به طور مثال:

```diff
{
-           "widget_type": "TITLE_ROW",
-           "data": {
+           "title_row": {
-                       "@type": "type.googleapis.com/widgets.TitleRowData",
                        "text": "این یک تایتل رو هست",
                        "has_divider": true
            }
}
```
حالا مراحل مهاجرت هرکدام از ویجت های قدیمی به جدید را بررسی می‌کنیم:


- ویحت TITLE_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `title_row` جایگزین کنید.
```diff
{
-           "widget_type": "TITLE_ROW",
-           "data": {
+           "title_row": {
-                       "@type": "type.googleapis.com/widgets.TitleRowData",
                        "text": "این یک تایتل رو هست",
                        "has_divider": true
            }
}
```

- ویحت SUBTITLE_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `subtitle` جایگزین کنید.
```diff
{
-           "widget_type": "SUBTITLE_ROW",
-           "data": {
+           "subtitle_row": {
-                       "@type": "type.googleapis.com/widgets.SubtitleRowData",
                        "text": "این یک سابتایتل رو هست",
                        "has_divider": true
            }
}
```



- ویحت WIDE_BUTTON_BAR
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `button_bar` جایگزین کنید.
  - فیلد‌های داخل فیلد `button` را بیرون بیاورید و در `button_bar` قرار دهید.
  - فیلد ‍`style` را حذف کنید.
  - فیلد `action` را طبق این قسمت مهاجرت دهید.

```diff
{
-   "widget_type": "WIDE_BUTTON_BAR",
-   "data": {
+   "button_bar": {
-       "@type": "type.googleapis.com/widgets.WideButtonBarWidgetData",
-       "style": "SECONDARY",
-       "button": {
            "action": {
-               "type": "OPEN_WEB_PAGE",
-               "fallback_link": "https://your.website.ir",
-               "payload": {
-                   "@type": "type.googleapis.com/widgets.OpenWebPagePayload",
-                   "link": "https://your.website.ir"
-               }
+               "open_direct_link": "https://your.website.ir"
            },
            "title": "به سمت کارشناسی ماشین",
        }
    }
}
```
## New Actions
در ویجت های جدید اکشن‌ها با اکشن های `API` جدید چت یکپارچه شد. به طور خلاصه برای مهاجرت کافی است که لینکی که میخواستید کاربر به آن هدایت شود را در کف `action`، در فیلد `open_direct_link` قرار دهید به شکل زیر:
```diff
            "action": {
-               "type": "OPEN_WEB_PAGE",
-               "fallback_link": "https://your.website.ir",
-               "payload": {
-                   "@type": "type.googleapis.com/widgets.OpenWebPagePayload",
-                   "link": "https://your.website.ir"
-               }
+               "open_direct_link": "https://your.website.ir"
            },
```
