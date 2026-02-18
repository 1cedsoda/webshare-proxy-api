Create API key


# Create API key

This endpoint lets you create an API Key.

To get the first API key, you should visit the [API Keys[ (opens in a new tab)]](https://dashboard.webshare.io/userapi/keys) on your dashboard and then click on the \"Create API Key\" button.


  Attributes   Type       Description
  ------------ ---------- --------------------------------------------------------------------------
  `label`      `string`   The label to assign to this API key. May be duplicate with other labels.

### Request & Response


```
POST https://proxy.webshare.io/api/v2/apikey/
```


example.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/apikey/",
    json={"label": "server1 key"},
    headers={"Authorization": "Token APIKEY"})
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
