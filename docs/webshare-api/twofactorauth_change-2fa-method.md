Change 2FA Method


## Change 2FA Method

You can use this API to change the default 2FA method for your account.

- Email method activates instantly.
- Device method requires additional steps to complete the activate the new method.


```
POST https://proxy.webshare.io/api/v2/twofactorauth/method/
```


  Parameter   Type       Description
  ----------- ---------- ----------------------------------------------------------------------------------
  `type`      `string`   Defines the type of 2FA method. Valid values: \'email_code\' or \'device_totp\'.

### Request & Response


change_2fa_method_request.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/twofactorauth/method/",
    json={
        "type": "email_code",
    },
    headers={"Authorization": "Token APIKEY"}
)
 
assert response.status_code == 200
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 137,
  "type": "email_code",
  "active": True,
  "created_at": "2023-03-04T05:34:35.553059-08:00",
  "updated_at": "2023-03-04T05:34:35.553059-08:00",
}
```


::: nx-mt-16
