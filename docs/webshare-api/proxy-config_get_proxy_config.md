Get proxy config


# Get proxy config

This endpoint retrieves the proxy config. You need to add a query-string parameter `plan_id`.


```
GET https://proxy.webshare.io/api/v3/proxy/config?plan_id=<PLAN-ID>
```


### Request & Response


get_proxy_config.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v3/proxy/config?plan_id=PLAN-ID",
  headers={ "Authorization": "Token APIKEY" }
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "request_timeout": 86400,
  "request_idle_timeout": 900,
  "ip_authorization_country_codes": ["US", "FR"],
  "auto_replace_invalid_proxies": true,
  "auto_replace_low_country_confidence_proxies": false,
  "auto_replace_out_of_rotation_proxies": false,
  "auto_replace_failed_site_check_proxies": false,
  "proxy_list_download_token": "aa87abbc...zz",
}
```


::: nx-mt-16
