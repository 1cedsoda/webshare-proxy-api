Create replacement


# Create proxy replacement

This endpoint lets you create a proxy replacement which replaces proxies from your proxy list. The `proxies_removed` and `proxies_added` must always match. Cannot create proxy replacement if `plan.pool_filter` is `residential`. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.


::: text-sm
This API is an Asynchronous API which means it will return a proxy replacement request with validating state, you will need to keep calling [retrive endpoint](/proxy-replacement/proxy_replacement/proxy_replacement_retrieve) to get the last updates on that request until it\'s completed.


```
POST https://proxy.webshare.io/api/v3/proxy/replace/
```


or in case of targeting a specific plan


```
POST https://proxy.webshare.io/api/v3/proxy/replace/?plan_id=<Plan ID>
```


### Parameters


  Attributes       Type     Description
  ---------------- -------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `to_replace`     `dict`   Dictionary indicating which proxies to replace.
  `replace_with`   `list`   List of dictionaries indicating which proxies to replace with.
  `dry_run`        `bool`   You can dry-run a replacement to learn number of proxies removed/added prior to actually replacing the proxy list. `dry_run=True` does not modify the proxy list. You can check the state of the replacement by calling retriving endpoint.

### Request & Response

#### Replace With Country

Available countries can be retrieved using 
create_replacement.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v3/proxy/replace/",
    json={
        "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
        "replace_with": [{"type": "country", "country_code": "US"}],
        "dry_run": False
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[]

The commands above return JSON structured like this:


response.json

``` {
    "id": 98315,
    "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
    "replace_with": [{"type": "country", "country_code": "US"}],
    "dry_run": false,
    "state": "validating",
    "proxies_removed": null,
    "proxies_added": null,
    "reason": "",
    "error": null,
    "error_code": null,
    "created_at": "2022-07-26T21:25:13.966946-07:00",
    "dry_run_completed_at": null,
    "completed_at": null
}
```


#### Replace With ASN

Available ASNs can be retrieved using 
create_replacement.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/proxy/replace/",
    json={
        "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
        "replace_with": [{"type": "asn", "asn_numbers": [2914]}],
        "dry_run": False
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
    "id": 98315,
    "reason": "proxy_replaced",
    "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
    "replace_with": [{"type": "asn", "asn_numbers": [2914]}],
    "dry_run": false,
    "state": "completed",
    "proxies_removed": 1,
    "proxies_added": 1,
    "created_at": "2022-07-26T21:25:13.966946-07:00",
    "completed_at": "2022-07-26T21:25:13.966946-07:00",
}
```


#### Replace With IP range

Available IP ranges can be retrieved using 
create_replacement.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/proxy/replace/",
    json={
        "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
        "replace_with": [{"type": "ip_range", "ip_ranges": ["1.2.3.4/8"]}],
        "dry_run": False
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
    "id": 98315,
    "reason": "proxy_replaced",
    "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
    "replace_with": [{"type": "ip_range", "ip_ranges": ["1.2.3.4/8"]}],
    "dry_run": false,
    "state": "completed",
    "proxies_removed": 1,
    "proxies_added": 1,
    "created_at": "2022-07-26T21:25:13.966946-07:00",
    "completed_at": "2022-07-26T21:25:13.966946-07:00",
}
```


#### Replace With Random IPs


create_replacement.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/proxy/replace/",
    json={
        "to_replace": {"type": "ip_address", "ip_addresses": ["1.2.3.4","1.2.3.5"]},
        "replace_with": [{"type": "any", "count": 2}],
        "dry_run": False
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
    "id": 98315,
    "reason": "proxy_replaced",
    "to_replace": {"type": "ip_address", "ip_addresses": ["1.2.3.4","1.2.3.5"]},
    "replace_with": [{"type": "any", "count": 2}],
    "dry_run": false,
    "state": "completed",
    "proxies_removed": 1,
    "proxies_added": 1,
    "created_at": "2022-07-26T21:25:13.966946-07:00",
    "completed_at": "2022-07-26T21:25:13.966946-07:00",
}
```


### 400 Error Types


  Error Code                                  HTTP Code   Description
  ------------------------------------------- ----------- ---------------------------------------------------------------------------------------------
  `active_replacement`                        `400`       You are already replacing a proxy. Please wait a moment and try again.
  `not_enough_replacements_in_subscription`   `400`       You have 1 proxy replacements remaining. Upgrade subscription to receive more replacements.
  `invalid`                                   `400`       Your proxy list is not editable

::: nx-mt-16
