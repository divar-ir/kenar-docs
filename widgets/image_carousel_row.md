# Image Carousel Row

فرمت این ویجت به صورت زیر می باشد.

```json5
{
  "image_carousel_row": {
    "items": [
      {
        "image_url": "e7172fc8-2a9c-43c7-927d-93ac7477eb06.jpg",
        "description": "1"
      },
      {
        "image_url": "979b9755-7b73-4adc-b209-7905300390ba.jpg",
        "description": "2"
      },
      {
        "image_url": "logo",
        "description": "3"
      }
    ],
    "has_divider": true
  },
  "semantic_paths": {
    "house_images": "items"
  }
}
```
##  نمایش

![ScreenShot](doc-images/image_carousel_row.png)

این ویجت یک لیست از عکس هارو در یک سطر نمایش میدهد.

هر `image_url` باید ایدی عکس بدست آمده مطابق این [داک](./image.md) باشد.

پارامتر `has_divider` مشخص می‌کند که خط پایین ویجت باشد یا نباشد.
