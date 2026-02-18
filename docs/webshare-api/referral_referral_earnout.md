Earn out


# Referral Earn out

### The earn out object

Whenever a user is rewarded credits/payouts from their pending balance (e.g. `ReferralConfig.credits_earned`), an earn out instance is created.


  Attributes              Type      Description
  ----------------------- --------- ---------------------------------------------------------------------------------
  `id`                    `int`     Unique identifier of the earn out instance.
  `mode`                  `str`     Indicates whether the earn out is a `payout` or `credit`.
  `paypal_payout_email`   `str`     If mode is `payout`, indicates the PayPal email which received the funds.
  `amount`                `float`   Amount earned out in USD.
  `status`                `str`     Status can be `processing`, `completed` or `failed`.
  `error_reason`          `str`     If status is set to `failed`, show what the error is. Otherwise, set to `null`.
  `created_at`            `str`     The timestamp of when this instance was created.
  `updated_at`            `str`     The timestamp when this instance was last updated.

### In JSON format


earnout.json

``` {
  "id": 1,
  "mode": "credits",
  "paypal_payout_email": null,
  "amount": 2.50,
  "status": "completed",
  "error_reason": null,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## List earn outs

This endpoint returns the earn outs in [paginated](/#pagination) format.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/referral/earnout
```


example.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/referral/earnout",
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
      "mode": "credits",
      "paypal_payout_email": null,
      "amount": 2.50,
      "status": "completed",
      "error_reason": null,
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00"
    },
    ...
  ]
}
```


## Retrieve earn out

This endpoint lets you retrieve an earn out.

### Parameters


  Parameter   Type    Description
  ----------- ------- --------------------------------------------
  `ID`        `int`   The ID of the earn out object to retrieve.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/referral/earnout/{ID}/
```


example.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/referral/earnout/{ID}",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "mode": "credits",
  "paypal_payout_email": null,
  "amount": 2.50,
  "status": "completed",
  "error_reason": null,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
