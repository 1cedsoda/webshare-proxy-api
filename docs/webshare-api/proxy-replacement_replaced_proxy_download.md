Download replaced proxy list


# Download replaced proxy list


::: text-sm
This API does not require authentication.


You can download the replaced proxy list as a file using the link below. This link use a token which can be retrieved from the [Get Download Token](/downloads/get_download_token) API with the scope \"replaced_proxy\".

Download replaced proxy list endpoint


```
GET https://proxy.webshare.io/api/v2/proxy/list/replaced/download/
```


### Parameters


  Key                        Type       Description
  -------------------------- ---------- ---------------------------------------------------------------------------------------------------------------------------------------
  `download_token`           `string`   Token retrieved from the [Get Download Token](/downloads/get_download_token) API with the scope \'replaced_proxy\'
  `country_codes`            `string`   [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) separated by hyphen (`-`). In order to select all countries, use `-`
  `authentication_type`      `string`   `username` or `sourceip`. Determines the authentication method to access to the proxies.
  `mode`                     `string`   `backbone` or `direct`. Determines the proxy format. Must be set to `backbone` if `plan.pool_filter` is `residential`.
  `search`                   `string`   URL encoded search terms. Can be set as `-` to indicate no search terms.
  `proxy_list_replacement`   `int`      Query string parameter that filter the replaced proxies by a specific Proxy replacement.

### Request & Response


download_replaced_list.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/proxy/list/replaced/download/",
  { 
    "download_token": DOWNLOAD_TOKEN, 
    "search": "san francisco", 
    "country_codes": "-", 
    "proxy_protocol": "any", 
    "authentication_type": "username", 
    "mode": "direct" 
  }
)
 
response.text
```


[][]

The commands above return plain text file in the following format where the values in order are, the new proxy address, the new port, the username, the password and then the repalced proxy address:


response

```
10.1.2.3:9421:username:password:10.1.2.7
10.1.2.4:6511:username:password:10.1.2.8
```


::: nx-mt-16
