Renew the subscription


# Renew the subscription

You can use this API to renew the subscription. After renewal, you will receive additional `subscription.renewals_paid`.


  Attributes         Type       Description
  ------------------ ---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------
  `payment_method`   `int`      The payment method to use. Can be `null` to use the payment on file, or an existing payment method id.
  `term`             `string`   The term to renew. Can be `yearly` or `monthly`.
  `recaptcha`        `string`   The recaptcha token (can be invisible recaptcha). Optional: Only required if a payment is required. If using account credits, no recaptcha is required.


::: text-sm
This API endpoint requires recaptcha validation if a payment is required. If you have enough account credits, no payment is required. When a payment is required you should not be using this API endpoint programmatically and only use it from the Webshare Dashboard.


### Request & Response


```
POST https://proxy.webshare.io/api/v2/subscription/checkout/renew/
```


list_ip_authorization.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/subscription/checkout/renew/",
    json={
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
