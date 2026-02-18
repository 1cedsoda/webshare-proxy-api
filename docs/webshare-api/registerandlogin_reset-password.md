Reset password


# Reset Password

This endpoint enables sending API calls for a new password reset request and complete an existing password reset with a `password_reset_token` retrieved from the email.

## Reset Password Request

Request a new password reset for a user. If successful, the API send an email to the user. Beyond basic email/recaptcha validation, this API always returns 204 response even if the email is not found. Email validation only checks if the given email is in the correct format.


```
POST https://proxy.webshare.io/api/v2/resetpassword/
```


  Parameter     Type       Description
  ------------- ---------- -------------------------------------------------------------------------------------------------------
  `email`       `string`   Email of the existing user. Email validation only checks if the given email is in the correct format.
  `recaptcha`   `string`   The recaptcha token (can be invisible recaptcha).

### Request & Response


reset_password_request.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/resetpassword/",
    json={
        "email": "user@webshare.io",
        "recaptcha": "..."
    }
)
 
response.json()
```


[][]

the above command returns empty response with `204 No Content`


```
HTTP/1.1 204 No Content
```


## Complete Password Request

Complete the password reset using the `password_reset_token` retrieved from the email. If password reset is successful, all previous API tokens will be invalidated and you will receive a new token.

The reset password email contains a link which redirects to the following URL:


```
POST https://dashboard.webshare.io/resetpassword/{password_reset_token}/confirm/
```


### Request & Response


The password `password_reset_token` field is used for completing password reset.


reset_password_complete.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/resetpassword/complete/",
    json={
        "password": "newpassword1234",
        "password_reset_token": "aabb...99",
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
