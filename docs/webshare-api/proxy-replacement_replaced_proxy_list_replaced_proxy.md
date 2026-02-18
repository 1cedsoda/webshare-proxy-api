List replaced proxy


## List replaced proxies

This endpoint returns the replaced proxy list in [paginated](/#pagination) format with [filtering & ordering](/#filtering-amp-ordering) enabled.


```
GET https://proxy.webshare.io/api/v2/proxy/list/replaced/
```


### URL Parameters


  Parameter                  Type    Description
  -------------------------- ------- --------------------------------------------------------------
  `proxy_list_replacement`   `int`   Filter the replaced proxies by a specific Proxy replacement.

### Request & Response


list_replaced_proxies.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/proxy/list/replaced/",
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
      "id": 93892,
      "reason": "proxy_replaced",
      "proxy": "45.158.184.116",
      "proxy_port": 9192,
      "proxy_country_code": "US",
      "replaced_with": "104.227.101.59",
      "replaced_with_port": 6120,
      "replaced_with_country_code": "US",
      "created_at": "2022-07-26T21:25:13.966946-07:00"
    },
    ...
  ]
}
```


::: nx-mt-16
