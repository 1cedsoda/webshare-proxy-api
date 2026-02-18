Dismiss a notification


# Dismiss notification

This endpoint lets you dismiss a notification.

### Parameters


  Parameter   Type       Description
  ----------- ---------- ----------------------------------------
  `ID`        `string`   The ID of the notification to dismiss.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/notification/<ID>/dismiss/
```


dismiss_notification.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/notification/<ID>/dismiss/",
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
    "dismissed_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
