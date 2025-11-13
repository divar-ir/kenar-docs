# دریافت لینک آپلود مدیای آگهی

برای آپلود تصویر و ویدیو‌ی آگهی‌ها باید با استفاده از این API، آدرس و روش آپلود را دریافت کنید.
توجه کنید که در پاسخ به این درخواست، آدرس و نوع درخواست HTTP که باید بزنید ارائه می‌شود.
آدرس و نوع درخواست بازگردانده شده در این API ممکن است بدون اطلاع قبلی جایگزین شوند. بنابراین، لازم است شما همواره قبل از ارسال عکس یا فیلم، این سرویس را فراخوانی کرده و اطلاعات به روز را دریافت کنید.

<br />

```http request
GET https://open-api.divar.ir/v2/open-platform/post/upload-urls
x-api-key: {{api-key}}
```

پاسخ


```json
{
  "image": {
    "url": "https://open-api.divar.ir/v8/upload/post/live-post-image",
    "http_method": "POST"
  },
  "video": {
    "url": "https://open-api.divar.ir/v1/upload-video/",
    "http_method": "PUT"
  }
}
```

برای آپلود در آدرس‌های بازگردانده شده لازم است درخواست خود را با فرمت باینری به همراه هدر `x-api-key` برنامه‌ی خودتان ارسال کنید.
دقت کنید که هدر Authorization در این درخواست‌ها باید خالی باشد.
```bash
curl --location --request POST 'https://open-api.divar.ir/v8/upload/post/live-post-image' \
--header 'Content-Type: image/jpeg' \
--header 'x-api-key: {{API_KEY}}' \
--data-binary '@/path/to/image.jpg'
```

پاسخ
```json
{
    "path": "/neda/live-post-image/0a52014f-d396-4da0-a0a1-86b9d336b425",
    "photo_url": "https://s100.divarcdn.com/static/photo/neda/post/DNn7Ke6JngWDYGPnvhqPrQ/0a52014f-d396-4da0-a0a1-86b9d336b425.jpg",
    "thumbnail_url": "https://s100.divarcdn.com/static/photo/neda/thumbnail/6VMWnUtLC578NHCRvAEejw/0a52014f-d396-4da0-a0a1-86b9d336b425.jpg"
}
```

نمونه برای آپلود ویدیو

```bash
curl --location --request PUT 'https://open-api.divar.ir/v1/upload-video/' \
--header 'Content-Type: video/mp4' \
--header 'x-api-key: {{API_KEY}}' \
--data-binary '@/path/to/video.mp4'
```

پاسخ
```json
{
    "video_name": "raw/33e7137a-2720-45ad-9859-cacecce68a0c.mp4",
    "video_url": "https://video1.divarcdn.com/static/videos/raw/33e7137a-2720-45ad-9859-cacecce68a0c.mp4",
    "thumbnail_name": "thumbnail/33e7137a-2720-45ad-9859-cacecce68a0c.jpg",
    "thumbnail_url": "https://s100.divarcdn.com/static/videos/thumbnails/thumbnail/33e7137a-2720-45ad-9859-cacecce68a0c.jpg"
}
```