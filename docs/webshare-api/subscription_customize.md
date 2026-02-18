Customization options


# Customization options

This endpoint returns the limits/options available to customize for a plan. This endpoint JSON encodes the entire request in the `query` GET parameter. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

Make sure the GET parameters are also URL encoded (as required by the HTTP standards).

### Parameters


  Parameter                Type       Description
  ------------------------ ---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `proxy_type`             `string`   Category of proxies. Options are: `free`, `shared`, `semidedicated` and `dedicated`.
  `proxy_subtype`          `string`   Sub category of the proxies. Options are `default`, `premium`, `isp`, `residential` and `datacenter_and_isp`. Not all proxy types have the same sub types.
  `proxy_countries`        `object`   Number of proxies from each [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). `ZZ` means country is randomly allocated. Other customizations are based on this field.
  `required_site_checks`   `list`     List of site checks the proxy list has to work with. E.g. `google_search` means that the proxies will work with Google search.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/subscription/customize/?query={json_encoded}
```


or in case of targeting a specific plan


```
GET https://proxy.webshare.io/api/v2/subscription/customize/?query={json_encoded}&plan_id=<Plan ID>
```


customize_options.py

```
import requests
import json
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/subscription/customize/",
    {
        "query": json.dumps(
            {
                "proxy_type": "shared",
                "proxy_subtype": "default",
                "proxy_countries": {"ZZ": 100},
            }
        )
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "proxy_type": "shared",
  "proxy_subtype": "default",
  "proxy_count_max": 60000,
  "proxy_count_min": 1,
  "available_countries": {"US": 45000, "GB": 5000, "FR": 10000},
  "on_demand_refreshes_max": 1000,
  "on_demand_refreshes_min": 0,
  "automatic_refresh_frequency_max": 2592000,
  "automatic_refresh_frequency_min": 60,
  "proxy_replacements_max": 100000,
  "proxy_replacements_min": 0,
  "bandwidth_limit_max": 10000,
  "bandwidth_limit_min": 250,
  "subusers_max": 10000,
  "subusers_min": 3,
  "available_features": [
    {"feature": "is_unlimited_ip_authorizations"},
    {"feature": "is_high_concurrency"},
    {"feature": "is_high_priority_network"}
  ],
  "available_site_checks": [
    {"name": "google_search_without_captcha"},
  ],
  "terms": [
    {"term": "monthly", "renewals_paid": 1},
    {"term": "yearly", "renewals_paid": 12}
  ]
}
```


::: nx-mt-16
