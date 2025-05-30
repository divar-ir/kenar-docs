# مهاجرت ارسال پیام و رویداد‌ها 
## لیست تغییرات
- تغییر ساختار اکشن‌ها:‌ با جایگزین شدن اکشن‌های قدیمی توسط اکشن‌های جدید،امکان دریافت اطلاعات بیشتر و متنوع تری را دارید. علاوه بر این، اکشن‌های افزونه‌ها و چت یکپارچه شدند.
 - اضافه شدن API جدید ارسال پیام در چت: از این به بعد تنها با استفاده از پارامتر conversation_id به هر مکالمه‌ای پیام بفرستید.  با استفاده از این API می‌توانید اولین پیام را در مکالمه‌ها بفرستید.
 - امکان اضافه کردن چندین دکمه با اکشن‌های مختلف: شما می‌توانید  برای تعامل با کاربران در چت بعد از هر پیام تان تا ۹ دکمه قرار دهید.
 - ساختار جدید هدایت کاربران به سمت برنامه‌ی شما: با استفاده از این ساختار می‌توانید علاوه بر داده‌هایی که خودتان تعریف می‌کنید، اطلاعات اضافه‌تری از کاربر بسته به مکانی که کاربر از آن به سمت برنامه‌ی شما هدایت می‌شود دریافت کنید.
 - ساختار جدید گوش دادن به رویداد‌های دیوار: با استفاده از ساختار یکپارچه رویدادها می‌توانید از اتفاقاتی که در دیوار رخ می‌دهد، در لحظه با خبر شوید.
   
## مهاجرت
مهم ترین موردی که برای مهاجرت به این ورژن باید به آن توجه کنید، اسکوپ جدید برای ارسال پیام در چت هست. شما با داشتن اسکوپ `CONVERSATION_SEND_MESSAGE` می‌توانید از API جدید استفاده کنید. ابتدا مطمئن شوید که اپ شما به این اسکوپ دسترسی دارد و سپس با درخواست این دسترسی از کاربران‌تان، این اجازه را دریافت کنید. سپس با فراخوانی API [ارسال پیام در چت](../chat/users_conversations.md#درخواست-ارسال-پیام-در-چت) پیام مورد نظر خود را در چت ارسال کنید.

همچنین برای هدایت کاربر به سمت برنامه‌ی شما، در ساختار جدید ابتدا درخواستی به آدرس شروع برنامه‌ی شما (تعریف شده در پنل کنار دیوار) ارسال می‌شود که حاوی اطلاعات مربوط به کاربر است و انتظار می‌رود که در پاسخ به این درخواست، آدرسی  که کاربر باید به آن هدایت شود را برگردانید. تفاوت این نسخه‌ با حالت قبلی، ساختار درخواستی است که برای شما ارسال می‌شود. در صورتی که از هر دو روش برای هدایت کاربر استفاده می‌کنید باید با استفاده از HTTP Header `API_VERSION` تشخیص دهید که این درخواست مربوط به کدام نسخه هست و سپس اطلاعات مورد نظر را بررسی کنید و آدرس بازگشت کاربر را به عنوان پاسخ برگردانید. اطلاعات بیشتر در مورد این درخواست را می‌توانید [اینجا](/widgets/actions/open_server_link.md) ببینید.

### ارسال پیام در چت


 ```diff
- POST https://open-api.divar.ir/v2/open-platform/chat/conversation
+ POST https://open-api.divar.ir/v2/open-platform/conversations/{{conversation_id}}/messages
Content-Type: application/json
x-api-key: {{apikey}}
Authorization: Bearer {{access_token}}

{
-   "user_id": "شناسهٔ کاربر فرستنده که می خواهیم پیامی از سمت او وارد چت کنیم",
-   "post_token": "توکن آگهی مورد چت",
-   "peer_id": "شناسهٔ کاربر گیرنده در چت",
    "type": "TEXT",
    "message": "متن پیام",
-   "sender_btn": {
-       "action": "LINK",
-       "data": {
-           "icon_name": "نام آیکون مورد نظر برای این دکمه",
-           "extra_data": {
-               "your_custom_key":"اطلاعاتی که در ادامه هنگام کلیک روی دکمه نیاز داریم"
-           },
-           "caption": "متن دکمهٔ زیر پیام برای طرف فرستنده"
-       }
-   },
-   "receiver_btn": {
-       "action": "LINK",
-       "data": {
-           "icon_name": "نام آیکون مورد نظر برای این دکمه",
-           "extra_data": {
-               "your_custom_key":"اطلاعاتی که در ادامه هنگام کلیک روی دکمه نیاز داریم"
-           },
-           "caption": "متن دکمهٔ زیر پیام برای طرف گیرنده"
-       }
-   }
+   "sender_buttons": {
+       "rows": [
+           {
+               "buttons": [
+                   {
+                       "action": {
+                           "open_direct_link": "آدرس مورد نظر برای باز شدن بعد از کلیک"
+                       },
+                       "icon_name": "نام آیکون",
+                       "caption": "متن دکمه"
+                   },
+                   {
+                       "action": {
+                           "open_server_link": {
+                               "data": {
+                                   "my_key_1": "value",
+                                   "my_key_2": "value2"
+                               }
+                           }
+                       },
+                       "icon_name": "نام آیکون",
+                       "caption": "متن دکمه"
+                   }
+               ]
+           }
+       ]
+   },
+   "receiver_buttons": {
+       "rows": [
+           {
+               "buttons": [
+                   {
+                       "action": {
+                           "open_direct_link": "آدرس مورد نظر برای باز شدن بعد از کلیک"
+                       },
+                       "icon_name": "نام آیکون",
+                       "caption": "متن دکمه"
+                   },
+                   {
+                       "action": {
+                           "open_server_link": {
+                               "data": {
+                                   "my_key_1": "value",
+                                   "my_key_2": "value2"
+                               }
+                           }
+                       },
+                       "icon_name": "نام آیکون",
+                       "caption": "متن دکمه"
+                   }
+               ]
+           }
+       ]
+   }
}
```

### خواندن در لحظه‌ی پیام‌های یک آگهی
این API با این نسخه از داک، depcrecate شده است و می‌توانید با استفاده از سرویس گوش دادن به رویدادها از پیام‌های جدید در چت یک آگهی (از طرف آگهی گذار) آگاه شوید.

درخواست گوش دادن به پیام‌های یک آگهی
```diff
- POST https://open-api.divar.ir/v1/open-platform/notify/chat/post-conversations
+ POST https://open-api.divar.ir/v1/open-platform/events/subscriptions
Content-Type: application/json
x-api-key: {{apikey}}
Authorization: Bearer {{access_token}}

{
-   "post_token": "توکن آگهی",
-   "endpoint": "آدرسی که پیام‌ها به آن فرستاده می‌شوند",
-   "identification_key": "کلید احراز منبع درخواست‌ها"
+   "event_type": "NEW_MESSAGE_ON_POST",
+   "event_resource_id": "gZd7omnS",
+   "meta_data": {
+       "your_key": "your_value"
+   }
```

درخواست ارسالی از طرف دیوار
با توجه به تغییر کامل ساختار درخواست ارسالی از طرف دیوار، پیشنهاد می‌شود که داک [درخواست رویداد جدید](../events#درخواست-رویداد-جدید-ارسالی-از-سمت-دیوار) را مطالعه کنید.

```diff
- POST {{ endpoint }}
+ POST {{new_events_url}}
Content-Type: application/json
- authorization: {{ identification_key }}
+ Authorization: {{identification_key}}

{
-   "payload": {
-     "data": {
-       "text": ""
-     },
-     "sender": {
-       "id": "",
-       "is_supply": bool
-     },
-     "id": "",
-     "metadata": {
-       "category": "",
-       "post_token": "",
-       "title": ""
-     },
-     "sent_at": "",
-     "receiver": {
-       "id": "",
-       "is_supply": bool
-     },
-     "type": "TEXT"
-   },
-   "timestamp": "",
-   "type": "CHAT_MESSAGE"
+   "type": "NEW_MESSAGE",
+   "meta_data": {
+        "your_key": "your_value"
+    },
+   "new_message": {
+       "id": "e7a08a2c-8ee4-11ef-af85-4e9e9bfa3c12",
+       "conversation": {
+           "id": "edbb9499-cccc-4d35-b21f-621fa95f2b3e",
+           "type": "POST",
+           "post_token": "gZd7omnS"
+       },
+       "sender": {
+           "side": "SELLER",
+           "type": "HUMAN"
+       },
+       "type": "TEXT",
+       "sent_at": 1729429926140000
+   }
}
```
