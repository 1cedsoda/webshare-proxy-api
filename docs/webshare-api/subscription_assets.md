Available assets


# Available assets

This endpoint returns the available assets for each proxy category.

### Response


  Field                   Type       Description
  ----------------------- ---------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `total_subnets`         `number`   The number of subnets available under each proxy category. Categories are: `shared`, `semidedicated` and `dedicated`. And sub categories are: `default`, `isp`, `datacenter_and_isp` and `residential`
  `available_countries`   `dict`     Dictionary of [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) and the number of proxies we have in that country under each proxy category.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/subscription/available_assets/
```


available_assets.py

```
import requests
import json
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/subscription/available_assets/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "shared": {
    "default": {"total_subnets": 1, "available_countries": { "US", 1000, "CA": 1000, ...}},
    "residential": {"total_subnets": 1, "available_countries": { "US", 1000, "CA": 1000, ...}},
    "isp": {"total_subnets": 1, "available_countries": { "US", 1000, "CA": 1000, ...}},
  },
  "semidedicated": {
    "premium": {"total_subnets": 1, "available_countries": { "US", 1000, "CA": 1000, ...}},
    "isp": {"total_subnets": 1, "available_countries": { "US", 1000, "CA": 1000, ...}},
  },
  "dedicated": {
    "premium": {"total_subnets": 1, "available_countries": { "US", 1000, "CA": 1000, ...}},
    "isp": {"total_subnets": 1}, "available_countries": { "US", 1000, "CA": 1000, ...},
  },
}
```


::: nx-mt-16
