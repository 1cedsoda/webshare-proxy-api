Social account


# Social Account

This endpoint enables registering and login with social account (e.g. Google OAuth2). The token retrieved from both the register and login endpoints can be used to authorize API requests.

## Register a Social Account

You can register for a new account using the API requests as follows.


```
POST https://proxy.webshare.io/api/v2/register/social/
```


  Parameter                    Type        Description
  ---------------------------- ----------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `provider`                   `string`    Social provider to login with. Currently only `google` is supported.
  `code`                       `string`    Then auth code received from the social provider.
  `redirect_uri`               `string`    Must match the authorized redirect URIs [Google Credentials](https://console.cloud.google.com/apis/credentials/oauthclient/186704426882-l16ev1p3h8eai6btjq3b929csie3kgm5.apps.googleusercontent.com?project=webshareio-login).
  `tos_accepted`               `boolean`   Must be `true` to process the request.
  `marketing_email_accepted`   `boolean`   Whether the service should send marketing emails to the customers.

### Request & Response


register.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/register/social/",
    json={
      "provider": "google",
      "code": "XXXX",
      "redirect_uri": "https://dashboard.webshare.io",
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


## Login with a Social Account

You can login to an existing social account using the API requests as follows.


```
POST https://proxy.webshare.io/api/v2/login/social/
```


  Parameter        Type       Description
  ---------------- ---------- ---------------------------------------------------
  `provider`       `string`   
  `code`           `string`   Then auth code received from the social provider.
  `redirect_uri`   `string`   

### Request & Response


login.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/login/social/",
    json={
      "provider": "google",
      "code": "XXXX",
      "redirect_uri": "https://dashboard.webshare.io",
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
