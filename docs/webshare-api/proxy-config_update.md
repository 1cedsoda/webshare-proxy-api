Update proxy config


# Update proxy config

This endpoint updates the proxy config. See [Proxy Config Object](/proxy-config#the-proxy-config-object) for fields that can be updated. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.


```
PATCH https://proxy.webshare.io/api/v2/proxy/config/
```


or in case of targeting a specific plan


```
PATCH https://proxy.webshare.io/api/v2/proxy/config/?plan_id=<Plan ID>
```


### Request & Response


update_proxy_config.py

```
import requests
 
response = requests.patch(
    "https://proxy.webshare.io/api/v2/proxy/config/",
    json={
        "username":"new_username"
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "state": "completed",
  "countries": {"US": 5, "FR": 100},
  "available_countries": {"US": 95},
  "unallocated_countries": {},
  "ip_ranges_24": {"10.1.1.0/24": 5, "10.1.3.0/24": 100},
  "ip_ranges_16": {"10.1.0.0/16": 105},
  "ip_ranges_8": {"10.0.0.0/8": 105},
  "available_ip_ranges_24": {"1.2.3.0/24": 100},
  "available_ip_ranges_16": {"1.2.0.0/16": 100},
  "available_ip_ranges_8": {"1.0.0.0/8": 100},
  "asns": {"6137": ("ASN NAME", 105)},
  "available_asns": {"9421": ("ASN NAME", 105)},
  "username": "new_username",
  "password": "password",
  "request_timeout": 86400,
  "request_idle_timeout": 900,
  "ip_authorization_country_codes": ["US", "FR"],
  "auto_replace_invalid_proxies": true,
  "auto_replace_low_country_confidence_proxies": false,
  "auto_replace_out_of_rotation_proxies": false,
  "auto_replace_failed_site_check_proxies": false,
  "proxy_list_download_token": "aa87abbc...zz",
  "is_proxy_used": false,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
