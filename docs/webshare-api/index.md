Introduction


# Proxy Server API

## Introduction

The Webshare API follows the principles of Representational State Transfer (REST) architecture. It has been designed to provide predictable resource-oriented URLs, accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs.

One of the key features of the Webshare API is its support for backwards compatibility, which ensures that any changes made to the API are always backwards compatible. This means that clients using previous versions of the API will not be affected by the updates.

In addition to its features, the Webshare API also provides language examples. You can find these code examples on the every feature\'s page. To switch between the two programming languages, use the tabs located in the top right corner.

By leveraging the Webshare API, developers can easily integrate Webshare\'s functionality into their applications, allowing them to enhance their users\' experience and increase the efficiency of their workflow.

## Authentication

Authenticated Request Example.

Webshare API uses token to allow access to the API. You will receive token after a successful login request. Alternatively, you can register a new Webshare API key at our [API keys[ (opens in a new tab)]](https://proxy.webshare.io/userapi/keys) page.

Webshare API expects for the token to be included in all API requests to the server in a header that looks like the following: `Authorization: Token <TOKEN>`

\


CURL


example.py

```
import requests
 
requests.get(
  "https://proxy.webshare.io/api/v2/profile/",
  headers={ "Authorization": "Token APIKEY" }
)
```


[][]

ℹ️

You can create your API Keys on your [Dashboard[ (opens in a new tab)]](https://dashboard.webshare.io/userapi/keys) page.


## Pagination

The Webshare API uses pagination on some of its resource endpoints. The following GET query parameters are used to determine the current `page` and the `page_size`.

Some APIs which has streaming activity may opt to use `starting_after` instead of the `page` field. In either case, the `page_size` field is available.

## Request parameters

You can add the request parameters as part of your URL.


  Parameter             Description
  ------------------ -- ------------------------------------------------------------------------------------------------------------------------
  `page_size`           Number of elements returned in a page. Default page size is 25 (Optional field).
  `page`                The current page to retrieve. Default page is 1 (Optional field).
  `starting_after`      The ID of the last element of the current page. Default is `null` which means the most recent items. (Optional field).

### Response format

Response is in JSON object format with the following fields.


  Field           Description
  ------------ -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `count`         Total number of elements which are paginated.
  `next`          Full URL to the next page API resource. If there is no next page, set to `null`.
  `previous`      Full URL to the previous page API resource. If there is no previous page, set to `null`. If a page is using `starting_after` for pagination, `previous` field will not be available.
  `results`       List of elements which are paginated. If `page_size` is 25, you can expect up to 25 elements in the results.

### Example


example.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/proxy/list/?page=4&page_size=10"
)
 
response.json()
```


[][]

response.json

``` {
  "count": 35,
  "next": null,
  "previous": "https://proxy.webshare.io/api/v2/proxy/list/?page=3&page_size=10",
  "results": [
    { ... },
    { ... },
    { ... },
  ]
}
```


## Rate Limits


The server will respond with an HTTP status code of 429 when the rate limit has been exceeded. To prevent this error, it may be necessary to decrease the frequency of requests. It is require to wait for 60 seconds before making a new request.


The Webshare API uses rate limits for various endpoints.


  API Name                         Rate
  ----------------------------- -- ----------------------------
  `General API`                    240 requests every minute.
  `Proxy List Download Links`      30 requests every minute.
  `Proxy List Endpoints`           60 requests every minute.
  `Pricing Endpoints`              60 requests every minute.

⚠️

Authentication and other security-sensitive endpoints may have stricter rate limits to protect account security.


## Filtering & Ordering

The Webshare API uses filtering, search and ordering on list resource endpoints. The following GET query parameters are used to determine the ordering and filtering.

## Ordering

You can order a list resource endpoint by some fields available in the instance object. For example, integer and date fields can be commonly used for ordering.

You can combine multiple ordering fields and change ASC/DESC order.

### Request parameters

You can add the request parameters as part of your URL.


  Query        Type   Description
  ------------ ------ -----------------------------------------------------------------------------------------------------
  `ordering`          Comma separated name of the fields. Default ordering is ascending. Minus indicates descending order

### Examples


example.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/payment/transaction/?ordering=status,-created_at"
)
 
response.json()
```


[][]

## Filtering

You can filter list resource endpoints by exact, greater than, less than and contains methods.

### Exact match

Match the field to the given value. Can be used for any field type.


```
?status=completed
```


### Multi match

Match the field to the given value. Can be used for any field type. Multiple values can be comma separated.


```
?status__in=completed,refunded
```


### Greater than

Retrieve the fields with greater than given value. Can be used for datetime and number fields.


```
`?amount__gt=1337`
```


### Less than

Retrieve the fields with less than given value. Can be used for datetime and number fields.


```
`?amount__lt=1337`
```


### Contains match

Check if the given value is in the field. Can be used for string fields only.


```
`?status__contains=completed`
```


### Examples


example.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/payment/transaction/?status=completed,refunded&amount__lt=1337"
)
 
response.json()
```


[][]

## Search

You can perform text search on resource endpoints. Generally, only the text fields will be included as part of the search.


example.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/payment/transaction/?search=Free"
)
 
response.json()
```


[][]

  Query      Type   Description
  ---------- ------ ----------------------------
  `search`          The text search parameter.

## Errors

The Webshare API uses the following error codes:


  Error   Type                   Description
  ------- ---------------------- --------------------------------------------------------------------------------------------------------------
  `400`   `Bad Request`          Your request is invalid. Check the response body to see why.
  `401`   `Unauthorized`         Your authentication token is wrong. Re-login with your user credentials.
  `403`   `Forbidden`            You are forbidden to access the API. Upgrade your plan to gain access.
  `404`   `Not Found`            The specified resource could not be found. Maybe its deleted?
  `405`   `Method Not Allowed`   You tried to access a Webshare API with an invalid method.
  `406`   `Not Acceptable`       You requested a format that isn\'t json.
  `429`   `Rate limited`         you have reached to the [maximum number of requests](#rate-limits) you are allowed to send. Try again later.
  `5xx`   `Server Error`         We had a problem with our server. We have been notified and working on fixing the issue. Try again later.

## Federated Access


Federated access is only available to Webshare administrators.


Add the `X-Webshare-Federated-Access` header to your API calls to retrieve data as a particular user.


```
import requests
 
response = requests.get("https://proxy.webshare.io/api/v2/profile/", headers={
    "Authorization": "Token APIKEY",
    "X-Webshare-Federated-Access": "<User ID>"
})
response.json()
```


::: nx-mt-16
