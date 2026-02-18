Verification thresholds


## Verification thresholds

This API lets you retrieve the thresholds which may trigger an acceptable_use_violation verification flow. They are thresholds for the allowed number of requests under specific category like (Requests to financial institutions). If the user account is not in verification, these percentages will eventually will reset themselves.

### Parameters


  Parameter                           Type        Description
  ----------------------------------- ----------- ----------------------------------------------------------------------------------------------------------------
  `description`                       `string`    Description of the verification trigger. Can be user visible.
  `id_verification_required`          `boolean`   Whether this verification threshold requires ID verification when triggered.
  `id_verification_restores_access`   `boolean`   Whether this verification threshold restores proxy access when ID verification is completed.
  `request_count`                     `number`    Number of proxy requests sent matching this verification trigger.
  `request_threshold`                 `null`      Previously indicated the number of proxy requests which would trigger this threshold. Now always returns null.
  `triggered`                         `boolean`   Whether this verification threshold has been triggered.

### Examples


```
import requests
 
response = requests.get("https://proxy.webshare.io/api/v2/verification/thresholds/")
response.json()
```


```
curl "https://proxy.webshare.io/api/v2/verification/thresholds/" \
  -H "Authorization: Token APIKEY"
```


> The above command returns JSON structured like this:


``` {
    "requests_to_authentication_pages": {
        "description": "Large number of requests to login/sign-up pages requires additional verification. Large number of login attempts with different credentials is strictly forbidden. Signing up for large number of accounts on some platforms may require ID verification.",
        "id_verification_required": False,
        "id_verification_restores_access": False,
        "request_count": 50000,
        "request_threshold": null,
        "triggered": True,
    },
    "requests_to_financial_institutions": {
        "description": "Large number of requests to payment pages, banks or any other financial institutions requires ID verification to be completed.",
        "id_verification_required": False,
        "id_verification_restores_access": False,
        "request_count": 0,
        "request_threshold": null,
        "triggered": False,
    },
}
```


::: nx-mt-16
