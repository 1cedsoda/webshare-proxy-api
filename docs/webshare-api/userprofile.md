User Profile


# User Profile

You can use the API to retrieve information about your user preferences.

### User profile object


  Attributes                                   Type        Description
  -------------------------------------------- ----------- -----------------------------------------------------------------------------------------
  `id`                                         `number`    Unique identifier of the profile instance
  `email`                                      `string`    Email address of the users. (Read-only)
  `first_name`                                 `string`    First name of the user. Can be set to empty.
  `last_name`                                  `string`    First name of the user. Can be set to empty.
  `created_at`                                 `string`    The date user was registered. (Read-only)
  `last_login`                                 `string`    The date user last logged in. (Read-only)
  `timezone`                                   `string`    The preferred timezone set by the user.
  `subscribed_bandwidth_usage_notifications`   `boolean`   Subscribed to email notifications for bandwidth usage.
  `subscribed_subscription_notifications`      `boolean`   Subscribed to email notifications for subscription updates.
  `subscribed_proxy_usage_statistics`          `boolean`   Subscribed to email notifications for proxy usage statistics/insights.
  `subscribed_usage_warnings`                  `boolean`   Subscribed to email notifications for proxy usage warnings.
  `subscribed_guides_and_tips`                 `boolean`   Subscribed to email notifications for guides and tips for your proxy usage.
  `subscribed_survey_emails`                   `boolean`   Subscribed to email notifications for surveys.
  `tracking_id`                                `string`    Unique ID for this user. May be used while identifying the user with external services.

### In JSON format


profile.json

``` {
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
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
