Two-Factor Auth


# Two factor authentication (2FA)

Webshare requires two factor authentication on all of its endpoints. This section explains how to enter the 2FA code when it is required, and how to enroll new 2FA devices for your account.

Webshare currently supports following 2FA methods:

- Email: Enabled by default on your account.
- TOTP: You can enroll a TOTP device (e.g. Google Authenticator, Authy) to generate 2FA codes.


The 2FA only applies to login tokens. API tokens are not affected by 2FA.


## When to enter 2FA?

You will receive 403 Forbidden response from any API with the following message when 2FA is required:


``` {
    "detail": "Two factor authentication is needed.", 
    "code": "2fa_needed"
}
```


If email 2FA method is used, you will receive an email with the 2FA code as soon as you receive the 403 response.

### 2FA Method object


  Attributes     Type        Description
  -------------- ----------- ----------------------------------------------------------------------------------------------------------------------------
  `id`           `number`    Unique identifier of the 2FA method instance
  `type`         `string`    The type of 2FA method. Valid values: `email_code` or `device_totp`.
  `active`       `boolean`   Whether this is the active 2FA for the account. Each account has 1 active 2FA method.
  `secret_key`   `string`    Hex formatted secret key for TOTP device. Only shown right after creating a `device_totp`. Otherwise this field is hidden.
  `created_at`   `string`    The date the 2FA method was created. (Read-only)
  `updated_at`   `string`    The date the 2FA method was last updated. (Read-only)

### In JSON format


twofactorauthmethod.json

``` {
  "id": 137,
  "type": "email_code",
  "active": True,
  "secret_key": "WMYX3M3A5UML5Y2ZVL7ABLGIRFY3X4H5",
  "created_at": "2023-03-04T05:34:35.553059-08:00",
  "updated_at": "2023-03-04T05:34:35.553059-08:00"
}
```


::: nx-mt-16
