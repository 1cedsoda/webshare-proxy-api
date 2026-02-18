Plan


# Plans


⚠️

**Important distinction between Subscription and Plan**

[]

Subscription stays with the user even after a user switches to a new Plan. Whereas, a new Plan object is created each time a customer re-customizes their Plan.


Plan object holds information about the customization options for the plan\
e.g. plan type, monthly price, proxy locations.

[See the Subscription API](/subscription).

## Plan Object


  Attributes                         Type         Description
  ---------------------------------- ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                               `int`        Unique identifier of the plan instance.
  `status`                           `string`     Plan status. Options are: `active` or `cancelled`.
  `bandwidth_limit`                  `float`      Bandwidth limit in GBs. `0` means unlimited bandwidth.
  `monthly_price`                    `float`      Price in USD for the monthly term.
  `yearly_price`                     `float`      Price in USD for the yearly term.
  `proxy_type`                       `string`     Category of proxies. Options are: `free`, `shared`, `semidedicated` and `dedicated`.
  `proxy_subtype`                    `string`     Sub category of the proxies. Options are `default`, `premium`, `isp`, `residential` and `datacenter_and_isp`. Not all proxy types have the same sub types.
  `proxy_count`                      `int`        Number of proxies in the plan.
  `proxy_countries`                  `object`     Number of proxies from each [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). `ZZ` means country is randomly allocated.
  `required_site_checks`             `list`       List of site checks the proxy list has to work with. E.g. `google_search` means that the proxies will work with Google search.
  `on_demand_refreshes_total`        `int`        Number of on-demand refreshes purchased as part of this plan.
  `on_demand_refreshes_used`         `int`        Number of on-demand refreshes used since subscription.start_date. The on-demand refreshes reset at the end of subscription.end_date.
  `on_demand_refreshes_available`    `int`        Number of on-demand refreshes available for this plan.
  `automatic_refresh_frequency`      `int`        Auto-refresh your proxy list every `automatic_refresh_frequency` seconds. `0` value means no automatic refreshes.
  `automatic_refresh_last_at`        `datetime`   Last time proxy list was auto-refreshed. It will come as `null` in the case of the list plans endpoint.
  `automatic_refresh_next_at`        `datetime`   Next time proxy list will be auto-refreshed. It will come as `null` in the case of the list plans endpoint.
  `proxy_replacements_total`         `int`        Individual proxy replacements purchased as part of this plan.
  `proxy_replacements_used`          `int`        Individual proxy replacements used since subscription.start_date. The proxy replacements reset at the end of subscription.end_date.
  `proxy_replacements_available`     `int`        Individual proxy replacements available for this plan.
  `subusers_total`                   `int`        Number of subusers allowed in this plan.
  `is_unlimited_ip_authorizations`   `boolean`    Indicates whether this plan has unlimited IP Authorizations.
  `is_high_concurrency`              `boolean`    Indicates whether this plan has unlimited IP Authorizations.
  `is_high_priority_network`         `boolean`    Indicates whether this plan has high priority network.
  `created_at`                       `string`     The timestamp when this instance was created.
  `updated_at`                       `string`     The timestamp when this instance was last updated.

### In JSON format


``` {
  "id": 2,
  "status": "active",
  "bandwidth_limit": 50.0,
  "monthly_price": 9.99,
  "yearly_price": 49.99,
  "proxy_type": "shared",
  "proxy_subtype": "default",
  "proxy_count": 1000,
  "proxy_countries": {"ZZ": 1000},
  "required_site_checks": ["google_search"],
  "on_demand_refreshes_total": 0,
  "on_demand_refreshes_used": 0,
  "on_demand_refreshes_available": 0,
  "automatic_refresh_frequency": 0,
  "automatic_refresh_last_at": null,
  "automatic_refresh_next_at": null,
  "proxy_replacements_total": 10,
  "proxy_replacements_used": 0,
  "proxy_replacements_available": 10,
  "subusers_total": 3,
  "subusers_used": 0,
  "subusers_available": 3,
  "is_unlimited_ip_authorizations": true,
  "is_high_concurrency": true,
  "is_high_priority_network": false,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## List plans

This endpoint retrieves all plans created by the user (even the non-active ones) in [paginated](/#pagination) format with [filtering & ordering](/#filtering-amp-ordering) enabled.


```
GET https://proxy.webshare.io/api/v2/subscription/plan/
```


### Request & Response


list_plans.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/subscription/plan/",
  headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
   "count":1,
   "next":null,
   "previous":null,
   "results":[
     {
       "id": 2,
       "status": "active",
       "bandwidth_limit": 50.0,
       "monthly_price": 9.99,
       "yearly_price": 49.99,
       "proxy_type": "shared",
       "proxy_subtype": "default",
       "proxy_count": 1000,
       "proxy_countries": {"ZZ": 1000},
       "required_site_checks": ["google_search"],
       "on_demand_refreshes_total": 0,
       "on_demand_refreshes_used": 0,
       "on_demand_refreshes_available": 0,
       "automatic_refresh_frequency": 0,
       "automatic_refresh_last_at": null,
       "automatic_refresh_next_at": null,
       "proxy_replacements_total": 10,
       "proxy_replacements_used": 0,
       "proxy_replacements_available": 10,
       "subusers_total": 3,
       "subusers_used": 0,
       "subusers_available": 3,
       "is_unlimited_ip_authorizations": true,
       "is_high_concurrency": true,
       "is_high_priority_network": false,
       "created_at": "2022-06-14T11:58:10.246406-07:00",
       "updated_at": "2022-06-14T11:58:10.246406-07:00"
     }
   ]
}
```


## Update plan

This endpoint lets you update an existing plan. You can only update the `automatic_refresh_next_at` field of the Plan object.

### Request & Response


```
PATCH https://proxy.webshare.io/api/v2/subscription/plan/<ID>/
```


update_plan.py

```
import requests
 
response = requests.patch(
    "https://proxy.webshare.io/api/v2/subscription/plan/<ID>/",
    json={
        "automatic_refresh_next_at":"2022-06-14T11:58:10.246406-07:00"
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 2,
  "status": "active",
  "bandwidth_limit": 50.0,
  "monthly_price": 9.99,
  "yearly_price": 49.99,
  "proxy_type": "shared",
  "proxy_subtype": "default",
  "proxy_count": 1000,
  "proxy_countries": {"ZZ": 1000},
  "required_site_checks": ["google_search"],
  "on_demand_refreshes_total": 0,
  "on_demand_refreshes_used": 0,
  "on_demand_refreshes_available": 0,
  "automatic_refresh_frequency": 0,
  "automatic_refresh_last_at": null,
  "automatic_refresh_next_at": "2022-06-14T11:58:10.246406-07:00",
  "proxy_replacements_total": 10,
  "proxy_replacements_used": 0,
  "proxy_replacements_available": 10,
  "subusers_total": 3,
  "subusers_used": 0,
  "subusers_available": 3,
  "is_unlimited_ip_authorizations": true,
  "is_high_concurrency": true,
  "is_high_priority_network": false,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## Retrieve plan

This endpoint returns the plan. You can find the active plan id from the subscription object.

### Parameters


  Parameter   Type    Description
  ----------- ------- --------------------------------
  `ID`        `int`   The ID of the plan to retrieve

### Request & Response


```
GET https://proxy.webshare.io/api/v2/subscription/plan/<ID>/
```


retrieve_plan.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/subscription/plan/<ID>/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "id": 2,
  "status": "active",
  "bandwidth_limit": 50.0,
  "monthly_price": 9.99,
  "yearly_price": 49.99,
  "proxy_type": "shared",
  "proxy_subtype": "default",
  "proxy_count": 1000,
  "proxy_countries": {"ZZ": 1000},
  "required_site_checks": ["google_search"],
  "on_demand_refreshes_total": 0,
  "on_demand_refreshes_used": 0,
  "on_demand_refreshes_available": 0,
  "automatic_refresh_frequency": 0,
  "automatic_refresh_last_at": null,
  "automatic_refresh_next_at": null,
  "proxy_replacements_total": 10,
  "proxy_replacements_used": 0,
  "proxy_replacements_available": 10,
  "subusers_total": 3,
  "subusers_used": 0,
  "subusers_available": 3,
  "is_unlimited_ip_authorizations": true,
  "is_high_concurrency": true,
  "is_high_priority_network": false,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


## Upgrade plan

This endpoint lets you upgrade an existing plan. Your subscription will be credits according to the duration/bandwidth left in the current plan and will charge you with part of new plan price according to how much days left in the current subscription period.

The upgrade endpoint uses the same parameters as the [Subscription pricing](/subscription/pricing) endpoint with 2 additional fields: `payment_method` and `recaptcha`.


::: text-sm
This API endpoint requires recaptcha validation if a payment is required. If you have enough account credits, no payment is required. When a payment is required you should not be using this API endpoint programmatically and only use it from the Webshare Dashboard.


### Request fields

The upgrade API uses the same parameters as the [Subscription pricing](/subscription/pricing) endpoint with one additional field: `payment_method`.


  Parameter          Type       Description
  ------------------ ---------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `payment_method`   `string`   Can be 3 unique options. 1) `null`, use the payment on file (same as `subscription.payment_method`). 2) Use an existing [PaymentMethod](#payment-method) id. 3) Add a new payment by using [Stripe PaymentMethod](https://stripe.com/docs/js/payment_methods) ID (usually starts with \"pm\_\...\").
  `recaptcha`        `string`   The recaptcha token (can be invisible recaptcha).

### Response fields


  Attributes                Type        Description
  ------------------------- ----------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `payment_required`        `boolean`   Whether a user needs to complete additional steps for the payment or not. If `false`, the purchase is completed and user now has the new plan.
  `plan`                    `integer`   The ID of the new Plan object.
  `pending_payment`         `integer`   The ID of the PendingPayment instance. Only present if `payment_required == true`.
  `stripe_client_secret`    `string`    The `client_secret` for the Stripe [PaymentIntent](https://stripe.com/docs/js/payment_intents/confirm_card_payment). Only present if `payment_required == true`.
  `stripe_payment_intent`   `string`    The ID of the Stripe [PaymentIntent](https://stripe.com/docs/js/payment_intents/confirm_card_payment). Only present if `payment_required == true`.
  `stripe_payment_method`   `string`    The ID of the Stripe [PaymentMethod](https://stripe.com/docs/js/payment_methods/create_payment_method). Only present if `payment_required == true`.

### Request & Response


```
POST https://proxy.webshare.io/api/v2/subscription/plan/<ID>/upgrade/
```


upgrade_plan.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/subscription/plan/<ID>/upgrade/",
    json={
        "proxy_type": "shared",
        "proxy_subtype": "default",
        "proxy_countries": {"US": 100},
        "bandwidth_limit": 5000,
        "on_demand_refreshes_total": 0,
        "automatic_refresh_frequency": 0,
        "proxy_replacements_total": 0,
        "subusers_total": 3,
        "is_unlimited_ip_authorizations": False,
        "is_high_concurrency": False,
        "is_high_priority_network": False,
        "term": "monthly",
        "payment_method": 3,
        "recaptcha": "...",
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[]

The commands above return JSON structured like this:


response.json

``` {
  "payment_required": true,
  "plan": 2,
  "pending_payment": 3,
  "stripe_client_secret": "...",
  "stripe_payment_intent": "...",
  "stripe_payment_method": "..."
}
```


## Cancel plan

This endpoint lets you cancel an existing plan. Your subscription will be credits according to the duration/bandwidth left in that plan.

### Request & Response


```
POST https://proxy.webshare.io/api/v2/subscription/plan/<ID>/cancel/
```


cancel_plan.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/subscription/plan/<ID>/cancel/",
    json={},
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
  "success": true,
  "transaction": 12
}
```


::: nx-mt-16
