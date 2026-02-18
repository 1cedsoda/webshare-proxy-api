Update API key


# Update API key

This endpoint updates an API key

### Request & Response


```
PATCH https://proxy.webshare.io/api/v2/apikey/<ID>/
```


example.py

```
import requests
 
response = requests.patch(
    "https://proxy.webshare.io/api/v2/apikey/<ID>/",
    json={
        "label":"new label"
    },
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
  "label": "new label",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
