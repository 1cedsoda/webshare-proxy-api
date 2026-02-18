Abuse reports


# Abuse reports

This endpoint returns the abuse reports that are raised against your account in [paginated](/#pagination) format. In case the account is suspended the account verification flow ID will come with the response.

### Examples


list-abuse-reports.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/verification/abuse_report/",
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
      "content": "The content of the abuse report",
      "flow": 1,
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00"
    },
    ...
  ]
}
```


::: nx-mt-16
