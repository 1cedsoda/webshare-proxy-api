Purchase a plan


# Purchase a plan

You can use this API to purchase a new plan. A new plan will override your existing plan and update your `subscription.start_date`.

The purchase API uses the same parameters as the [Subscription pricing](/subscription/pricing) endpoint with 2 additional fields: `payment_method` and `recaptcha`.


::: text-sm
This API endpoint requires recaptcha validation if a payment is required. If you have enough account credits, no payment is required. When a payment is required you should not be using this API endpoint programmatically and only use it from the Webshare Dashboard.


### Request fields

The purchase API uses the same parameters as the [Subscription pricing](/subscription/pricing) endpoint with 2 additional fields: `payment_method`, `behavior`.


  Parameter          Type       Description
  ------------------ ---------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `behavior`         `string`   Can be 2 options. 1) `replace`, (default value) the new purchased plan will replace the old one, this option is only supported for subscriptions with a single plan. 2) `add`, for adding the plan to the subscription.
  `payment_method`   `string`   Can be 3 unique options. 1) `null`, use the payment on file (same as `subscription.payment_method`). 2) Use an existing [PaymentMethod](#payment-method) id. 3) Add a new payment by using [Stripe PaymentMethod](https://stripe.com/docs/js/payment_methods) ID (usually starts with \"pm\_\...\").
  `recaptcha`        `string`   The recaptcha token (can be invisible recaptcha).

### Response fields


  Attributes                Type        Description
  ------------------------- ----------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `payment_required`        `boolean`   Whether a user needs to complete additional steps for the payment or not. If `false`, the purchase is completed and user now has the new plan.
  `plan`                    `integer`   The ID of the new Plan object.
  `pending_payment`         `integer`   The ID of the PendingPayment instance. Only present if `payment_required == true`.
  `stripe_client_secret`    `string`    The `client_secret` for the Stripe [PaymentIntent](https://stripe.com/docs/js/payment_intents/confirm_card_payment). Only present if `payment_required == true`.
  `stripe_payment_intent`   `string`    The ID of the Stripe [PaymentIntent](https://stripe.com/docs/js/payment_intents/confirm_card_payment). Only present if `payment_required == true`.
  `stripe_payment_method`   `string`    The ID of the Stripe [PaymentMethod](https://stripe.com/docs/js/payment_methods/create_payment_method). Only present if `payment_required == true`.

### Request & Response


```
POST https://proxy.webshare.io/api/v2/subscription/checkout/purchase/
```


purchase_plan.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/subscription/checkout/purchase/",
    json={
        "proxy_type": "shared",
        "proxy_subtype": "default",
        "proxy_countries": {"US": 100},
        "bandwidth_limit": 5000,
        "on_demand_refreshes_total": 0,
        "automatic_refresh_frequency": 0,
        "proxy_replacements_total": 0,
        "subusers_total": 3,
        "is_unlimited_ip_authorizations": False,
        "is_high_concurrency": False,
        "is_high_priority_network": False,
        "term": "monthly",
        "payment_method": 3,
        "recaptcha": "...",
    },
    headers={"Authorization": "Token APIKEY"},
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "payment_required": true,
  "plan": 2,
  "pending_payment": 3,
  "stripe_client_secret": "...",
  "stripe_payment_intent": "...",
  "stripe_payment_method": "..."
}
```


::: nx-mt-16
