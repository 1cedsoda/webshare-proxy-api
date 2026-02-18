Proxy List


# Proxy List API

You can use the Webshare API to retrieve your proxy list in 2 modes: `direct` and `backbone`. Each mode returns the same proxy data structure with minor changes on how the fields are used.

## Backbone Proxy

Backbone proxy connections always use `p.webshare.io` connection address. In username/password authentication, the following ports can be used: `80`, `1080`, `3128` and `9999 - 19999`. The IP Authentication mode, you must use the `port` field returned from the API.

## Direct Proxy

Direct proxy connections use the `proxy_address` and `port` field returned from the API. Same fields are used across username/password and IP Authentication modes.

## The Proxy object


  Attributes            Type        Description
  --------------------- ----------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                  `string`    Unique identifier of the proxy instance.
  `username`            `string`    Proxy username.
  `password`            `string`    Proxy password.
  `proxy_address`       `string`    IP Address of the proxy. In Direct Connection mode, connect to this IP address. In Backbone Connection mode, connect to `p.webshare.io`. This field is `null if `plan.pool_filter`is`residential\`.
  `port`                `int`       Port used to connect to the proxies. In Backbone mode, the port is always set for IP Authorization.
  `valid`               `boolean`   If the proxy is working as expected. Webshare checks proxies once every 30 seconds.
  `last_verification`   `string`    Last time the proxy was checked.
  `country_code`        `string`    The [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the proxy.
  `city_name`           `string`    The city name of the proxy.
  `created_at`          `string`    The timestamp of when this instance was created.

proxy_object.json

``` {
  "id": "d-10513",
  "username": "username",
  "password": "password",
  "proxy_address": "1.2.3.4",
  "port": 8168,
  "valid": true,
  "last_verification": "2019-06-09T23:34:00.095501-07:00",
  "country_code": "US",
  "city_name": "New York",
  "created_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
