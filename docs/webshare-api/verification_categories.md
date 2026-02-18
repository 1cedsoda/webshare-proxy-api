Verification categories


## Verification Categories

This API lets you retrieve information about the different verification categories that may trigger verification flows. Each category represents a specific type of proxy usage pattern that may require verification.

### Parameters


  Parameter                           Type        Description
  ----------------------------------- ----------- -----------------------------------------------------------------------------------------------------------------------------------
  `description`                       `string`    Description of the verification category. Can be user visible.
  `request_threshold`                 `null`      Previously indicated the threshold number of requests that would trigger verification for this category. Now always returns null.
  `id_verification_required`          `boolean`   Whether this verification category requires ID verification when triggered.
  `id_verification_restores_access`   `boolean`   Whether this verification category restores proxy access when ID verification is completed.

### Examples


```
import requests
 
response = requests.get("https://proxy.webshare.io/api/v2/verification/categories/")
response.json()
```


```
curl "https://proxy.webshare.io/api/v2/verification/categories/" \
  -H "Authorization: Token APIKEY"
```


> The above command returns JSON structured like this:


``` {
    "requests_to_authentication_pages": {
        "description": "Large number of requests to login/sign-up pages requires additional verification. Large number of login attempts with different credentials is strictly forbidden. Signing up for large number of accounts on some platforms may require ID verification.",
        "request_threshold": null,
        "id_verification_required": false,
        "id_verification_restores_access": false
    },
    "requests_to_financial_institutions": {
        "description": "Large number of requests to payment pages, banks or any other financial institutions requires ID verification to be completed.",
        "request_threshold": null,
        "id_verification_required": true,
        "id_verification_restores_access": true
    }
}
```


::: nx-mt-16
