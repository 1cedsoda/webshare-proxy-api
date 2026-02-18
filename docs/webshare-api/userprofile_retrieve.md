Retrieve user profile


## Retrieve user profile

This endpoint retrieves the user profile.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/profile/
```


get_profile.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/profile/",
  headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

```
// Example Response
{
  "id": 1,
  "email": "user@webshare.io",
  "first_name": "first",
  "last_name": "last",
  "last_login": "2022-06-14T15:59:06.663774-07:00",
  "timezone": "America/Los_Angeles",
  "subscribed_bandwidth_usage_notifications": true,
  "subscribed_subscription_notifications": true,
  "subscribed_proxy_usage_statistics": true,
  "subscribed_usage_warnings": true,
  "subscribed_guides_and_tips": true,
  "subscribed_survey_emails": true,
  "tracking_id": "...",
  ...
}
```


::: nx-mt-16
