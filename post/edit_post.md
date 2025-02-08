# ویرایش آگهی

| Edit Post        |                        |
|------------------|------------------------|
| Permissions      | EDIT_POST              |
| OAUTH Scope      | POST_EDIT.<post_token> |

برای ویراش اطلاعات آگهی نظیر عنوان، توضیحات و عکس های آگهی میتوانید از این اندپوینت استفاده کنید

برای استفاده از این اندپوینت علاوه بر دسترسی EDIT_POST باید دسترسی POST_EDIT.<post_token> را نیز از کابر دریافت کنید
<br>
درخواست
```http request
PUT https://api.divar.ir/v1/open-platform/post/<token>
x-access-token: {{access_token_with_oauth_scope_POST_EDIT.<post_token>}}
x-api-key: {{apikey}}
{
    "title": "عنوان مد نظر برای آگهی",
    "description": "توضیحات مد نظر برای آگهی",
    "image_paths": [
        "{{image_path1}}",
        "{{image_path2}}",
        "{{image_path3}}",
        ...
    ]
}
```

پاسخ

در صورت موفق بودن ویرایش آگهی، پاسخی خالی با کد 200 برگردانده میشود

```json
{}
```

همچنین برای آپلود عکس های جدید و گرفتن image_path آنها میتوانید از [این][راهنما » آپلود عکس] اندپوینت استفاده کنید

[راهنما » آپلود عکس]: ./get_image_upload_url.md
