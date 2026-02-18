Submit an appeal


# Submit appeal

This endpoint lets you submit an appeal for an account suspension. You can submit only one appeal at a time.

### Parameters


  Parameter   Type       Description
  ----------- ---------- ----------------------------------------------------------
  `appeal`    `string`   The appeal you want to submit for an account suspension.

### Examples


submit-answer.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/verification/appeal/",
    data={
        "appeal":"The appeal for account suspension you want to submit"
    },
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
    "id": 1,
    "appeal": "The appeal for account suspension you want to submit",
    "state": "submitted",
    "created_at": "2022-06-14T11:58:10.246406-07:00",
    "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
