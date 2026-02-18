Delete API key


# Delete API key

This endpoint lets you delete an API key.

### URL parameters


  Parameter   Type       Description
  ----------- ---------- ----------------------------------
  `ID`        `string`   The ID of the API key to delete.

### Request & Response


```
DELETE https://proxy.webshare.io/api/v2/apikey/<ID>/
```


example.py

```
import requests
 
response = requests.delete(
    "https://proxy.webshare.io/api/v2/apikey/<ID>/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The above command returns empty response with 204 HTTP status code


```
HTTP/1.1 204 No Content
```


::: nx-mt-16
