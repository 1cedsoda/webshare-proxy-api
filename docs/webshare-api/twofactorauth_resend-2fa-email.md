Resend 2FA Email


## Resend 2FA Email

Resend the 2FA code via email in case you didn\'t receive it. This API is only available for the email 2FA method.


```
POST https://proxy.webshare.io/api/v2/twofactorauth/email/resend/
```


### Request & Response


activate_2fa_method_request.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/twofactorauth/email/resend/",
    headers={"Authorization": "Token APIKEY"}
)
 
assert response.status_code == 200
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "email_sent": true
}
```


::: nx-mt-16
