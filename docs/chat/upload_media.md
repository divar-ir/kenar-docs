# آپلود media در چت دیوار (آزمایشی)

این فرایند شامل ۳ مرحله است، ابتدا باید توکن جهت دریافت دسترسی به آپلود را دریافت کنید.
سپس باید با استفاده از توکن دریافتی فایل مدیا خود را آپلود کنید.
و در نهایت با `media_token` دریافتی در چت مد نظر خود media خودتون رو بفرستید
## نمای کلی

فرآیند آپلود شامل مراحل زیر است:

1. دریافت یک توکن آپلود برای `Authorization`
2. آپلود `media` خود با استفاده از `upload_token` دریافت شده
3. استفاده از `media_token` حاصل در فایل‌های مکالمه خود

## مرحله ۱: دریافت توکن آپلود

ابتدا، شما نیاز دارید یک توکن آپلود دریافت کنید که برای مجوز آپلود رسانه شما استفاده خواهد شد.

### Request
    
```http request
POST https://open-api.divar.ir/experimental/open-platform/chat/upload
Content-Type: application/json
x-api-key: {{apikey}}
```

### Response

```json
{
  "token": "your_upload_token"
}
```

### python example
```python
import requests

url = "https://open-api.divar.ir/experimental/open-platform/chat/upload"

payload = {}
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
# The response will contain your upload token
```

## مرحله ۲: آپلود `media`
پس از دریافت `upload_token`، از آن برای آپلود فایل `media` خود استفاده کنید.


### Request

```http request
POST https://chat.divar.ir/upload/{{media_type}}
```
```header
Authorization: Bearer {{upload_token}}
Accept: */*
```
```body
{{media_file}} # in binary
```
<br>`media_type` can be `image`, `video`, `voice` or `file`

### Response

```json
{
  "id": "your_media_token",
  "status": "ok"
}
```

### python example
```python
import requests
media_types = ['image', 'video', 'voice', 'file']
media_type = media_types[0]
url = f"https://chat.divar.ir/upload/{media_type}"

files = [
  ('file', ('your_image.jpeg', open('path/to/image.jpeg', 'rb'), 'image/jpeg'))
]
headers = {
  'Authorization': 'Basic upload_token_from_last_step',
  'Accept': 'application/json, text/plain, */*'
}

response = requests.request("POST", url, headers=headers, files=files)
```

## مرحله ۳: استفاده از `media_token` در چت شما

در نهایت، از توکن رسانه در پیام‌های مکالمه خود استفاده کنید.

این کار با پر کردن فیلد `media_token` در `object` پیام انجام می‌شود.




```json
{
  "media_token": "your_media_token"
}
```

ارسال پیام با media در چت‌بات را می‌توانید در [اینجا][راهنما » چت‌بات] بخوانید.
<br>
ارسال پیام با media در چت را می‌توانید در [اینجا][چت»ارسال پیام] بخوانید.

[راهنما » چت‌بات]: /chat/chatbot_conversations.md
[چت»ارسال پیام]: /chat/users_conversations.md
