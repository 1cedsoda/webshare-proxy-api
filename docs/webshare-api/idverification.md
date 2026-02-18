ID Verification


# ID Verification

Your account may be required to complete ID verification in some cases (e.g. receiving affiliate payout). The ID verification can only be initiated if an account reached to this condition (e.g. minimum payout amount).

Webshare uses [Stripe Identity[ (opens in a new tab)]](https://stripe.com/identity) for ID Verification. You must use the [Stripe JS library[ (opens in a new tab)]](https://stripe.com/docs/identity/verify-identity-documents) to complete the ID verification within the application. No ID documents are sent to the Webshare servers.

## The ID verification object

You can use the API to retrieve information about the ongoing ID verification

### Verification object


  Attributes                         Type       Description
  ---------------------------------- ---------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                               `number`   Unique identifier of this instance.
  `state`                            `string`   State of the current ID verifiation. The verification states are listed below in further detail.
  `client_secret`                    `string`   Client secret to be used with the [Stripe JS API](https://stripe.com/docs/identity/verify-identity-documents). May be `null` if the verification is not in the `pending` state.
  `verification_failure_times`       `number`   Number of times the ID verification has failed.
  `max_verification_failure_times`   `number`   Maximum number of times an ID verification can fail before the user cannot initiate a new ID verification. If set to 2, it means the user can try to verify their account 2 times. After the second failure, they won\'t be able to initiate ID verification any longer.
  `created_at`                       `string`   The original registration date. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
  `updated_at`                       `string`   The last time the verification object updated. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
  `verified_at`                      `string`   Timestamp when the account has successfully completed the ID verification. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. May be `null`.

### In JSON Format


``` {
  "id": 1,
  "state": "not-required",
  "client_secret": null,
  "verification_failure_times": 0,
  "max_verification_failure_times": 0,
  "created_at": "2019-05-09T23:34:00.095501-07:00",
  "updated_at": "2019-05-09T23:34:00.095501-07:00",
  "verified_at": null
}
```


## Verification state


  Attributes       Type       Description
  ---------------- ---------- -------------------------------------------------------------------------------------------------------------------------------------------------------
  `not-required`   `string`   The user is not required to complete ID verification. They may be required to complete ID verification when their payout threshold is met.
  `requested`      `string`   The user should start a verification. In this state, `client-secret` is null.
  `pending`        `string`   The user did initiate an ID verification. The user did not complete the ID verification yet on Stripe JS API. `client-secret` is set.
  `processing`     `string`   The user completed the ID verification. We are now processing the validity of the ID verification. `client-secret` is null.
  `failed`         `string`   The user has failed ID verification. The user may restart verification if `verification_failure_times` is less than `max_verification_failure_times`.
  `verified`       `string`   The user has completed ID verification successfully.

::: nx-mt-16
