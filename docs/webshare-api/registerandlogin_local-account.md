Local account


# Local Account

This endpoint enables registering and login with email and password. The email address verification (e.g. click on a link to verify email) is not part of this API. The token retrieved from both the register and login endpoints can be used to authorize API requests.

## Register a Local Account

You can register for a new account using the API requests as follows.


ℹ️

This API endpoint requires recaptcha validation. This means that you should not be using this API endpoint programmatically and only use it from the [Webshare Dashboard](https://proxy.webshare.io/dashboard/).


```
POST https://proxy.webshare.io/api/v2/register/
```


  Parameter                    Type        Description
  ---------------------------- ----------- ----------------------------------------------------------------------------------------------------------------------------------------
  `email`                      `string`    Email address to register with. May require email validation (e.g. click the link) later on.
  `password`                   `string`    Password requirements are: 8 characters minimum, not too similar to the email, must not be all numeric, must not be a common password.
  `recaptcha`                  `string`    The recaptcha token (can be invisible recaptcha).
  `tos_accepted`               `boolean`   Must be `true` to process the request.
  `marketing_email_accepted`   `boolean`   Whether the service should send marketing emails to the customers.

### Request & Response


example.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/register/",
    json={
      "email": "user@webshare.io",
      "password": "password",
      "recaptcha": "...",
      "tos_accepted": True,
      "marketing_email_accepted": True,
    }
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` { "token": "...", "logged_in_existing_user": false }
```


## Sign in with Local Account

You can login to an existing account using the API requests as follows.


ℹ️

This API endpoint requires recaptcha validation. This means that you should not be using this API endpoint programmatically and only use it from the [Webshare Dashboard](https://proxy.webshare.io/dashboard/).


```
POST https://proxy.webshare.io/api/v2/login/
```


  Parameter     Type       Description
  ------------- ---------- ---------------------------------------------------
  `email`       `string`   Email address previously registered with.
  `password`    `string`   Password previously registered with.
  `recaptcha`   `string`   The recaptcha token (can be invisible recaptcha).

### Request & Response


login.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/login/",
    json={
      "email": "user@webshare.io",
      "password": "password",
      "recaptcha": "..."
    }
)
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` { "token": "..." }
```


::: nx-mt-16
