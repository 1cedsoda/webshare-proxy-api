List verifications


# List verifications

This endpoint returns the account verifications in [paginated](/#pagination) format.

### Examples


list-verifications.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/verification/flow/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[]

The commands above return JSON structured like this:


response.json

``` {
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
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
    },
    ...
  ]
}
```


::: nx-mt-16
