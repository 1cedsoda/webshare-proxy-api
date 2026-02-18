Aggregate statistics


# Aggregate stats

Aggregate the proxy stats for the given period. Useful for showing the total proxy use in the subscription period. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


  Parameter          Type       Description
  ------------------ ---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `timestamp__lte`   `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be less than this. If given a date in the future, projected stats will be included for each hour between now and the given date. Cannot be after the `subscription.end_date`.
  `timestamp__gte`   `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be greater than this. Must be before the `timestamp__lte` field. Cannot be older than 90 days from today.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/stats/aggregate/
```


or in case of targeting a specific plan


```
GET https://proxy.webshare.io/api/v2/stats/aggregate/?plan_id=<Plan ID>
```


aggregate.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/stats/aggregate/", {
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
  "bandwidth_projected": 100000,
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
}
```


::: nx-mt-16
