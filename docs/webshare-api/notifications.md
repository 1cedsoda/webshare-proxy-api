Notifications


# Notifications

Account related activity is presented as notifications from the API. The notifications are similar to activity feed that a user can consume and dismiss as needed.

### The notification object

Each notification instance has the following fields


  Attributes         Type        Description
  ------------------ ----------- --------------------------------------------------------------------------------
  `id`               `int`       The unique ID of the notification object.
  `type`             `string`    The type of notification. More details on each type can be found below.
  `is_dismissable`   `boolean`   Whether this notification dismissable by the end-user.
  `context`          `json`      Additional context for this notification. More information can be found below.
  `created_at`       `string`    The timestamp when this instance was created.
  `updated_at`       `string`    The timestamp when this instance was last updated.
  `dismissed_at`     `string`    The timestamp of when this notification was dismissed. May be `null`.

### In JSON format


``` {
    "id": 13,
    "type": "too_much_bandwidth_too_little_proxies",
    "is_dismissable": true,
    "context": { "plan": 22 },
    "created_at": "2022-06-14T11:58:10.246406-07:00",
    "updated_at": "2022-06-14T11:58:10.246406-07:00",
    "dismissed_at": null,
}
```


### Current supported notification types

#### The `too_much_bandwidth_too_little_proxies` type

This notification is triggered when a user has too much bandwidth and too little proxies. This notification type includes a context with one parameter `plan` which contains the related plan id.

#### The `unlimited_bandwidth_gets_throttled` type

This notification is triggered due to high data usage on an Unlimited Bandwidth plan. This notification type includes a context with one parameter `plan` which contains the related plan id.

#### The `subscription_renew_failed` type

This notification is triggered when a user failed to renew his subscription. This notification type includes a context with one parameter `effect` which can take three values:

- `null`: For the first renew failed operation, with no further effect.
- `proxies_stopped_working`: In the second faluire, the proxies will be stopped working.
- `converted_to_free_plan`: In the third faluire, the subscription will be converted to free plan.

#### The `subscription_cc_will_expire_soon` type

This notification is triggered when a user\'s credit card will get expired soon.

#### The `reminder_to_use_proxy` type

This notification is triggered to remind the users to use their proxies if they didn\'t start to use them yet.

#### The `projected_proxy_usage_over_80` type

This notification is triggered when a user reached 80 percent of projected bandwidth usage. This notification type includes two parameters in the context:

- `plan`: contains the related plan id.
- `plan_limit`: the plan\'s bandwidth limit.

#### The `projected_proxy_usage_over_100` type

This notification is triggered when a user reached 100 percent of projected bandwidth usage. This notification type includes two parameters in the context:

- `plan`: contains the related plan id.
- `plan_limit`: the plan\'s bandwidth limit.

#### The `high_concurrency_error` type

This notification is triggered when a user subscription gets high concurrency errors. This notification type includes three parameters:

- `plan`: contains the related plan id.
- `projected_bandwidth_gbs`: the current projected bandwidth usage rate.
- `plan_limit`: the subscription\'s plan bandwidth limit.

#### The `100_percent_bandwidth_used` type

This notification is triggered when a user subscription reached %100 of bandwidth usage. This notification type includes a context with one parameter `plan` which contains the related `plan` id.

#### The `proxies_are_unallocated` type

This notification is triggered when some proxies from the proxy list are unallocated. This notification type includes a context with one parameter `plan` which contains the related plan id.

#### The `question_is_added` type

The user needs to answer account verification question. This notification type does not include a context.

::: nx-mt-16
