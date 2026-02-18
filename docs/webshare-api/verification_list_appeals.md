List appeals


# List appeals

This endpoint returns the appeals you have submited for your account in [paginated](/#pagination) format.

### Parameters


  Parameter   Type       Description
  ----------- ---------- ---------------------------------------------------------------------------------------------------
  `state`     `string`   Match only appeals that are under a specific state. Can be `approved`, `rejected` or `submitted`.

### Examples


list-appeals.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/verification/appeal/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "appeal": "The appeal for account suspension you want to submit",
      "state": "submitted",
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00"
    },
    ...
  ]
}
```


::: nx-mt-16
