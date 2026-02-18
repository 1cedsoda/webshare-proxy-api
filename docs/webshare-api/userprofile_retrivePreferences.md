Retrive user preferences


## Retrieve user preferences

This endpoint retrieves the user preferences.

### Request & Response


```
GET https://proxy.webshare.io/api/v2/profile/preferences/
```


get_profile_preferences.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/profile/preferences/",
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
  "customer_satisfaction_survey_last_dismissed_at": "2022-06-14T15:59:06.663774-07:00",
  "customer_satisfaction_survey_last_completed_at": "2022-06-14T15:59:06.663774-07:00",
  "onboarding_activity_page_viewed_at": "2022-06-14T15:59:06.663774-07:00",
  ...
}
```


::: nx-mt-16
