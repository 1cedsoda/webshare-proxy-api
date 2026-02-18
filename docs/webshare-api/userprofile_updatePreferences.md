Update user preferences


## Update user preferences

This endpoint updates the user preferences.

### Request & Response fields

This API can be called with one or more parameters according to which parameters are intented to be updated.


  Parameter                                          Type       Description
  -------------------------------------------------- ---------- ------------------------------------------------------------------
  `customer_satisfaction_survey_last_dismissed_at`   `string`   The timestamp when the customer satisfication survey dissmissed.
  `customer_satisfaction_survey_last_completed_at`   `string`   The timestamp when the customer satisfication survey completed.
  `onboarding_activity_page_viewed_at`               `string`   The timestamp when the onboarding activity page viewed.

### Request & Response


```
PATCH https://proxy.webshare.io/api/v2/profile/preferences/
```


patch_profile_preferences.py

```
import requests
 
response = requests.patch(
    "https://proxy.webshare.io/api/v2/profile/preferences/",
    headers={"Authorization": "Token APIKEY"},
    json={
        "customer_satisfaction_survey_last_dismissed_at": "2022-06-14T15:59:06.663774-07:00"
    },
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 2,
  "customer_satisfaction_survey_last_dismissed_at": "2022-06-14T15:59:06.663774-07:00",
  "customer_satisfaction_survey_last_completed_at": "2022-06-14T15:59:06.663774-07:00",
  "onboarding_activity_page_viewed_at": "2022-06-14T15:59:06.663774-07:00",
  ...
}
```


::: nx-mt-16
