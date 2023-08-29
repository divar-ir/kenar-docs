# Image Carousel Row

فرمت این ویجت به صورت زیر می باشد.

```json5
{
  "widget_type": "IMAGE_CAROUSEL_ROW",
  "data": {
    "@type": "type.googleapis.com/widgets.ImageCarouselRowData",
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
  }
}
```
##  نمایش

![ScreenShot](doc-images/image_carousel_row.png)

این ویجت یک لیست از عکس هارو در یک سطر نمایش میدهد.

حتما باید `widget_type` برابر با `IMAGE_CAROUSEL_ROW` قرار داده شود.

هر `image_url` می‌تواند `logo` یا ایدی عکس بدست آمده مطابق این [داک](./image.md) باشد.

پارامتر `has_divider` مشخص می‌کند که خط پایین ویجت باشد یا نباشد.
