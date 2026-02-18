List replacement


# List proxy replacement

This endpoint retrieves all existing proxy replacements associated with the user in [paginated](/#pagination) format with [filtering & ordering](/#filtering-amp-ordering) enabled. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


  Parameter    Type        Description
  ------------ ----------- ---------------------------------------------------------------------------------------------
  `ordering`   `string`    Default ordering is `id`. Available ordering fields are `id`, `created_at`, `completed_at`.
  `dry_run`    `boolean`   Filter proxy replacements with whether it is dry run or not.
  `state`      `string`    Filter proxy replacements by state

### Request & Response


```
GET https://proxy.webshare.io/api/v3/proxy/replace/
```


or in case of targeting a specific plan


```
POST https://proxy.webshare.io/api/v3/proxy/replace/?plan_id=<Plan ID>
```


list_proxy_replacement.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v3/proxy/replace/",
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
        "id": 98315,
        "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
        "replace_with": [{"type": "country", "country_code": "US"}],
        "dry_run": false,
        "state": "completed",
        "proxies_removed": 1,
        "proxies_added": 1,
        "reason": "proxy_replaced",
        "error": null,
        "error_code": null,
        "created_at": "2022-07-26T21:25:13.966946-07:00",
        "dry_run_completed_at": "2022-07-26T21:25:13.966946-07:00",
        "completed_at": "2022-07-26T22:25:13.966946-07:00",
    },
    ...
  ]
}
```


::: nx-mt-16
