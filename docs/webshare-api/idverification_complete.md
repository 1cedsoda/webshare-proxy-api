Complete ID verification


# Complete verification

You can notify the API to process a verification after you have completed it with Stripe JS. In order to complete a verification, the state has to be `pending`.

When you complete a verification successfully, the state will become `processing`. If the Stripe JS ID verification is not completed, the API will return a 400 error.

## Complete verification request

The complete verification request may contain an empty body (or empty JSON object).

### Request & Response


```
POST https://proxy.webshare.io/api/v2/idverification/complete/
```


example.py

```
import requests
 
response = requests.post(
  "https://proxy.webshare.io/api/v2/idverification/complete/",
  json={}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "state": "processing",
  "client_secret": null,
  "verification_failure_times": 0,
  "max_verification_failure_times": 0,
  "created_at": "2019-05-09T23:34:00.095501-07:00",
  "updated_at": "2019-05-09T23:34:00.095501-07:00",
  "verified_at": null
}
```


::: nx-mt-16
