Change password


# Change Password

This endpoint enables changing your existing password.

## Reset Password Request

Change your current password to a new password. Upon a successful password change, all API tokens will be disabled except the current one.

If a user has registered with Google Oauth, they may not have a password. In that case, they must use reset password endpoint instead.


```
POST https://proxy.webshare.io/api/v2/changepassword/
```


  Parameter        Type       Description
  ---------------- ---------- -----------------------------------------------------------------------------
  `password`       `string`   Current password.
  `new_password`   `string`   New password. Must meet all password requirements (similar to registration)

### Request & Response


reset_password_request.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/changepassword/",
    json={
        "password": "currentpassword",
        "new_password": "new_password1234"
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

the above command returns empty response with `204 No Content`


```
HTTP/1.1 204 No Content
```


::: nx-mt-16
