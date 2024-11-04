### Chat Message

|    پارامتر     |               نوع                |                               توضیحات |
|:--------------:|:--------------------------------:|--------------------------------------:|
|      `id`      |              string              |                          شناسه‌ی پیام |
| `conversation` |  [Conversation](#conversation)   | مکالمه‌ای که پیام در آن ارسال شده است |
|    `sender`    | [MessageSender](#message-sender) |                    ارسال کننده‌ی پیام |
|     `type`     |              string              |                      نوع پیام: `TEXT` |
|   `sent_at`    |        Timestamp (int64)         |                       زمان ارسال پیام |

#### نمونه

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
  "sent_at": 1729429926140000
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
