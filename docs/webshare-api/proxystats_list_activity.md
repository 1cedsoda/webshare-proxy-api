List proxy activities


# List proxy activity

List the proxy activity within a time period.

You can paginate this endpoint using the `starting_after` and `page_size` fields instead of the `page` field. You can pass the `timestamp` of the latest activity instance to the `starting_after` queryset to view the next page. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


  Parameter                 Type       Description
  ------------------------- ---------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `timestamp__lte`          `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be less than this. If given a date in the future, projected stats will be included for each hour between now and the given date. Cannot be after the `subscription.end_date`. Default is six days ago.
  `timestamp__gte`          `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be greater than this. Must be before the `timestamp__lte` field. Cannot be older than 90 days from today. Default is now.
  `search`                  `string`   Generic search query.
  `error_reason`            `string`   Match only requests with the given error_reason. You can pass `*` to filter for only requests with an error.
  `starting_after`          `string`   You can pass the timestamp of the last proxy activity to retrieve the next page.
  `bytes__gte`              `string`   Filter requests with bytes equal or greater than the given value.
  `bytes__lte`              `string`   Filter requests with bytes equal or less than the given value.
  `verification_category`   `string`   The account verification category to filter with.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/proxy/activity/
```


or in case of targeting a specific plan


```
GET https://proxy.webshare.io/api/v2/proxy/activity/?plan_id=<Plan ID>
```


list_activity.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/proxy/activity/", {
      "timestamp__lte":"2022-09-09T23:34:00.095501-07:00",
      "timestamp__gte":"2022-08-09T23:34:00.095501-07:00"
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "count": 10,
  "next": null,
  "previous": null,
  "results": [
    {
      "timestamp": "2022-08-16T15:29:42.517523-07:00",
      "protocol": "http",
      "request_duration": 0.5,
      "handshake_duration": 0.3,
      "tunnel_duration": 0.2,
      "error_reason": "client_connect_forbidden_host",
      "error_reason_how_to_fix": "The target website you are connecting cannot be accessed via Webshare Proxy.",
      "auth_username": null,
      "proxy_address": "192.168.5.1",
      "bytes": 0,
      "client_address": "10.1.0.1",
      "ip_address": "10.1.0.2",
      "hostname": "ipv4.webshare.io",
      "domain": "webshare.io",
      "port": 443,
      "proxy_port": null,
      "listen_address": "192.168.5.24",
      "listen_port": 6455
    },
    ...
  ]
}
```


::: nx-mt-16
