Retrieve verification


# Retrieve verification

This endpoint lets you retrieve an account verification.

### URL Parameters


  Parameter   Type        Description
  ----------- ----------- ------------------------------------
  `ID`        `integer`   The ID of the verification object.

### Examples


```
GET https://proxy.webshare.io/api/v2/verification/flow/<ID>/
```


verification-flow.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/verification/flow/<ID>/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[]

response.json

``` {
  "id": 1,
  "type": "acceptable_use_violation",
  "state": "inflow",
  "started_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "needs_evidence": false,
  "evidence": {
    "id": 2,
    "explanation": "User explanation",
    "created_at": "2022-06-14T11:58:10.246406-07:00",
    "updated_at": "2022-06-14T11:58:10.246406-07:00",
    "files": [
      {
          "created_at": "2022-06-14T11:58:10.246406-07:00",
          "file": "verificationevidence/file1",
          "id": 5,
      },
      {
          "created_at": "2022-06-14T11:58:10.246406-07:00",
          "file": "verificationevidence/file2",
          "id": 6,
      },
    ],
  },
  "id_verification_restores_access": False,
  "id_verification_required": False
}
```


::: nx-mt-16
