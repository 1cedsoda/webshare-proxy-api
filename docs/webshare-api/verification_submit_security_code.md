Submit security code


# Submit security code

This endpoint lets you submit a security code for a verification flow that is two alphanumeric characters you can find in Webshare charges in your bank statement.

### Parameters


  Parameter           Type       Description
  ------------------- ---------- --------------------------------------------------------------------------------------------------
  `Verification ID`   `string`   The ID of the verification flow, this parameter should be a route parameter included in the URL.
  `security_code`     `string`   The security code you want to submit.

### Examples


submit-security-code.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/verification/flow/<Verification ID>/submit_verification_code/",
    json={
        "security_code":"XX"
    },
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


``` {
  "id": 1,
  "type": "acceptable_use_violation",
  "state": "successful_verification",
  "started_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "needs_evidence": false,
  "id_verification_restores_access": False,
  "id_verification_required": False
}
```


::: nx-mt-16
