# ساخت و بروزرسانی افزونه آگهی

# افزونه تایید شده
اکثر برنامه‌ها برای منتشر شدن باید اجازه کاربر را جهت درج افزونه طبق فرایند [احراز باز](../oauth) دریافت کنند.
برای درج افزونه تایید شده می‌توانید با توجه به نیاز، از دو اسکوپ زیر استفاده کنید.

| اسکوپ احراز باز                 | توضیحات                                          | مثال                       |
|---------------------------------|--------------------------------------------------|----------------------------|
| POST_ADDON_CREATE.\{POST_TOKEN} | درج افزونه بر روی یک اگهی کاربر با توکن gZ5ZolKk | POST_ADDON_CREATE.gZ5ZolKk |
| USER_POSTS_ADDON_CREATE         | درج افزونه بر روی تمام آگهی های یک کاربر         | USER_POSTS_ADDON_CREATE    |

---


- در هنگام فراخوانی این اندپوینت صرفا اعتبار سنجی مقادیر و فرمت اطلاعات داده شده انجام می‌شود.
- در صورت رد شدن هر یک از اعتبار سنجی ها در ریسپانس ارور پس‌داده خواهد شد.
- بعد از اعتبار سنجی ریسپانس موفق یا علت رد درخواست الصاق افزونه پس داده میشود در حالی که الصاق افزونه هنوز انجام نشده است.
- پس از مدتی افزونه برای آگهی تولید میشود و از ریسپانس کد ۲۰۰ میتوانید مطمئن باشید حتما افزونه شما ساخته خواهد شد.
- از این اندپوینت برای بروزرسانی نیز میتوانید استفاده کنید.

نکته: تنها اعتبار سنجی که انجام نمی‌شود توکن آگهی می‌باشد در صورت اشتباه بودن این مقدار افزونه ساخته نمی‌شود و در ریسپانس قبول شده خواهید دید پس از صحت توکن اطمینان حاصل نمائید.

```mermaid
sequenceDiagram
    actor Third-Party
    participant Kenar
    participant Divar Services
    Third-Party->>Kenar: Sends Create Addon Request with appropriate fields
    Note over Kenar: Validates the request
    alt request data is invalid
        Kenar--x Third-Party: Responds with appropriate validation error
    else request data is valid
        Kenar->> Third-Party: Responds with empty JSON object and an Ok status code.
    end
    loop until attachment
        Kenar->>Divar Services: Sends Attach Addon Request
    end
```

برای الصاق افزونه روی آگهی لازم است
API
زیر صدا زده شود. برای آگاهی از نحوه ساخت ویجت‌ها و قراردادن لینک در آنها، میتوانید به [قسمت ویجت‌ها](../widgets/ReadMe.md) مراجعه نمائید.

### ریکوئست
لینک این درخواست در [فهرست API-ها](https://divar.ir/kenar/api-doc#tag/addons/POST/v2/open-platform/addons/post/{token})

```http request
POST https://api.divar.ir/v2/open-platform/addons/post/{{post_token}}
Content-Type: application/json
x-api-key: {{apikey}}

x-access-token: {{access_token}}

{
   "widgets": [
        {
            "description_row": {
                "text": "این یک دسکریپشن رو هست",
                "has_divider": false,
                "expandable": false
            },
        },
        {
          "event_row": {
            "title": "یه تایتل مناسب",
            "subtitle": "یه زیر تایتل مناسب تر",
            "label": "یه لیبل زیبا",
            "image_id": "someuuid.jpg",
            "has_divider": true,
            "icon_name": "ADD",
            "action": {
              "open_direct_link": "https://google.com"
            }
          },
        }
    ],
    "notes": "any notes you want to get back on list api"
}
```

- فیلد `widgets` باید با ویجت های مورد نظر پر شود.
- فیلد  `notes`
 برای یاداشت های مورد نظرتون روی افزونه می‌باشد می‌توانید با
 [تابع لیست](list.md)
  این اطلاعات رو پس بگیرید.
- فیلد `semantic` برای اطلاعات معنایی می باشد که در [اینجا](../semantic/semantic_data.md) بیشتر توضیح داده شده است.

### ریسپانس
با توجه به `status_code` خروجی این API از موفقیت یا خطای مربوطه مطلع خواهید شد.
```json
{}
```
