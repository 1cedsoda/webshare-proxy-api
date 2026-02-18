Verification limits


## Verification limits

This API lets you retrieve the verification limits which your account may have received

### Parameters


  Parameter       Type       Description
  --------------- ---------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `proxy_state`   `string`   Can be \'active\', \'limited\' or \'paused\'. Limited means proxies are slower than usual and may give errors while using. Paused means proxy are currently not working.

### Examples


```
import requests
 
response = requests.get("https://proxy.webshare.io/api/v2/verification/limits/")
response.json()
```


```
curl "https://proxy.webshare.io/api/v2/verification/limits/" \
  -H "Authorization: Token APIKEY"
```


> The above command returns JSON structured like this:


``` {
    "proxy_state": "active"
}
```


::: nx-mt-16
