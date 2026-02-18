Activate account


# Activate Account

Accounts in some cases may require email activation before being able to do certain actions. You can activate or resend activation emails using the APIs below.

## Activation Status Object


  Attributes                                  Types       Description
  ------------------------------------------- ----------- -------------------------------------------------------------------------------------------------------------------------------------------
  `email_is_verified`                         `boolean`   Whether the email is verified or not.
  `last_time_email_verification_email_sent`   `string`    Last time the account activation email was sent. May be `null`. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format with timestamp.
  `created_at`                                `string`    The time the activation status object was created. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format with timestamp.
  `updated_at`                                `string`    The last time the activation status was updated. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format with timestamp.

## Get Activation Status

This endpoint retrieves the current state of the account activation.


```
GET https://proxy.webshare.io/api/v2/activation/
```


### Request & Response


get_activation_status.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/activation/",
    headers={ "Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "email_is_verified": false,
  "last_time_email_verification_email_sent": null,
  "created_at": "2019-05-09T23:34:00.095501-07:00",
  "updated_at": "2019-05-09T23:34:00.095501-07:00"
}
```


## Resend Activation Email

This endpoint re-sends activation email to the user\'s registered email address. There is a limit on how often a user can re-send activation emails. The API returns the Activation Status object on success.


```
POST https://proxy.webshare.io/api/v2/activation/resend/
```


### Request & Response

The request does not contain a body.


resend_activation_email.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/activation/resend/",
    json={},
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "email_is_verified": false,
  "last_time_email_verification_email_sent": "2019-05-09T23:34:00.095501-07:00",
  "created_at": "2019-05-09T23:34:00.095501-07:00",
  "updated_at": "2019-05-09T23:34:00.095501-07:00"
}
```


## Complete Account Activation

Use the activation token you have received from the email to complete the account activation. A successful activation will return you a new API token. You can still continue using your existing API token. This API doesn\'t require authentication headers, although you are encouraged to send the headers.

The email contains a link which redirects to the following URL:


```
POST https://dashboard.webshare.io/activation/{activation_token}/confirm/
```


### Request & Response


  Parameter            Type       Description
  -------------------- ---------- --------------------------------------------
  `activation_token`   `string`   Activation token retrieved from the email.

```
POST https://proxy.webshare.io/api/v2/activation/complete/
```


`activation_token` field is used for completing account activation.


complete_activation.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/activation/complete/",
    json={
        "activation_token": "XXXX"
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

[Change email](/registerandlogin/change-email "Change email")[Two factor auth]
