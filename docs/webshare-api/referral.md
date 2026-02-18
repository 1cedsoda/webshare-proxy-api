Referral & Affiliate


# Referral & Affiliate

You can earn credits or payouts directly to your PayPal account by referring users to Webshare. Switching to affiliate program via the API indicates your consent for the additional affiliate agreement [https://www.webshare.io/affiliate-agreement[ (opens in a new tab)]](https://www.webshare.io/affiliate-agreement).

## Referral Config Object

Referral config object indicates the current state of the referral system.


  Attributes                        Type        Description
  --------------------------------- ----------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                              `string`    Unique identifier of the referral config instance. This ID should not change for the user.
  `mode`                            `string`    Indicates whether the system is in payout or credits mode. Possible options are `payout` and `credits`. In payout mode, user can receive earn-out to their PayPal account.
  `paypal_payout_email`             `string`    May be null if mode is `credits`. Must be set if the mode is `payout`.
  `id_verification_required`        `boolean`   After an account is eligible for a payout, they must complete ID verification. ID verification is not required until payout conditions are met.
  `credits_earned`                  `number`    Amount of USD earned and pending to be converted to account credits. These credits will be converted to `Subscription.free_credits` at the time of the next earn-out. This field will be set to 0 afterwards.
  `payouts_earned`                  `number`    Amount of USD earned and pending to be earned out to PayPal account. These payouts will be sent to a PayPal account at the time of the next earn-out. This field will be set to 0 afterwards.
  `total_credits_earned`            `number`    Total amount of credits earned so far.
  `total_payouts_earned`            `number`    Total amount of payouts earned so far.
  `number_of_users_referred`        `number`    Number of unique users referred.
  `number_of_users_upgraded`        `number`    Number of unique users who upgraded.
  `earn_out_frequency`              `string`    Frequency of earn-outs. Format is \[DD\] \[HH:MM:SS\].
  `next_earn_out_date`              `string`    Timestamp of the next earn-out. At this time the credits_earned and payouts_earned will be converted to account credits or sent to PayPal.
  `minimum_earn_out_amount`         `number`    Minimum USD need to be earned for the earn-out to be processed. For example, if `credits_earned` is \$5.00 and minimum_earn_out_amount is \$10.00, no earn-out will be processed.
  `referral_code`                   `string`    Unique referral code of this user. User can navigate to any Webshare public page with `referral_code={referral_code}` GET query to set the referral code.
  `promo_type`                      `string`    The type of promotion referrals will receive. May be `first_time_value_off`, `first_time_percent_off`, `always_value_off` or `always_percent_off`. May be set to `null`.
  `promo_value`                     `integer`   The value of the promotion referrals will receive. May be `10` or `20`. May be set to `null` if `promo_type` is `null`.
  `referral_url`                    `string`    Example referral URL to the Webshare home page.
  `referral_maximum_credits`        `number`    Maximum amount of credits/payouts can be earned from a single referral.
  `referral_credit_ratio`           `string`    Ratio of credits/payouts earned from a referral purchase. For example, if `referral_credit_ratio=0.25`, and referral spends \$100, user will earn \$25.
  `referral_payment_pending_days`   `number`    Grace period for a referral credit/payouts to become available. During the pending period, if the payment is reversed, the credits will be reversed too.
  `created_at`                      `string`    The timestamp of when this instance was created.
  `updated_at`                      `string`    The timestamp when this instance was last updated.

## Get Referral Config

Retrieve a referral config.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/referral/config/
```


get_referral_object.py

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
  "id": 1,
  "mode": "payout",
  "paypal_payout_email": "paypal@webshare.io",
  "id_verification_required": false,
  "credits_earned": 0.0,
  "payouts_earned": 0.0,
  "total_credits_earned": 0.0,
  "total_payouts_earned": 0.0,
  "number_of_users_referred": 0,
  "number_of_users_upgraded": 0,
  "earn_out_frequency": "7 00:00:00",
  "next_earn_out_date": "2022-06-14T11:58:10.246406-07:00",
  "minimum_earn_out_amount": 10,
  "referral_code": "78saf89712",
  "referral_url": "https://www.webshare.io/?referral_code=78saf89712",
  "referral_maximum_credits": 100,
  "referral_credit_ratio": 0.25,
  "referral_payment_pending_days": "30 00:00:00",
  "promo_type": "first_time_value_off",
  "promo_value": 10,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-15T11:58:10.246406-07:00"
}
```


## Update Referral Config

This endpoint updates the referral config. The only writable fields are `mode` and `paypal_payout_email`.

### Request & Response


```
PATCH https://proxy.webshare.io/api/v2/referral/credit/<ID>/
```


update_referral_object.py

```
import requests
 
response = requests.patch(
    "https://proxy.webshare.io/api/v2/referral/config/",
    json={
        "mode":"payout",
        "paypal_payout_email": "paypal@webshare.io"
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
  "mode": "payout",
  "paypal_payout_email": "paypal@webshare.io",
  "id_verification_required": false,
  "credits_earned": 0.0,
  "payouts_earned": 0.0,
  "total_credits_earned": 0.0,
  "total_payouts_earned": 0.0,
  "number_of_users_referred": 0,
  "number_of_users_upgraded": 0,
  "earn_out_frequency": "7 00:00:00",
  "next_earn_out_date": "2022-06-14T11:58:10.246406-07:00",
  "minimum_earn_out_amount": 10,
  "referral_code": "78saf89712",
  "referral_url": "https://www.webshare.io/?referral_code=78saf89712",
  "referral_maximum_credits": 100,
  "referral_credit_ratio": 0.25,
  "referral_payment_pending_days": "30 00:00:00",
  "promo_type": "first_time_value_off",
  "promo_value": 10,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-15T11:58:10.246406-07:00"
}
```


::: nx-mt-16
