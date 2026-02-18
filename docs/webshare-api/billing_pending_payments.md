Pending payments


# Pending Payments

Pending payments refer to payments that have been initiated but have not yet been processed or completed. This means that the payment has been authorized, but the funds have not yet been transferred from the payer\'s account to the payee\'s account.

## List pending payments

This endpoint retrieves all pending payments associated with the user in [paginated](/#pagination) format with [filtering & ordering](/#filtering-amp-ordering) enabled.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/payment/pending/
```


list_pending_payments.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/payment/pending/",
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
      "status": "pending",
      "failure_reason": null,
      "payment_method": 2,
      "plan": 2,
      "transaction": null,
      "is_renewal": false,
      "term": "monthly",
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00",
      "completed_at": null
    }
  ]
}
```


## Get pending payment

This endpoint returns the pending payment object.

### URL parameters


  Attributes   Type        Description
  ------------ ----------- --------------------------------------------
  `id`         `integer`   The ID of the pending payment to retrieve.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/payment/pending/<ID>/
```


get_pending_payment.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/payment/pending/{ID}/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "status": "pending",
  "failure_reason": null,
  "payment_method": 2,
  "plan": 2,
  "transaction": null,
  "is_renewal": false,
  "term": "monthly",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "completed_at": null
}
```


::: nx-mt-16
