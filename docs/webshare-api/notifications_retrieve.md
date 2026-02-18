Retrieve a notification


# Get notification

This endpoint lets you retrieve a notification.

### Parameters


  Parameter   Type       Description
  ----------- ---------- -----------------------------------------
  `ID`        `string`   The ID of the notification to retrieve.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/notification/<ID>/
```


get_notification.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/notification/<ID>/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
    "id": 13,
    "type": "too_much_bandwidth_too_little_proxies",
    "is_dismissable": true,
    "context": { "plan": 22 },
    "created_at": "2022-06-14T11:58:10.246406-07:00",
    "updated_at": "2022-06-14T11:58:10.246406-07:00",
    "dismissed_at": null
}
```


::: nx-mt-16
