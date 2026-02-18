Credits


# Referral Credits

### The referral credit object

Each time a referral spends money on Webshare, the user may earn referral credits. Each credit is tracked by the referral credit object.


  Attributes      Type         Description
  --------------- ------------ ---------------------------------------------------------------------------------------------------------------------------------------------
  `id`            `integer`    Unique identifier of the referral credit instance.
  `user_id`       `integer`    Unique identifier of the referred user who spent money on Webshare.
  `mode`          `string`     Indicates whether the referral credit is in `payout` or `credit` mode. This mode cannot be changed.
  `amount`        `decimal`    Amount earned in USD.
  `status`        `string`     Status can be `pending`, `available` or `reverted`. A credit becomes available after `ReferralConfig.referral_payment_pending_days` period.
  `created_at`    `datetime`   The timestamp of when this instance was created.
  `updated_at`    `datetime`   The timestamp when this instance was last updated.
  `reverted_at`   `datetime`   The timestamp when this credit was reverted. Is `null` if the status is not `reverted`.

### In JSON format


referral_credit.json

``` {
  "id": 1,
  "user_id": 6124,
  "mode": "credits",
  "amount": 2.50,
  "status": "pending",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "reverted_at": null
}
```


## List referral credits

This endpoint returns the referral credits in [paginated](/#pagination) format.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/referral/credit/
```


example.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/referral/credit/",
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
      "user_id": 6124,
      "mode": "credits",
      "amount": 2.50,
      "status": "pending",
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00",
      "reverted_at": null
    },
    ...
  ]
}
```


## Get referral credit

This endpoint lets you retrieve a referral credit.


  Parameter   Type        Description
  ----------- ----------- ----------------------------------------------------
  `ID`        `integer`   Unique identifier of the referral credit instance.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/referral/credit/<ID>/
```


example.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/referral/credit/{ID}/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "user_id": 6124,
  "mode": "credits",
  "amount": 2.50,
  "status": "pending",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "reverted_at": null
}
```


::: nx-mt-16
