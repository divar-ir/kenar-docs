### Chat Message

|    پارامتر     |               نوع                |                                 توضیحات |
|:--------------:|:--------------------------------:|----------------------------------------|
|      `id`      |              string              |                            شناسه‌ی پیام |
| `conversation` |  [Conversation](#conversation)   |   مکالمه‌ای که پیام در آن ارسال شده است |
|    `sender`    | [MessageSender](#message-sender) |                      ارسال‌کننده‌ی پیام |
|     `type`     |              string              | نوع پیام: `TEXT`، `IMAGE`، `FILE`، `VOICE`، `LOCATION`، `VIDEO` |
|   `sent_at`    |        Timestamp (int64)         |                         زمان ارسال پیام |
|     `text`     |              string              |  متن پیام (در صورتی که نوع پیام `TEXT` باشد) |
|  `image_data`  |      [ImageData](#imagedata)     | اطلاعات تصویر (در صورتی که نوع پیام `IMAGE` باشد) |
|  `file_data`   |      [FileData](#filedata)       |   اطلاعات فایل (در صورتی که نوع پیام `FILE` باشد) |
|  `voice_data`  |     [VoiceData](#voicedata)      | اطلاعات صوتی (در صورتی که نوع پیام `VOICE` باشد) |
| `location_data`|    [LocationData](#locationdata) | موقعیت مکان (در صورتی که نوع پیام `LOCATION` باشد) |
|  `video_data`  |     [VideoData](#videodata)      |  اطلاعات ویدئو (در صورتی که نوع پیام `VIDEO` باشد) |

#### Text

|  پارامتر |   نوع   |             توضیحات              |
|:--------:|:-------:|----------------------------------|
|  `text`  | string  | متن پیام (در صورتی که نوع پیام `TEXT` باشد) |

#### نمونه پیام متنی (Text)

```json
{
  "id": "e7a08a2c-8ee4-11ef-af85-4e9e9bfa3c12",
  "conversation": {
    "id": "edbb9499-cccc-4d35-b21f-621fa95f2b3e",
    "type": "POST",
    "post_token": "gZd7omnS"
  },
  "sender": {
    "side": "SELLER",
    "type": "BOT"
  },
  "type": "TEXT",
  "sent_at": 1729429926140000,
  "text": "hello world"
}
```

#### ImageData

|    پارامتر    |    نوع   |            توضیحات            |
|:-------------:|:--------:|-------------------------------|
|     `link`    |  string  |            لینک تصویر (URL)   |
| `size_bytes`  |  uint64  |        اندازه تصویر به بایت   |
|  `height_px`  |  uint32  |       ارتفاع تصویر به پیکسل   |
|  `width_px`   |  uint32  |         عرض تصویر به پیکسل    |

#### نمونه پیام تصویری (Image)

```json
{
  "id": "f1b2c3d4-9abc-11ef-bb22-5f6e7d8a9b0c",
  "conversation": {
    "id": "edbb9499-cccc-4d35-b21f-621fa95f2b3e",
    "type": "POST",
    "post_token": "gZd7omnS"
  },
  "sender": {
    "side": "BUYER",
    "type": "USER"
  },
  "type": "IMAGE",
  "sent_at": 1729430126140000,
  "image_data": {
    "link": "https://example.com/images/image1.jpg",
    "size_bytes": 204800,
    "height_px": 1080,
    "width_px": 1920
  }
}
```

#### FileData

|    پارامتر   |    نوع   |        توضیحات         |
|:------------:|:--------:|------------------------|
|    `link`    |  string  |          لینک فایل (URL) |
|    `name`    |  string  |            نام فایل    |
| `size_bytes` |  uint64  |   اندازه فایل به بایت  |

#### نمونه پیام فایل (File)

```json
{
  "id": "aabbccdd-1234-5678-90ab-1c2d3e4f5g6h",
  "conversation": {
    "id": "edbb9499-cccc-4d35-b21f-621fa95f2b3e",
    "type": "POST",
    "post_token": "gZd7omnS"
  },
  "sender": {
    "side": "SELLER",
    "type": "USER"
  },
  "type": "FILE",
  "sent_at": 1729430226140000,
  "file_data": {
    "link": "https://example.com/files/document.pdf",
    "name": "document.pdf",
    "size_bytes": 1048576
  }
}
```

#### VoiceData

|    پارامتر   |    نوع   |         توضیحات         |
|:------------:|:--------:|------------------------|
|    `link`    |  string  |         لینک صوت (URL)  |
| `size_bytes` |  uint64  |    اندازه صوت به بایت  |

#### نمونه پیام صوتی (Voice)

```json
{
  "id": "12345678-abcd-ef01-2345-6789abcdef01",
  "conversation": {
    "id": "edbb9499-cccc-4d35-b21f-621fa95f2b3e",
    "type": "POST",
    "post_token": "gZd7omnS"
  },
  "sender": {
    "side": "BUYER",
    "type": "USER"
  },
  "type": "VOICE",
  "sent_at": 1729430326140000,
  "voice_data": {
    "link": "https://example.com/voice/message.ogg",
    "size_bytes": 512000
  }
}
```

#### LocationData

|  پارامتر   |   نوع  |                توضیحات                 |
|:----------:|:------:|----------------------------------------|
| `latitude` | double |    عرض جغرافیایی (بین `-90.0` و `+90.0`) |
| `longitude`| double |  طول جغرافیایی (بین `-180.0` و `+180.0`) |

#### نمونه پیام موقعیت مکانی (Location)

```json
{
  "id": "abcdef12-3456-7890-abcd-ef1234567890",
  "conversation": {
    "id": "edbb9499-cccc-4d35-b21f-621fa95f2b3e",
    "type": "POST",
    "post_token": "gZd7omnS"
  },
  "sender": {
    "side": "SELLER",
    "type": "USER"
  },
  "type": "LOCATION",
  "sent_at": 1729430426140000,
  "location_data": {
    "latitude": 35.6892,
    "longitude": 51.3890
  }
}
```

#### VideoData

|      پارامتر     |    نوع   |             توضیحات             |
|:----------------:|:--------:|--------------------------------|
|      `link`      |  string  |        لینک ویدئو (URL)        |
| `thumbnail_link` |  string  | لینک تصویر بندانگشتی ویدئو (URL) |
|   `size_bytes`   |  uint64  |        اندازه ویدئو به بایت    |

#### نمونه پیام ویدئویی (Video)

```json
{
  "id": "0a1b2c3d-4e5f-6789-abcd-ef0123456789",
  "conversation": {
    "id": "edbb9499-cccc-4d35-b21f-621fa95f2b3e",
    "type": "POST",
    "post_token": "gZd7omnS"
  },
  "sender": {
    "side": "BUYER",
    "type": "USER"
  },
  "type": "VIDEO",
  "sent_at": 1729430526140000,
  "video_data": {
    "link": "https://example.com/videos/video.mp4",
    "thumbnail_link": "https://example.com/videos/thumbnail.jpg",
    "size_bytes": 20971520
  }
}
```


### Conversation

|   پارامتر    |        نوع        |                                                                            توضیحات |
|:------------:|:-----------------:|-----------------------------------------------------------------------------------:|
|     `id`     |      string       |                                                                     شناسه‌ی مکالمه |
|    `type`    |      string       |                                                          نوع مکالمه: `POST`، `BOT` |
| `post_token` | string (Optional) | توکن آگهی که مکالمه بر روی آن اتفاق افتاده است. در صورتی که نوع مکالمه `POST` باشد |

### Message Sender

| پارامتر |  نوع   |                               توضیحات |
|:-------:|:------:|--------------------------------------:|
| `side`  | string | طرف فرستنده‌ی پیام: `SELLER`، `BUYER` |
| `type`  | string |    نوع فرستنده‌ی پیام: `HUMAN`، `BOT` |
