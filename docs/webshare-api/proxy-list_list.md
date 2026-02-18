List proxies


# List proxies

This endpoint returns the proxy list in [paginated](/#pagination) format. The `mode` parameter must always be specified. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


  Parameter             Type        Description
  --------------------- ----------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `mode`                `string`    Must be either `direct` or `backbone`. Required field. This field must be `backbone` if `plan.pool_filter` is `residential`.
  `country_code__in`    `string`    Filter by comma separated [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Example filtering USA and French proxies: `FR,US`. Optional field.
  `search`              `string`    Filter by a search phrase. Can accept arbitrary text. Search does not work in `backbone` mode. Optional field.
  `ordering`            `string`    Comma separated list of fields to specify ordering. Reverse ordering (DESC) can be achieved by adding minus in front of the field. Example: `-valid,proxy_address`. Ordering is not supported in the `backbone` mode. Optional field.
  `created_at`          `string`    Filter by proxy create date. created_at filter does not work in `backbone` mode. Optional field.
  `proxy_address`       `string`    Filter by a specific proxy address. proxy_address filter does not work in `backbone` mode. Optional field.
  `proxy_address__in`   `string`    Filter by comma separated proxy addresses. proxy_address\_\_in filter does not work in `backbone` mode. Optional field.
  `valid`               `boolean`   Filter by the validity of the proxy address. valid filter does not work in `backbone` mode. Optional field.
  `asn_number`          `string`    Filter by the the proxy address ASN number. asn_number filter does not work in `backbone` mode. Optional field.
  `asn_name`            `string`    Filter by the the proxy address ASN name. asn_name filter does not work in `backbone` mode. Optional field.

### Request & Response


list_proxies.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/proxy/list/?mode=direct&page=1&page_size=25",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "count": 10,
  "next": null,
  "previous": null,
  "results": [
    {
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
    },
    ...
  ]
}
```


::: nx-mt-16
