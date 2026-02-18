Start ID verification


## Start verification

You should start a verification in order to receive the `client_secret`. In order to start a verification, the verification state has to be `requested` or `failed`. If the state is `failed`, you `verification_failure_times` must be less than `max_verification_failure_times`.

When you start a verification successfully, the state will become `pending`.

### Start verification request

The start verification request may contain an empty body (or empty JSON object).


```
POST https://proxy.webshare.io/api/v2/idverification/start/
```


### Request & Response


example.py

```
import requests
 
response = requests.post(
  "https://proxy.webshare.io/api/v2/idverification/start/",
  json={}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "state": "pending",
  "client_secret": "aabbccc...zz",
  "verification_failure_times": 0,
  "max_verification_failure_times": 0,
  "created_at": "2019-05-09T23:34:00.095501-07:00",
  "updated_at": "2019-05-09T23:34:00.095501-07:00",
  "verified_at": null
}
```


::: nx-mt-16
