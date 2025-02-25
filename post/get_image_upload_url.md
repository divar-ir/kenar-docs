# دریافت لینک آپلود عکس

با استفاده از این اندپوینت میتوانید لینک آپلود عکس برای آگهی هایی که قصد ویرایش آنها را دارید دریافت کنید
توجه کنید که این لینک مدت محدودی معتبر میباشد و بعد از گذشت حدود ۱۰ دقیقه لینک گفته شده منقضی میشود
<br>
```http request
GET https://api.divar.ir/v1/open-platform/post/image-upload-url
x-api-key: {{api-key}}
```

پاسخ

در صورت موفق بودن، پاسخی شامل لینک آپلود عکس برگردانده میشود


```json
{
    "upload_url": "https://api.divar.ir/v8/upload/open-platform/live-post-image/<token>"
}
```

سپس با استفاده از لینک برگردانده شده میتوانید عکس های جدید را به فرمت باینری آپلود کنید

```bash
curl --location --request POST 'https://api.divar.ir/v8/upload/open-platform/live-post-image/<token>' \
--header 'Content-Type: image/jpeg' \
--data-binary '@/path/to/image.jpg'
```

پاسخ
```json
{
    "path": "{{uploaded_image_path}}"
}
```
