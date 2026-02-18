Create IP authorization


# Create IP authorization

This endpoint lets you create an IP authorization. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


  Attributes     Types      Description
  -------------- ---------- -----------------------------------------------------------------------------------------------------------
  `ip_address`   `string`   The IP address to authorize. May return 400 error if this IP address is already authorized in the system.

### Request & Response


```
POST https://proxy.webshare.io/api/v2/proxy/ipauthorization/
```


or in case of targeting a specific plan


```
POST https://proxy.webshare.io/api/v2/proxy/ipauthorization/?plan_id=<Plan ID>
```


create_ip_authorization.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/proxy/ipauthorization/",
    json={"ip_address": "10.1.2.3"},
    headers={"Authorization": "Token APIKEY"})
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1337,
  "ip_address": "10.1.2.3",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "last_used_at": null
}
```


::: nx-mt-16
