List statistics


# List stats

List the proxy stats within a time period. The stats are a aggregated hourly. Hours without proxy usage do not have a proxy stat object. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

This API endpoint *is not* paginated.

### Parameters


  Parameter          Type       Description
  ------------------ ---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `timestamp__lte`   `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be less than this. If given a date in the future, projected stats will be included for each hour between now and the given date. Cannot be after the `subscription.end_date`. Default is `subscription.end_date`.
  `timestamp__gte`   `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be greater than this. Must be before the `timestamp__lte` field. Cannot be older than 90 days from today. Default is `subscription.start_date`.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/stats/
```


or in case of targeting a specific plan


```
GET https://proxy.webshare.io/api/v2/stats/?plan_id=<Plan ID>
```


list_stats.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/stats/", {
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

```
[
  {
    "timestamp": "2022-08-11T17:00:00-07:00",
    "is_projected": false,
    "bandwidth_total": 5000,
    "bandwidth_average": 1000,
    "requests_total": 5,
    "requests_successful": 4,
    "requests_failed": 1,
    "error_reasons": [
      {
        "reason": "client_connect_forbidden_host",
        "type": "configuration",
        "how_to_fix": "The target website you are connecting cannot be accessed via Webshare Proxy.",
        "http_status": 403,
        "count": 1
      }
    ],
    "countries_used": {
      "GB": 1,
      "FR": 4
    },
    "number_of_proxies_used": 2,
    "protocols_used": {
      "http": 5
    },
    "average_concurrency": 0.0001388888888888889,
    "average_rps": 0.0002777777777777778,
    "last_request_sent_at": "2022-08-11T17:12:32.589667-07:00"
  },
  ...
]
```


::: nx-mt-16
