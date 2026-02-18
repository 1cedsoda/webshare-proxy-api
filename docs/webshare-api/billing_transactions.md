Transactions


# List transactions

This endpoint retrieves all transactions associated with the user in [paginated](/#pagination) format with [filtering & ordering](/#filtering-amp-ordering) enabled.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/payment/transaction/
```


list_transactions.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/payment/transaction/",
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
      "status": "completed",
      "payment_method": {
        "id": 1,
        "brand": "visa",
        "last4": "4242",
        "name": null,
        "expiration_year": 2023,
        "expiration_month": 6,
        "created_at": "2022-06-14T11:58:10.246406-07:00",
        "updated_at": "2022-06-14T11:58:10.246406-07:00"
      },
      "reason": "Upgraded from Free Plan to 100 Proxies with 250 GB bandwidth.",
      "amount": 1.0,
      "credits_used": 0.0,
      "credits_gained": 0.0,
      "refund_amount": 0.0,
      "refund_date": null,
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00"
    }
  ]
}
```


## Get transaction

This endpoint retrieves the transaction by ID.

### URL parameters


  Parameter   Type        Description
  ----------- ----------- ---------------------------------------
  `ID`        `integer`   The ID of the transaction to retrieve

### Request & Response


```
GET https://proxy.webshare.io/api/v2/payment/transaction/<ID>/
```


get_transaction.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/payment/transaction/1/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "status": "completed",
  "payment_method": {
    "id": 1,
    "brand": "visa",
    "last4": "4242",
    "name": null,
    "expiration_year": 2023,
    "expiration_month": 6,
    "created_at": "2022-06-14T11:58:10.246406-07:00",
    "updated_at": "2022-06-14T11:58:10.246406-07:00"
  },
  "reason": "Upgraded from Free Plan to 100 Proxies with 250 GB bandwidth.",
  "amount": 1.0,
  "credits_used": 0.0,
  "credits_gained": 0.0,
  "refund_amount": 0.0,
  "refund_date": null,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
