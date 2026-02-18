Proxy Statistics


# Proxy Statistics

You can use the Webshare API to retrieve the proxy statistics.

## The proxy statistics object

Proxy stats are by default aggregated every 1 hour.

### Attributes


  Attributes                 Type        Description
  -------------------------- ----------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `timestamp`                `string`    The timestamp of the stat. The stats are always aggregated for 1 hour (3,600 seconds). All timestamps have 00:00 minute&second. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
  `is_projected`             `boolean`   Indicates whether the stat is projected or real. You may request projected stats for the future.
  `bandwidth_total`          `integer`   Total bandwidth use in bytes for the 1 hour window.
  `bandwidth_average`        `integer`   Average bandwidth in bytes per request. Calculated by `bandwidth_total/requests_total`.
  `requests_total`           `integer`   Number of proxy requests made.
  `requests_failed`          `integer`   Number of proxy requests failed.
  `error_reasons`            `array`     List of error reasons. Detailed attributes can be found in the table below. Set to `[]` if `is_projected=True`.
  `countries_used`           `object`    Number of proxy requests per [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Set to `` if `is_projected=True`.
  `number_of_proxies_used`   `integer`   Number of unique proxy addresses used (estimated). If backbone proxy is used, the number of unique assigned IP addresses are counted. Set to `0` if `is_projected=True`.
  `protocols_used`           `object`    Number of requests per proxy protocol. Protoxy protocols can be `http` or `socks`. Set to `` if `is_projected=True`.
  `average_concurrency`      `number`    Average number of concurrent proxy request (estimated). Set to `null` if `is_projected=True`.
  `average_rps`              `number`    Average proxy requests per second (estimated). Set to `null` if `is_projected=True`.
  `last_request_sent_at`     `string`    The time last proxy request was sent. Must be within the 1 hour window. Set to `null` if `is_projected=True`.

### Error reason attributes


  Attributes      Type        Description
  --------------- ----------- ---------------------------------------------------------------------------------------------------------------------------------------
  `reason`        `string`    Code for the error. The same code is present in the `X-Webshare-Error-Reason` header when making requests to the HTTP proxy endpoint.
  `type`          `string`    Whether the error is a `configuration` or `connection` error.
  `how_to_fix`    `string`    Guide for the end-user on how to fix the error.
  `http_status`   `integer`   HTTP response status code the HTTP proxy endpoint may return for this particular error. May be `null`.
  `count`         `integer`   Number of failed proxy requests with this error reason.

### In JSON format


``` {
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
}
```


::: nx-mt-16
