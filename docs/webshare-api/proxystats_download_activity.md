Download proxy activities


# Download proxy activities


::: text-sm
This API does not require authentication.


You can download the proxy activities list as a file using the link below. This link use a token that can be retrieved from the [Get Download Token](/downloads/get_download_token) API with the scope \"activity\". You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.


```
GET api/v2/proxy/activity/download/
```


or in case of targeting a specific plan


```
GET api/v2/proxy/activity/download/?plan_id=<Plan ID>
```


### Parameters


  Parameter          Type       Description
  ------------------ ---------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `download_token`   `string`   Token retrieved from the [Get Download Token](/downloads/get_download_token) API with the scope \'activity\'
  `timestamp__lte`   `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be less than this. If given a date in the future, projected stats will be included for each hour between now and the given date. Cannot be after the `subscription.end_date`. Default is six days ago.
  `timestamp__gte`   `string`   The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the stats will be greater than this. Must be before the `timestamp__lte` field. Cannot be older than 90 days from today. Default is now.
  `search`           `string`   Generic search query.
  `error_reason`     `string`   Match only requests with the given error_reason. You can pass `*` to filter for only requests with an error.
  `starting_after`   `string`   You can pass the timestamp of the last proxy activity to retrieve the next page.
  `bytes__gte`       `string`   Filter requests with bytes equal or greater than the given value.
  `bytes__lte`       `string`   Filter requests with bytes equal or less than the given value.

### Request & Response


download_activity_list.py

```
import requests
 
response = requests.get(
  "api/v2/proxy/activity/download/",
  { "download_token": DOWNLOAD_TOKEN }
)
 
response.text
```


[][]

The commands above return CSV file in the following format:


response

```
Time,Hostname,Destination Port,Bytes,Duration,Proxy,Your IP Address,Error Reason,Protocol
2023-10-16 23:38:51.384785-07:00,test.dev.webshare.io,443,102400,0.3,178.62.198.117,10.1.0.1,None,http
2023-10-16 22:38:51.354124-07:00,test.dev.webshare.io,443,153600,0.3,138.201.46.150,10.1.0.1,None,http
2023-10-16 21:38:51.761951-07:00,test.dev.webshare.io,443,204800,0.3,76.14.29.153,10.1.0.1,None,http
```


::: nx-mt-16
