Retrieve ID verification


# Get ID Verification

This endpoint retrieves the verification object.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/idverification/
```


idverification.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/idverification/",
  headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "state": "not-required",
  "client_secret": null,
  "verification_failure_times": 0,
  "max_verification_failure_times": 0,
  "created_at": "2019-05-09T23:34:00.095501-07:00",
  "updated_at": "2019-05-09T23:34:00.095501-07:00",
  "verified_at": null
}
```


::: nx-mt-16
