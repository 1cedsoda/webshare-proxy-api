Account Verification


# Account Verification

Your Webshare account may require verification from time-to-time to continue operating. This section provides the API endpoints to check if a verification is required and submit evidence.

Furthermore, you can view the format of API responses you may receive in case an account is suspended.

## The verification object

You can use the API to retrieve information about your account verifications.

### Verification Object


  Attributes         Type       Description
  ------------------ ---------- -------------------------------------------------------------------------------------------------------------
  `id`               `int`      Unique identifier of the verification instance.
  `type`             `string`   The type of the verification. Can be `acceptable_use_violation`, `abuse_report` or `fraudulent_payment`.
  `state`            `string`   The current state of the verification. Can be `inflow`, `successful_verification` or `failed_verification`.
  `created_at`       `string`   The timestamp of when this verification started.
  `updated_at`       `string`   The timestamp when this instance was last updated.
  `needs_evidence`   `bool`     Whether this verification requires evidence from the user.

### In JSON format


verification_object.json

``` {
  "id": 1,
  "type": "acceptable_use_violation",
  "state": "inflow",
  "started_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00",
  "needs_evidence": false
}
```


::: nx-mt-16
