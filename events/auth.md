## User Access Revocation
برای دریافت این رویداد، نیازی به ثبت درخواست برای گوش دادن به رویداد ندارید. در عوض، باید هنگام گرفتن اکسس توکن، اسکوپ 
`NOTIFICATION_ACCESS_REVOCATION`
و
`USER_ID`
را در اسکوپ‌های درخواستی خود قرار دهید.

|  پارامتر  |  نوع   | توضیحات       |
|:---------:|:------:|---------------|
| `user_id` | string | شناسه‌ی کاربر |
