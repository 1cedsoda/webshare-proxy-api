Sub-Users


# Sub-Users

Each sub-user can have separate limits and proxy list. The proxy list of the users you create are based on your main proxy list.

You can make requests to [Proxy Configuration](/subuser#proxy-configuration), [Proxy List](/subuser#proxy-list) and [Proxy Stats](/subuser#proxy-stats) APIs as a sub-user using the `X-Subuser` header. More [examples below](/subuser#masquerade-user).

This API is only available for after accepting additional terms for Webshare sub-user portal. If you wish to gain access to this API, please complete the form at [https://proxy.webshare.io/subuser/[ (opens in a new tab)]](https://proxy.webshare.io/subuser/)

### Sub-User object

You can use the API to create, retrieve, update and delete each individual sub-user.


  Attributes                   Type         Description
  ---------------------------- ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                         `int`        Unique identifier of the user. The ID never changes and no other user will receive the same ID.
  `label`                      `string`     You can set label to identify your users.
  `proxy_countries`            `dict`       Can be set to `null` to disable custom proxy lists. Otherwise, dictionary of [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) and number of proxies. `ZZ` country code is special and means any available country.
  `proxy_limit`                `float`      The user proxy limit in GBs. You can set to 0 in order to get unlimited bandwidth.
  `max_thread_count`           `int`        The maximum number of proxy request concurrency this user can have.
  `aggregate_stat`             `dict`       Proxy stats for this sub-user. Follows the same format as the [Aggregate Stats](#aggregate-stats) API.
  `created_at`                 `datetime`   Read-only field to indicate when this user was created.
  `updated_at`                 `datetime`   Read-only field to indicate when this user was last updated.
  `bandwidth_use_start_date`   `datetime`   The time we start calculating the user bandwidth use. You can edit this field.
  `bandwidth_use_end_date`     `datetime`   The time the user bandwidth use will reset. Read-only field.

### In JSON Format


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
