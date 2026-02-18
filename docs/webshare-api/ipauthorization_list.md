List IP authorizations


# List IP Authorization

This endpoint returns the proxy IP authorizations in [paginated](/#pagination) format. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


  Parameter   Type       Description
  ----------- ---------- -------------------------------------------
  `ID`        `string`   The ID of the IP authorization to delete.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/proxy/ipauthorization/
```


or in case of targeting a specific plan


```
GET https://proxy.webshare.io/api/v2/proxy/ipauthorization/?plan_id=<Plan ID>
```


list_ip_authorization.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/proxy/ipauthorization/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1337,
      "ip_address": "10.1.2.3",
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "last_used_at": null
    },
    ...
  ]
}
```


::: nx-mt-16
