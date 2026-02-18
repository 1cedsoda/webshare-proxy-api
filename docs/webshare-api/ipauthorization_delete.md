Delete IP authorization


# Delete IP Authorization

This endpoint lets you delete an IP authorization. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


  Parameter   Type       Description
  ----------- ---------- -------------------------------------------
  `ID`        `string`   The ID of the IP authorization to delete.

### Request & Response


```
DELETE https://proxy.webshare.io/api/v2/proxy/ipauthorization/<ID>/
```


or in case of targeting a specific plan


```
DELETE https://proxy.webshare.io/api/v2/proxy/ipauthorization/<ID>/?plan_id=<Plan ID>
```


delete_ip_authorization.py

```
import requests
 
response = requests.delete(
    "https://proxy.webshare.io/api/v2/proxy/ipauthorization/<ID>/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above returns empty response with `204 No Content`


```
HTTP/1.1 204 No Content
```


::: nx-mt-16
