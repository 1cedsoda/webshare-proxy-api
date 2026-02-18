Assign unallocated countries


# Allocate unallocated countries

This endpoint allocates the proxies in `unallocated_countries` state. If there are 5 unallocated countries, you must send `new_countries` with 5 countries in total. All `new_countries` must be valid and available. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.


```
POST https://proxy.webshare.io/api/v2/proxy/config/allocate_unallocated_countries/
```


or in case of targeting a specific plan


```
POST https://proxy.webshare.io/api/v2/proxy/config/allocate_unallocated_countries/?plan_id=<Plan ID>
```


### Request & Response


JavaScript


allocate_unallocated_countries.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/proxy/config/allocate_unallocated_countries/",
    headers={"Authorization": "Token APIKEY"},
    json={
        "new_countries":{
            "FR":5
        }
    },
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
  "username": "username",
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


### HTTP request

`POST https://proxy.webshare.io/api/v2/proxy/config/allocate_unallocated_countries/`

  Attributes      Description
  --------------- ------------------------------------------------------------------------------------------------------------
  new_countries   Number of proxies by country_code:count. Country code must be upper case and count must be greater than 0.

::: nx-mt-16
