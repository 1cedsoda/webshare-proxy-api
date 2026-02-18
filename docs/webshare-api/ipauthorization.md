IP Authorization


# IP Authorization

Webshare proxy offers 2 methods for authenticating with the proxies: password and IP Authorization. If you do not wish to use password authentication, you can instead authorize your IP address using this API.

### The IP authorization object

Each IP Authorization instance has the following fields


  Attributes       Type       Description
  ---------------- ---------- -----------------------------------------------------------------------------------------
  `id`             `int`      The unique ID of the IP Authorization object.
  `ip_address`     `string`   The IP address which is authorized to connect to the proxies without username/password.
  `created_at`     `string`   The timestamp of when this instance was created.
  `last_used_at`   `string`   The timestamp when this IP address was last used.

### In JSON format


``` {
  "id": 1337,
  "ip_address": "10.1.2.3",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "last_used_at": null
}
```


::: nx-mt-16
