Retrieve API key


# Get API key

This endpoint lets you retrieve an API key.

### URL parameters


  Parameter   Type        Description
  ----------- ----------- ------------------------------------
  `ID`        `integer`   The ID of the API key to retrieve.

## Request & Response


```
GET https://proxy.webshare.io/api/v2/apikey/<ID>/
```


example.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/apikey/<ID>/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1337,
  "key": "abc1234...zzz",
  "label": "server1 key",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
