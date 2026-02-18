Update Payment Method


# Update payment method

You can use this API to update your payment method. The update payment method API uses only `recaptcha` field.


::: text-sm
This API endpoint requires recaptcha validation.


### Request fields


  Parameter     Type       Description
  ------------- ---------- ---------------------------------------------------
  `recaptcha`   `string`   The recaptcha token (can be invisible recaptcha).

### Response fields


  Attributes               Type        Description
  ------------------------ ----------- -----------------------------------------------------------------------------------------------------------
  `pending_payment`        `integer`   The ID of the PendingPayment instance.
  `stripe_client_secret`   `string`    The `client_secret` for the Stripe [SetupIntent](https://stripe.com/docs/js/setup_intents/confirm_setup).
  `stripe_setup_intent`    `string`    The ID of the Stripe [SetupIntent](https://stripe.com/docs/js/setup_intents/confirm_setup).

### Request & Response


```
POST https://proxy.webshare.io/api/v2/payment/method/
```


update_payment_method.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/payment/method/",
    json={
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
  "pending_payment": 3,
  "stripe_client_secret": "...",
  "stripe_payment_intent": "...",
}
```


::: nx-mt-16
