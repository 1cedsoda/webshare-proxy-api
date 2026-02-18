Masquerade as a sub-user


# Masquerade as a user

Add the `X-Subuser` header to your API calls to retrieve data as that particular sub-user.

### URL parameters


  Parameter      Type    Description
  -------------- ------- -------------------------------------------------
  `Subuser ID`   `int`   The ID of the subuser you wish to masquerade as

### Request & Response


::: text-sm
Add `X-Subuser` to any of the following APIs 
example.py

```
import requests
 
response = requests.get("https://proxy.webshare.io/api/v2/proxy/config/", headers={
    "Authorization": "Token APIKEY",
    "X-Subuser": "<User ID>"
})
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "state": "completed",
  "countries": {"US":5, "FR":100},
  "available_countries": {"US": 95},
  "unallocated_countries": {},
  "ip_ranges_24": {"10.1.1.0/24": 5, "10.1.3.0/24": 100},
  "ip_ranges_16": {"10.1.0.0/16": 105},
  "ip_ranges_8": {"10.0.0.0/24": 105},
  "available_ip_ranges_24": {"1.2.3.0/24": 100},
  "available_ip_ranges_16": {"1.2.3.0/24": 100},
  "available_ip_ranges_8": {"1.2.3.0/24": 100},
  "username": "username",
  "password": "password",
  "request_timeout": 86400,
  "request_idle_timeout": 900,
  "ip_authorization_country_codes": ["US", "FR"],
  "auto_replace_invalid_proxies": true,
  "auto_replace_low_country_confidence_proxies": false,
  "proxy_list_download_token": "aa87abbc...zz",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
