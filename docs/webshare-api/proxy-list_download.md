Download proxy list


# Download proxy list


::: text-sm
This API does not require authentication.


You can download the proxy list as a file using the links below. These links use `proxy_list_download_token` which can be retrieved from the [Proxy Config](/proxy-config) API. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

Download proxy list endpoint


```
GET https://proxy.webshare.io/api/v2/proxy/list/download/
  {token}/{country_codes}/any/{authentication_method}/{endpoint_mode}/{search}/
```


or in case of targeting a specific plan


```
GET https://proxy.webshare.io/api/v2/proxy/list/download/
  {token}/{country_codes}/any/{authentication_method}/{endpoint_mode}/{search}/?plan_id=<Plan ID>
```


### Parameters


  Key                       Type       Description
  ------------------------- ---------- ---------------------------------------------------------------------------------------------------------------------------------------
  `token`                   `string`   Token retrieved from the [Proxy Config](/proxy-config) API.
  `country_codes`           `string`   [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) separated by hyphen (`-`). In order to select all countries, use `-`
  `authentication_method`   `string`   `username` or `sourceip`. Determines the authentication method to access to the proxies.
  `endpoint_mode`           `string`   `backbone` or `direct`. Determines the proxy format. Must be set to `backbone` if `plan.pool_filter` is `residential`.
  `search`                  `string`   URL encoded search terms. Can be set as `-` to indicate no search terms.

### Request & Response


download_list.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/proxy/list/download/{TOKEN}/-/any/username/direct/san%20francisco/"
)
 
response.text
```


[][]

The commands above return plain text file in the following format:


response

```
10.1.2.3:9421:username:password
10.1.2.4:6511:username:password
```


::: nx-mt-16
