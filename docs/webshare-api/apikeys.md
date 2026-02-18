API Keys


# API Keys

You can use the API keys to authorize your access. All API keys have the same permissions and full account access.

### API key object

Each API key has the following fields


  Attributes     Type        Description
  -------------- ----------- -----------------------------------------------------------------
  `id`           `integer`   The unique ID of the API key.
  `key`          `string`    The 40 character alpha-numeric API key.
  `label`        `string`    The label for this API key. May be duplicate with other labels.
  `created_at`   `string`    The timestamp when this instance was created.
  `updated_at`   `string`    The timestamp when this instance was last updated.

### In JSON Format


``` {
  "id": 1337,
  "key": "abc1234...zzz",
  "label": "server1 key",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
