Billing information


# Billing Information

## Billing Info Object


  Attributes        Type       Description
  ----------------- ---------- ---------------------------------------------------------------------------------------------------------
  `id`              `string`   Unique identifier of the billing information instance.
  `name`            `string`   Name for the invoices. Will appear on invoices. Can be a company name. Default is empty string.
  `address`         `string`   Address for the invoices. Will appear on invoices. Can be a corporate address. Default is empty string.
  `billing_email`   `string`   Email address for the invoices. Will appear on invoices. Default is empty string.
  `created_at`      `string`   Timestamp on when the account was created
  `updated_at`      `string`   The timestamp when this instance was last updated.

**In JSON format**


billing_information_object.json

``` {
  "id": 1,
  "name": "Webshare Software",
  "address": "Lemon Ave",
  "billing_email": "incomingbills@webshare.io",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## Get billing information

This endpoint returns the billing information object associated with the account. There is only 1 billing information associated with each account.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/subscription/billing_info/
```


get_billing_information.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/subscription/billing_info/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "name": "Webshare Software",
  "address": "Lemon Ave",
  "billing_email": "incomingbills@webshare.io",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## Update billing information

This endpoint updates the billing information.

### Request & Response


```
PATCH https://proxy.webshare.io/api/v2/subscription/billing_info/
```


update_billing_information.py

```
import requests
 
response = requests.patch(
    "https://proxy.webshare.io/api/v2/subscription/billing_info/",
    json={
        "name":"New Billing Name"
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
  "name": "New Billing Name",
  "address": "Lemon Ave",
  "billing_email": "incomingbills@webshare.io",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-15T11:58:10.246406-07:00"
}
```


::: nx-mt-16
