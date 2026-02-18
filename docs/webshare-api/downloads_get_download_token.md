Downloads


Get download token


# Get download token

This endpoint returns a download token that can be used to download different type of records.


```
GET https://proxy.webshare.io/api/v2/download_token/{scope}/
```


### Parameters


  Attributes   Type       Description
  ------------ ---------- ----------------------------------------------------------------------------------------------------------------------------------------
  `scope`      `string`   The scope of the token according to the records need to be downloaded, the supported scopes are (proxy_list, replaced_proxy, activity)

### Request & Response


JavaScript


get_download_token.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/download_token/activity/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 56,
  "key": "abcdefghijklmnopqrstuvwxyz",
  "scope": "activity",
  "expire_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
