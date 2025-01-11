در این داکیومنت تمام مراحل مورد نیاز برای مهاجرت:
- از user addon v1 به user addon v2[لینک](#user-addon-v2)
- از post addon v1 به post addon v2[لینک](#post-addon-v2)
- از user verification به user semantic[لینک](#user-semantic)

> توجه داشته باشید که `API` های قدیمی در لحظه maintain می‌شوند ولی پیشنهاد می‌شود تا قبل از اعلام `DEPRECATION` آن ها، مهاجرت را انجام دهید.
# Post Addon V2
- در ابتدا `endpoint` را به `https://api.divar.ir/v2/open-platform/addons/post/{{token}}` تغییر دهید.
- فیلد `widgets`در رکوئست قبلا به شکل `widgets:{"widget_list":[]}` بود که در حالت جدید به شکل `widgets:[]` درآمده است. پس محتویات `widget_list` را در `widgets` قرار دهید و آن را لیست/آرایه بکنید.
- خود ویجت های دیوار نیز تغییر کرده اند. در این ورژن این ویجت ها ساده تر و خواناتر شده اند. طبق [این قسمت](#new-widgets) تک تک ویجت هارا تغییر دهید.
- فیلد `semantic` مانند قبل یک `object` است که value های استرینگی دارد منتهی فیلد `semantic_sensitives` به طور کامل حذف شده است، هر فیلدی که در [اینجا](/semantic/semantic_data.md#فیلد-های-تعیین-شده) تعیین نشده باشد رمز می‌شود. برای اضافه کردن فیلد با تیم دیواری مربوطه در ارتباط باشید. پس `sensitive_semantics` را حذف کنید و طبق [اینجا](/semantic/semantic_data.md#فیلد-های-تعیین-شده) فیلد های مورد نظر خود را قرار دهید.

```diff
-POST https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}
+POST https://api.divar.ir/v2/open-platform/addons/post/{{post_token}}

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
-   "semantic_sensitives": [],
    "notes": "any notes you want to get back on list api"
}
```


# User Addon V2
- در ابتدا `endpoint` را به `https://api.divar.ir/v2/open-platform/addons/user/{{phone}}` تغییر دهید.
- فیلد `widgets`در رکوئست قبلا به شکل `widgets:{"widget_list":[]}` بود که در حالت جدید به شکل `widgets:[]` درآمده است. پس محتویات `widget_list` را در `widgets` قرار دهید و آن را لیست/آرایه بکنید.
- خود ویجت های دیوار نیز تغییر کرده اند. در این ورژن این ویجت ها ساده تر و خواناتر شده اند. طبق [این قسمت](#new-widgets) تک تک ویجت هارا تغییر دهید.
- فیلد `semantic` مانند قبل یک `object` است که value های استرینگی دارد منتهی فیلد `semantic_sensitives` به طور کامل حذف شده است، هر فیلدی که در [اینجا](/semantic/semantic_data.md#فیلد-های-تعیین-شده) تعیین نشده باشد رمز می‌شود. برای اضافه کردن فیلد با تیم دیواری مربوطه در ارتباط باشید. سپس `sensitive_semantics` را حذف کنید و طبق [اینجا](/semantic/semantic_data.md#فیلد-های-تعیین-شده) فیلد های مورد نظر خود را قرار دهید.
- فیلد های `phone, notes, management_permalink` را از `body` نیز حذف کنید.
- فیلد `verification_cost` را به `cost` تغییر نام دهید.

```diff
-POST https://api.divar.ir/v1/open-platform/addons/user/{{phone}}
+POST https://api.divar.ir/v2/open-platform/addons/user/{{phone}}
x-access-token: {{access-token}}
x-api-key: {{api-key}}

{
-    "widgets": {
+    "widgets": [
-        "widget_list": [
            {
-               "widget_type": "SCORE_ROW",
-               "data": {
+               "score_row": {
-                   "@type": "type.googleapis.com/widgets.ScoreRowData",
                    "title": "فنی",
                    "percentage_score": 80,
                    "score_color": "SUCCESS_PRIMARY",
                    "hasDivider": true,
-                   "icon": {
                        "icon_name": "HISTORY",
-                       "icon_color": "SUCCESS_PRIMARY"
-                   },
                    "action": {
-                       "type": "LOAD_WEB_VIEW_PAGE",
-                       "fallback_link": "https://google.com/",
-                       "payload": {
-                           "@type": "type.googleapis.com/widgets.LoadWebViewPagePayload",
-                           "url": "https://google.com/"
-                       }
+                       "open_direct_link": "https://google.com"
                    }
                }
            }
-       ]
-   },
+   ],
-   "notes": "test note",
-   "phone": "09991234567",
    "categories": [],
-   "management_permalink": "https://same-domain.com/manage/id",
    "ticket_uuid": "812d56e6-e44d-45e7-8932-f9acbd416999",
-   "verification_cost": 124000,
+   "cost": 124000,
    "semantic": {
-       "national_id": "0023456789",
-       "full_name": "علی علوی",
-       "external_reference": "ref-id",
        "identity_verification_result": "FACE_AND_ID_MATCHED"
    },
-   "semantic_sensitives": ["national_id"]
}
```






# User Semantic

## ساخت
- در ابتدا برای دریافت اجازه USER_SEMANTIC_CREATE بر روی اپتان بر روی پنل کنار تیکت [ثبت](https://divar.ir/kenar/management/issues/new) کنید.
- در ادامه  `endpoint` را به `https://api.divar.ir/v1/open-platform/semantic/user/{{phone}}` تغییر دهید.
- فیلد `semantic` مانند قبل یک `object` است که value های استرینگی دارد منتهی فیلد `semantic_sensitives` به طور کامل حذف شده است، هر فیلدی که در [اینجا](/semantic/semantic_data.md#فیلد-های-تعیین-شده) تعیین نشده باشد رمز می‌شود. برای اضافه کردن فیلد با تیم دیواری مربوطه در ارتباط باشید. سپس `sensitive_semantics` را حذف کنید و طبق [اینجا](/semantic/semantic_data.md#فیلد-های-تعیین-شده) فیلد های مورد نظر خود را قرار دهید.
- فیلد های `phone, notes` را از بادی ریکوئست حدف کنید.






```diff
-POST https://api.divar.ir/v1/open-platform/verifications/user/{{phone}}
+POST https://api.divar.ir/v1/open-platform/semantic/user/{{phone}}
x-access-token: {{access-token}}
x-api-key: {{api-key}}

{
-   "notes": "test note",
-   "phone": "09120000000",
    "semantic": {
       "national-id": "12345678",
       "identity_verification_result": "FACE_AND_ID_MATCHED"
    },
-   "semantic_sensitives": ["national-id"],
    "ticket_uuid": "812d56e6-e44d-45e7-8932-f9acbd416999",
-   "verification_cost": 12000
+   "cost": 12000
}
```
>- با توجه به اینکه `national-id` فیلد از پیش تعیین شده نمی‌باشد، محتویات این فیلد به طور کامل رمز و چکیده شده و تیم های داخل دیوار چیزی از این فیلد متوجه نخواهند شد.
>- در صورتی که از سیستم قبلی، یعنی `user verification` به این سیستم مهاجرت می‌کنید و فیلد مورد نظرنان در فیلد های از پیش تعیین شده نیست با تیم مربوط در دیوار در ارتباط باشید. همچنین می‌توانید با ثبت تیکت نیاز خود را بیان کنید.

## حذف
ت
- در ابتدا برای دریافت اجازه USER_SEMANTIC_DELETE بر روی اپتان بر روی پنل کنار تیکت [ثبت](https://divar.ir/kenar/management/issues/new) کنید.
- در ادامه  `endpoint` را به `https://api.divar.ir/v1/open-platform/semantic/user/{{phone}}` تغییر دهید.

```diff
-DELETE https://api.divar.ir/v1/open-platform/verifications/user/{{phone}}
+DELETE https://api.divar.ir/v1/open-platform/semantic/user/{{phone}}
x-api-key: {{api-key}}
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
  - فیلد `action` را طبق [این قسمت](#new-actions) مهاجرت دهید.

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



- ویحت SELECTOR_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `selector_row` جایگزین کنید.
  - فیلد های ‍`style, small, has_arrow, description, notification_text` را حذف کنید.
  - فیلد `icon_name` را از `icon` خارج کنید و فیلد `icon` را حذف کنید.
  - نام فیلد `image_url` را به `image_id` تغییر دهید.
  - فیلد `action` را طبق [این قسمت](#new-actions) مهاجرت دهید.

```diff
{
-   "widget_type": "SELECTOR_ROW",
-   "data": {
+   "selector_row": {
-      "@type": "type.googleapis.com/widgets.SelectorRowData",
        "title": "این یک سلکتور رو هست",
-       "image_url": "someuuid.jpg",
+       "image_id" "someuuid.jpg",
        "has_divider": false,
-       "has_notification": true,
-       "icon": {
           "icon_name": "ADD",
-       },
-       "notification_text": "",
-       "description": "نوتیفیکیشن",
-       "has_arrow": true,
-       "small": true,
        "action": {
-           "type": "LOAD_WEB_VIEW_PAGE",
-           "fallback_link": "https://your.website.com",
-           "payload": {
-               "@type": "type.googleapis.com/widgets.LoadWebViewPagePayload",
-               "url": "https://your.website.com"
-           }
+           "open_direct_link": "https://your.website.ir"
        }
    }
}
```


- ویحت SCORE_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `score_row` جایگزین کنید.
  - فیلد `icon_name` را از `icon` خارج کنید و فیلد `icon` را حذف کنید.
  - فیلد `action` را طبق [این قسمت](#new-actions) مهاجرت دهید.

```diff
{
-   "widget_type": "SCORE_ROW",
-   "data": {
+   "score_row": {
-       "@type": "type.googleapis.com/widgets.ScoreRowData",
        "title": "متن تایتل",
        "percentage_score": 80,
        "score_color": "SUCCESS_PRIMARY",
        "hasDivider": true,
-       "icon": {
            "icon_name": "HISTORY",
-       },
        "action": {
-           "type": "LOAD_WEB_VIEW_PAGE",
-           "fallback_link": "https://google.com/",
-           "payload": {
-               "@type": "type.googleapis.com/widgets.LoadWebViewPagePayload",
-               "url": "https://google.com/"
-           }
+           "open_direct_link": "https://google.com/"
       }
    }
}
```





- ویحت IMAGE_CAROUSEL_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `image_carousel_row` جایگزین کنید.
  - نام فیلد `image_url` را به `image_id` تغییر دهید.

```diff
{
- "widget_type": "IMAGE_CAROUSEL_ROW",
- "data": {
+ "image_carousel_row": {
-   "@type": "type.googleapis.com/widgets.ImageCarouselRowData",
    "items": [
      {
-       "image_url": "e7172fc8-2a9c-43c7-927d-93ac7477eb06.jpg",
+       "image_id": "e7172fc8-2a9c-43c7-927d-93ac7477eb06.jpg",
        "description": "1"
      },
      {
-       "image_url": "979b9755-7b73-4adc-b209-7905300390ba.jpg",
+       "image_id": "979b9755-7b73-4adc-b209-7905300390ba.jpg",
        "description": "2"
      },
      {
-       "image_url": "logo",
+       "image_id": "logo",
        "description": "3"
      }
    ],
    "has_divider": true
  }
}
```



- ویحت GROUP_INFO_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `group_info_row` جایگزین کنید.

```diff
{
-   "widget_type": "GROUP_INFO_ROW",
-   "data": {
+   "group_info_row": {
-       "@type": "type.googleapis.com/widgets.GroupInfoRow",
        "items": [
            {
                "title": "متن اول",
                "value": "مقدار اول"
            },
            {
                "title": "متن دوم",
                "value": "مقدار دوم"
            },
            {
                "title": "متن سوم",
                "value": "مقدار سوم"
            }
        ],
        "has_divider": true
    }
}
```

- ویحت EVENT_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `event_row` جایگزین کنید.
  - فیلد های ‍`padded, icon_color` را حذف کنید.
  - فیلد `icon_name` را از `icon` خارج کنید و فیلد `icon` را حذف کنید.
  - نام فیلد `image_url` را به `image_id` تغییر دهید.

```diff
{
- "widget_type": "EVENT_ROW",
- "data": {
+ "event_row": {
-  "@type": "type.googleapis.com/widgets.EventRowData",
    "title": "کیفیت کارشناسی",
    "subtitle": "با ۱ سال گارانتی قیمت",
    "label": "تضمینی",
-   "image_url": "e7172fc8-2a9c-43c7-927d-93ac7477eb06.jpg",
+   "image_id": "e7172fc8-2a9c-43c7-927d-93ac7477eb06.jpg",
-   "padded": true,
-   "icon": {
      "icon_name": "CAR_HYDRAULICS",
-     "icon_color": "WARNING_SECONDARY"
-   }
  }
}
```



- ویحت EVALUATION_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `evaluation_row` جایگزین کنید.
  - فیلد های ‍`text_color, indicator_color, icon_color, image_url_light, image_url_dark` را حذف کنید.
  - فیلد `icon_name` را از `indicator_icon` خارج کنید و فیلد `indicator_icon` را حذف کنید.
 
```diff
{
- "widget_type": "EVALUATION_ROW",
- "data": {
+ "evaluation_row": {
-   "@type": "type.googleapis.com/widgets.EvaluationRowData",
    "indicator_text": "متن روی شاخص",
    "indicator_percentage": 50,
-   "indicator_icon": {
-     "image_url_dark": "",
-     "image_url_light": "",
      "icon_name": "ADD",
-     "icon_color": "BRAND_PRIMARY"
-   },
-   "indicator_color": "BRAND_PRIMARY",
    "left": {
      "text": "left text",
-     "text_color": "ICON_PRIMARY",
      "section_color": "ICON_SECONDARY"
    },
    "middle": {
      "text": "middle text",
-     "text_color": "ICON_PRIMARY",
      "section_color": "ICON_SECONDARY"
    },
    "right": {
      "text": "right text",
-     "text_color": "ICON_PRIMARY",
      "section_color": "ICON_SECONDARY"
    }
  }
}
```



- ویحت DESCRIPTION_ROW
  - فیلد های `@type` و `widget_type` را حذف کنید.
  - نام فیلد `data` را با `description_row` جایگزین کنید.
  - فیلد های ‍`is_primary, small, padded` را حذف کنید.

```diff
{
-   "widget_type": "DESCRIPTION_ROW",
-   "data": {
+   "description_row": {
-       "@type": "type.googleapis.com/widgets.DescriptionRowData",
        "text": "این یک دسکریپشن رو هست",
        "has_divider": false,
-       "is_primary": false,
        "expandable": false,
-       "small": true,
-       "padded": false
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
            }
```

> اکشن های جدیدی به ویجت های کنار دیوار اضافه شده است که از [اینجا](/widgets/actions) می‌توانید آن‌ها را مشاهده کنید.
