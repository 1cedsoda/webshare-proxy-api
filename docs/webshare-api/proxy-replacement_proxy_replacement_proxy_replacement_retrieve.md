Get replacement


# Get proxy replacement

This endpoint lets you get an existing proxy replacement. You can use this endpoint when you create a proxy replacement request to keep checking the status of that request. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Parameters


```
GET https://proxy.webshare.io/api/v3/proxy/replace/{ID}/
```


or in case of targeting a specific plan


```
POST https://proxy.webshare.io/api/v3/proxy/replace/{ID}/?plan_id=<Plan ID>
```


  Parameter   Type    Description
  ----------- ------- ----------------------------------------------
  `ID`        `int`   The ID of the proxy replacement to retrieve.

### Request & Response


get_proxy_replacement.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v3/proxy/replace/<ID>/",
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[]

The commands above return JSON structured like this:


response.json

``` {
    "id": 98315,
    "to_replace": {"type": "ip_range", "ip_ranges": ["1.2.3.0/24"]},
    "replace_with": [{"type": "country", "country_code": "US"}],
    "dry_run": false,
    "state": "completed",
    "proxies_removed": 1,
    "proxies_added": 1,
    "reason": "proxy_replaced",
    "error": null,
    "error_code": null,
    "created_at": "2022-07-26T21:25:13.966946-07:00",
    "dry_run_completed_at": "2022-07-26T21:25:13.966946-07:00",
    "completed_at": "2022-07-26T22:25:13.966946-07:00",
}
```


### States


  State          Description                                                           
  -------------- --------------------------------------------------------------------- --
  `validating`   `Dry run proxy replacement request is still in progress.`             
  `validated`    `Dry run proxy replacement request is finished.`                      
  `processing`   `Actual proxy replacement request is still in progress.`              
  `completed`    `Actual proxy replacement request is finished.`                       
  `failed`       `In case of failure, you will get error_code and an error message.`   

### Error Types


  Error Code                                  Error                                                                                           
  ------------------------------------------- ----------------------------------------------------------------------------------------------- --
  `proxies_removed_doesnt_match_added`        `No new proxies available. Please try replacing your proxies again later.`                      
  `not_enough_replacements_in_subscription`   `You have 1 proxy replacements remaining. Upgrade subscription to receive more replacements.`   
  `no_proxies_to_be_replaced`                 `No proxies to be replaced. Please pick the proxies you want to replace.`                       

::: nx-mt-16
