Get proxy stats


# Get proxy stats

This endpoint retrieves the proxy stats. You need to add a query-string parameter `plan_id`.


```
GET https://proxy.webshare.io/api/v3/proxy/list/stats?plan_id=<PLAN-ID>
```


### Request & Response


get_proxy_stats.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v3/proxy/list/stats?plan_id=PLAN-ID",
  headers={ "Authorization": "Token APIKEY" }
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "available_countries": {"US": 95},
  "ip_ranges_24": {"10.1.1.0/24": 5, "10.1.3.0/24": 100},
  "ip_ranges_16": {"10.1.0.0/16": 105},
  "ip_ranges_8": {"10.0.0.0/8": 105},
  "available_ip_ranges_24": {"1.2.3.0/24": 100},
  "available_ip_ranges_16": {"1.2.0.0/16": 100},
  "available_ip_ranges_8": {"1.0.0.0/8": 100},
  "asns": {"6137": ["ASN NAME", 105]},
  "available_asns": {"9421": ["ASN NAME", 105]}
}
 
```


::: nx-mt-16
