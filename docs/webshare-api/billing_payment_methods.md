Payment methods


# Payment Methods

## List payment methods

This endpoint retrieves all payment methods associated with the user in [paginated](/#pagination) format with [filtering & ordering](/#filtering-amp-ordering) enabled.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/payment/method/
```


list_payment_methods.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/payment/method/",
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
      "type": "StripeCard",
      "brand": "visa",
      "last4": "4242",
      "name": null,
      "expiration_year": 2023,
      "expiration_month": 6,
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00",
      "line": "123 George Street",
      "city": "Sydney",
      "state": null,
      "postal_code": "2000",
      "country": "AU"
    }
  ]
}
```


## Get payment method

This endpoint retrieves the payment method by ID. You can find the active payment method id from the subscription object.

### URL parameters


  Parameter   Type        Description
  ----------- ----------- ------------------------------------------
  `id`        `integer`   The ID of the payment method to retrieve

### Request & Response


```
GET https://proxy.webshare.io/api/v2/payment/method/1/
```


get_payment_methods.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/payment/method/1/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "type": "StripeCard",
  "brand": "visa",
  "last4": "4242",
  "name": null,
  "expiration_year": 2023,
  "expiration_month": 6,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "line": "123 George Street",
  "city": "Sydney",
  "state": null,
  "postal_code": "2000",
  "country": "AU"
}
```


::: nx-mt-16
