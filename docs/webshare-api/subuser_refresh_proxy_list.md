Refresh proxy list of a sub-user


# Refresh proxy list of a user

Refresh the proxy list of a user. You can only perform this action if the user has a custom proxy list.

### URL Parameters


  Parameter   Type    Description
  ----------- ------- -------------------------------
  `ID`        `int`   The ID of the user to refresh

### Request & Response


```
GET https://proxy.webshare.io/api/v2/subuser/<ID>/refresh/
```


example.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/subuser/<ID>/refresh/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
   "id":7,
   "label":"Test User",
   "proxy_countries": {
      "ZZ":1000
    },
   "proxy_limit":10.0,
   "max_thread_count": 500,
   "aggregate_stats": {
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
   },
   "created_at":"2019-06-09T23:34:00.095501-07:00",
   "updated_at":"2019-06-09T23:34:00.095517-07:00",
   "bandwidth_use_start_date":"2019-06-09T23:34:00.095517-07:00",
   "bandwidth_use_end_date":"2019-07-09T23:34:00.095517-07:00"
}
```


::: nx-mt-16
