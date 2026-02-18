Referral Info (Public)


# Referral Info

## Get Referral Code Info

Retrieve the information of a referral code. Contains publicly available information such as referral code promotion codes.


  Attributes        Type        Description
  ----------------- ----------- ---------------------------------------------------------------------------------------------------------------------------------------------------
  `referral_code`   `string`    The referral code to use.
  `promo_type`      `string`    The type of promotion. May be `first_time_value_off`, `first_time_percent_off`, `always_value_off` or `always_percent_off`. May be set to `null`.
  `promo_value`     `integer`   The value of the promotion. May be `10` or `20`. May be set to `null` if `promo_type` is `null`.

### Request & Response


  Parameter         Type        Description
  ----------------- ----------- ---------------------------
  `referral_code`   `integer`   The referral code to use.

```
GET https://proxy.webshare.io/api/v2/referral/code/info/?referral_code={referral_code}
```


example.py

```
import requests
 
response = requests.get("https://proxy.webshare.io/api/v2/referral/code/info/?referral_code={referral_code}")
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
    "promo_type": "first_time_value_off",
    "promo_value": 10,
    "referral_code": "a8b192klkwncvk",
}
```


::: nx-mt-16
