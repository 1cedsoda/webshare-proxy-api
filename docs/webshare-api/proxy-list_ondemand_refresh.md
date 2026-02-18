Refresh proxy list


# Refresh proxy list

Refresh your entire proxy list. You can only perform this action if you have `on_demand_refreshes_available` available. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.


```
POST https://proxy.webshare.io/api/v2/proxy/list/refresh/
```


or in case of targeting a specific plan


```
POST https://proxy.webshare.io/api/v2/proxy/list/refresh/?plan_id=<Plan ID>
```


### Request & Response


refresh_list.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/proxy/list/refresh/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The above command returns empty response with `204 No Content`


```
HTTP/1.1 204 No Content
```


::: nx-mt-16
