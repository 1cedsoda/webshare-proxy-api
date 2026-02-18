Update user profile


## Update user profile

This endpoint updates the user profile.


```
PATCH https://proxy.webshare.io/api/v2/profile/
```


### Request & Response


patch_profile.py

```
import requests
 
response = requests.patch(
    "https://proxy.webshare.io/api/v2/profile/",
    headers={"Authorization": "Token APIKEY"},
    json={
        "timezone":"America/New_York"
    },
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 2,
  "email": "new@webshare.io",
  "first_name": "Jon",
  "last_name": "Denver",
  "last_login": "2023-03-04T05:34:35.553059-08:00",
  "timezone": "America/New_York"
  ...
}
```


::: nx-mt-16
