Change email


# Change Email

This endpoint enables sending API calls for an email change request and complete an existing change request with a `confirmation_code` retrieved from the email.

## Change Email Request

Request a new email change for a user. If successful, the API sends an email to the user. Beyond email uniqueness validation, this API always returns 204 response. Email validation checks if the email exists in the system.


```
POST https://proxy.webshare.io/api/v2/changeemail/
```


  Parameter     Type       Description
  ------------- ---------- --------------------------------------------------------------------------------------------------------------
  `password`    `string`   Password of the user.
  `new_email`   `string`   New email address we are switching to to. Email validation checks if the email already exists in the system.

### Request & Response


change_email_request.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/changeemail/",
    json={
        "password": "newpassword1234",
        "new_email": "newemail@webshare.io"
    },
    headers={"Authorization": "Token APIKEY"}
)
 
assert response.status_code == 204
```


[][]

the above command returns empty response with `204 No Content`


```
HTTP/1.1 204 No Content
```


## Complete Email Change

Complete the change email request using the `confirmation_code` retrieved from the email. The change email contains a link which redirects to the following URL:


```
GET https://dashboard.webshare.io/changeemail/{confirmation_code}/confirm/
```


### Request & Response


**Important**

- The user must be logged into their account to complete the change email request.
- `confirmation_code` field is used for completing change email request.


\


change_email_complete.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/changeemail/complete/",
    json={
        "confirmation_code": "XXXX"
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
