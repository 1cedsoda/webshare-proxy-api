Subscription


# Subscription


⚠️

**Important distinction between Subscription and Plan**

[]

Subscription stays with the user even after a user switches to a new Plan. Whereas, a new Plan object is created each time a customer re-customizes their Plan.


Each Webshare account has 1 subscription and 1 active plan associated with it. There may be multiple in-active plans.

Subscription object holds general information about the user subscription\
e.g. start/end dates.

[See the Plan API](/subscription/plan).

## Subscription Object


  Attributes                                        Type        Description
  ------------------------------------------------- ----------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                                              `int`       Unique identifier of the subscription instance. This ID should not change for the user
  `plan`                                            `int`       Unique identifier of the active plan instance. This ID will change whenever a user re-customizes their plan
  `payment_method`                                  `int`       Unique identifier of the payment method
  `free_credits`                                    `float`     Free credits available in for the account in USD
  `term`                                            `string`    Used to determine the amount to charge in the next renewal. Can be `monthly` or `yearly`.
  `start_date`                                      `string`    The start date of the current renewal term. The difference between end/start dates are always 30 days even in yearly subscriptions.
  `end_date`                                        `string`    The end date of the current renewal term. The difference between end/start dates are always 30 days even in yearly subscriptions.
  `renewals_paid`                                   `int`       Number of 30 day increment renewals paid. `yearly` terms pay for 12 renewals at once while `monthly` terms pay for 1 renewal at a time.
  `failed_payment_times`                            `int`       Number of times an automated renewal payment failed.
  `account_discount_percentage`                     `int`       Discount percentage for the account.
  `promotion_available_first_time_renewal_25_off`   `bool`      Whether the 25% off for renewals is available.
  `customizable`                                    `bool`      Whether the subscription is customizable or not, usually VIP accounts are not customizable because their plans are customized by the customer support team directly.
  `paused`                                          `bool`      Whether the subscription is paused or not.
  `reactivation_date`                               `string`    The time stamp when the subscription will be unpaused and resumed
  `reactivation_period_left`                        `string`    The period left in the subscription when the subscription has been paused.
  `promo_type`                                      `string`    The type of promotion this account will receive. May be `first_time_value_off`, `first_time_percent_off`, `always_value_off` or `always_percent_off`. May be set to `null`.
  `promo_value`                                     `integer`   The value of the promotion this account will receive. May be `10` or `20`. May be set to `null` if `promo_type` is `null`.
  `throttled`                                       `bool`      Whether the subscription is throttled or not. Mostly throttling is due to high bandwidth usage with low number of proxies.
  `created_at`                                      `string`    The timestamp of when this instance was created.
  `updated_at`                                      `string`    The timestamp when this instance was last updated.

### In JSON format


``` {
  "id": 1,
  "plan": 2,
  "payment_method": 1,
  "free_credits": 13.37,
  "term": "monthly",
  "start_date": "2022-06-14T11:19:14.489458-07:00",
  "end_date": "2022-07-14T11:19:14.489461-07:00",
  "renewals_paid": 0,
  "failed_payment_times": 0,
  "account_discount_percentage": 0,
  "promotion_available_first_time_renewal_25_off": false,
  "customizable": true,
  "paused": false,
  "reactivation_date": null,
  "reactivation_period_left": null,
  "promo_type": null,
  "promo_value": null,
  "throttled": false,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## Get Subscription

This endpoint returns the subscription object associated with the account. There is only 1 subscription associated with each account.


```
GET https://proxy.webshare.io/api/v2/subscription/
```


### Requests & Response


get_subscription.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/subscription/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 1,
  "plan": 2,
  "payment_method": 1,
  "free_credits": 13.37,
  "term": "monthly",
  "start_date": "2022-06-14T11:19:14.489458-07:00",
  "end_date": "2022-07-14T11:19:14.489461-07:00",
  "renewals_paid": 0,
  "failed_payment_times": 0,
  "account_discount_percentage": 0,
  "promotion_available_first_time_renewal_25_off": false,
  "customizable": true,
  "paused": false,
  "reactivation_date": null,
  "reactivation_period_left": null,
  "promo_type": null,
  "promo_value": null,  
  "throttled": false,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
