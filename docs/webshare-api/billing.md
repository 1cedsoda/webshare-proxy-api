Payments & Billing


# Payments & Billing

Webshare has 2 main objects for managing payment & billing:

- [Payment Method](/billing#payment-method): The payment method used in the payment process.
- [Transaction](/billing#transaction): The transaction created when a payment is completed.

## Payment Method

The payment method used in the payment process. There are various payment methods (e.g. card, Stripe Link). All of the payment methods can be accessed via the same API.

You can distinguish payment methods using the `type` field. All payment methods

### Payment method object

#### Shared fields for payment methods

All payment methods have the following shared fields. Each payment method may have additional fields.


  Attributes      Type       Description
  --------------- ---------- --------------------------------------------------------------------------------
  `id`            `string`   Unique identifier of the payment method instance.
  `type`          `string`   Unique identifier of the payment type. Example values: StripeCard, LinkPayment
  `created_at`    `string`   The timestamp of when the payment method was created.
  `updated_at`    `string`   The timestamp of when the payment method was last updated.
  `line`          `string`   Billing address line.
  `city`          `string`   Billing address city.
  `postal_code`   `string`   Billing address postal code.
  `state`         `string`   Billing address state.
  `country`       `string`   Billing address country.

#### Fields for `StripeCard`

The fields below are available only when the PaymentMethod.type is `StripeCard`.


  Attributes           Type       Description
  -------------------- ---------- ----------------------------------------------------------------------------------------------
  `brand`              `string`   Brand of the card. Could be `mastercard`, `amex`, `visa`, `diners club`, `jcb` or \`unionpay
  `last4`              `string`   Last 4 digits of the card.
  `expiration_year`    `number`   Expiration year of the card.
  `expiration_month`   `number`   Expiration month of the card. `6` means June.

**In JSON format**


stripe_card.json

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


#### Fields for `LinkPayment`

Link payments do not have any additional fields.


link_payment.json

``` {
  "id": 1,
  "type": "LinkPayment",
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## Transaction

The transaction created when a payment is completed.

### Transaction object


  Attributes         Type       Description
  ------------------ ---------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`               `string`   Unique identifier of the transaction instance.
  `status`           `string`   Status of the object. Can be `completed` or `refunded`. Partial refunds will show up as `refunded`.
  `payment_method`   `object`   Nested payment method instance.
  `reason`           `string`   The reason of this transaction.
  `amount`           `number`   The amount of the transaction in USD.
  `credits_used`     `number`   The credits used in the transaction.
  `credits_gained`   `number`   The credits gained in the transaction (In case of downgrading).
  `refund_amount`    `number`   The amount refunded in USD.
  `refund_date`      `string`   The date the last refund was issued. May be `null` if no refund was issued. If a user is refunded multiple times for the same transaction, only the last date will be shown.
  `created_at`       `string`   The timestamp of when this instance was created.
  `updated_at`       `string`   The timestamp when this instance was last updated.

**In JSON format**


transaction_object.json

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


## Pending Payments

### Pending payment object


  Attributes         Type        Description
  ------------------ ----------- -------------------------------------------------------------------------------------------------
  `id`               `string`    Unique identifier of the pending payment object.
  `status`           `string`    Current state of the pending payment. Can be `pending`, `processing`, `successful` or `failed`.
  `failure_reason`   `string`    Set to a user-friendly string if a status is `failed`. Default is null.
  `payment_method`   `object`    Nested payment method instance.
  `plan`             `object`    Nested plan instance.
  `transaction`      `object`    Nested transaction instance. Only set if the status is `successful`.
  `is_renewal`       `boolean`   Whether the payment should be used to renew the subscription or immediately change it.
  `term`             `string`    Term of the payment. Can be `monthly` or `yearly`.
  `created_at`       `string`    The timestamp on when the pending payment was created
  `updated_at`       `string`    The timestamp when the pending payment was last updated.
  `completed_at`     `string`    The timestamp when the pending payment status was last updated.

**In JSON format**


pending_payment_object.json

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
