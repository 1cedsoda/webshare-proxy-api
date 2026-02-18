Create sub-user


# Create a user

Create a new user by setting label and bandwidth limit. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Request & Response


```
POST https://proxy.webshare.io/api/v2/subuser/
```


or in case of targeting a specific plan


```
POST https://proxy.webshare.io/api/v2/subuser/?plan_id=<Plan ID>
```


example.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/subuser/",
    json={"label":"newcustomer", "proxy_limit": 10, "max_thread_count":500},
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
   "id":7,
   "label":"newcustomer",
   "proxy_countries": null,
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
