List notifications


# List Notifications

This endpoint returns the notifications in [paginated](/#pagination) format.

### Parameters


  Parameter                Type        Description
  ------------------------ ----------- ------------------------------------------------------------------------------------------------------
  `dismissed_at__isnull`   `boolean`   Set to `True` to show only dismissed notifications.
  `ordering`               `string`    Default ordering is `-created_at`. Available ordering fields are `id`, `created_at`, `dismissed_at`.
  `type`                   `string`    Filter by type.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/notification/
```


list_notifications.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/notification/",
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
        "id": 13,
        "type": "too_much_bandwidth_too_little_proxies",
        "is_dismissable": true,
        "context": { "plan": 22 },
        "created_at": "2022-06-14T11:58:10.246406-07:00",
        "updated_at": "2022-06-14T11:58:10.246406-07:00",
        "dismissed_at": null
    },
    ...
  ]
}
```


::: nx-mt-16
