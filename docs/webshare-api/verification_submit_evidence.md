Submit evidence


## Submit evidence

This endpoint lets you submit evidence for a verification. The encoding for this API must be `multipart/form-data`. You cannot send JSON content to this API.


```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/verification/flow/<ID>/submit_evidence/",
    data={"explanation": "We use proxies to scrape pricing information from e-commerce websites."},
    files={"files":[open("evidence.jpg")]},
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


```
curl "https://proxy.webshare.io/api/v2/verification/flow/<ID>/submit_evidence/" \
  -F "explanation=We+use+proxies+to+scrape+pricing+information+from+e-commerce+websites.&files=@evidence.jpg" \
  -H "Authorization: Token APIKEY"
```


> The above command returns JSON structured like this:


``` {
  "id": 1,
  "type": "acceptable_use_violation",
  "state": "inflow",
  "started_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "needs_evidence": false,
  "id_verification_restores_access": False,
  "id_verification_required": False
}
```


### HTTP request

`POST https://proxy.webshare.io/api/v2/verification/flow/<ID>/submit_evidence/`

### URL parameters

  Parameter     Description
  ------------- --------------------------------------------------------
  ID            The ID of the verification object.
  explanation   The explanation submitted as part of the verification.
  files         List of files submitted as part of the verification.

::: nx-mt-16
