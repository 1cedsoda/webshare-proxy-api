Pricing


# Pricing

This endpoint returns the pricing for a custom plan. This endpoint JSON encodes the entire request in the `query` GET parameter. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

Make sure the GET parameters are also URL encoded (as required by the HTTP standards).

### Parameters

JSON encode all the parameters below into the `query` GET query.


  Parameter                          Type        Description
  ---------------------------------- ----------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `behavior`                         `string`    Can be 3 options. 1) `replace`, (default value) the new purchased plan will replace the old one, this option is only supported for subscriptions with a single plan. 2) `add`, for adding the plan to the subscription. 3) `upgrade`, for upgrading the plan.
  `proxy_type`                       `string`    Category of proxies. Options are: `free`, `shared`, `semidedicated` and `dedicated`.
  `proxy_subtype`                    `string`    Sub category of the proxies. Options are `default`, `premium`, `isp`, `residential` and `datacenter_and_isp`. Not all proxy types have the same sub types.
  `proxy_countries`                  `object`    Number of proxies from each [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). `ZZ` means country is randomly allocated.
  `bandwidth_limit`                  `number`    Bandwidth limit in GBs. `0` means unlimited bandwidth.
  `on_demand_refreshes_total`        `number`    Number of on-demand refreshes purchased as part of this plan.
  `automatic_refresh_frequency`      `number`    Auto-refresh your proxy list every `automatic_refresh_frequency` seconds. `0` value means no automatic refreshes.
  `proxy_replacements_total`         `number`    Individual proxy replacements purchased as part of this plan.
  `subusers_total`                   `number`    Number of subusers allowed in this plan.
  `is_unlimited_ip_authorizations`   `boolean`   Indicates if unlimited number of IP Authorizations can be created. If set to `false`, only 1 IP Authorization ca be created for each account.
  `is_high_concurrency`              `boolean`   Indicates whether high proxy concurrency is enabled for the account.
  `is_high_priority_network`         `boolean`   Indicates whether high proxy priority is enabled for the account.
  `term`                             `string`    Used to determine the amount to charge in the next renewal. Can be `monthly` or `yearly`.
  `required_site_checks`             `array`     List of required site checks so proxies won't be blocked on these websites.
  `required_site_checks`             `array`     List of required site checks so proxies won't be blocked on these websites.
  `with_tax`                         `boolean`   Include tax information (Optional, default false)

### Request & Response


```
GET https://proxy.webshare.io/api/v2/subscription/pricing/?query={json_encoded}
```


or in case of targeting a specific plan


```
GET https://proxy.webshare.io/api/v2/subscription/pricing/?query={json_encoded}&plan_id=<Plan ID>
```


get_pricing.py

```
import requests
import json
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/subscription/pricing/",
    {
        "query": json.dumps(
            {
                "proxy_type": "shared",
                "proxy_subtype": "default",
                "proxy_countries": {"US": 100},
                "bandwidth_limit": 5000,
                "on_demand_refreshes_total": 0,
                "automatic_refresh_frequency": 0,
                "proxy_replacements_total": 0,
                "subusers_total": 3,
                "term": "monthly",
                "is_unlimited_ip_authorizations": False,
                "is_high_concurrency": False,
                "is_high_priority_network": False,
                "with_tax": True,
            }
        )
    },
    headers={"Authorization": "Token APIKEY"}
)
 
response.json()
```


[][]

The commands above return JSON structured like this:


response.json

``` {
    "discount_percentage": 10,
    "non_discounted_price": 15.49,
    "price": 13.94,
    "paid_today": 8.94,
    "credits_added": 0,
    "credits_used": 5,
    "proxy_count_discount_tiers": [
        {
            "from": 0,
            "to": 250,
            "discount_percentage": 0,
            "per_proxy_price": 0.0299
        },
        {
            "from": 250,
            "to": 500,
            "discount_percentage": 5,
            "per_proxy_price": 0.028405
        },
        {
            "from": 500,
            "to": 1000,
            "discount_percentage": 10,
            "per_proxy_price": 0.02691
        },
        {
            "from": 1000,
            "to": 2500,
            "discount_percentage": 15,
            "per_proxy_price": 0.025415
        },
        {
            "from": 2500,
            "to": 5000,
            "discount_percentage": 20,
            "per_proxy_price": 0.02392
        },
        {
            "from": 5000,
            "to": 10000,
            "discount_percentage": 25,
            "per_proxy_price": 0.022425
        },
        {
            "from": 10000,
            "to": 25000,
            "discount_percentage": 30,
            "per_proxy_price": 0.020929999999999997
        },
        {
            "from": 25000,
            "to": null,
            "discount_percentage": 35,
            "per_proxy_price": 0.019435
        }
    ],
    "bandwidth_discount_tiers": [
        {
            "from": 0,
            "to": 250,
            "per_gb_price": 0.0149
        },
        {
            "from": 250,
            "to": 1000,
            "per_gb_price": 0.0068
        },
        {
            "from": 1000,
            "to": 5000,
            "per_gb_price": 0.0039
        },
        {
            "from": 5000,
            "to": null,
            "per_gb_price": null
        }
    ],
    "features": [
        {
            "feature": "is_unlimited_ip_authorizations",
            "is_selected": true,
            "price": 10
        },
        {
            "feature": "is_high_concurrency",
            "is_selected": false,
            "price": 55
        },
        {
            "feature": "is_high_priority_network",
            "is_selected": false,
            "price": 15
        }
    ],
    "tax_breakdown": [
      {
        "amount": "0.54",
        "tax_rate_details":
          {
            "percentage_decimal": "10.00",
            "tax_type": "gst"
          },
        "taxable_amount": "5.40"
      }
    ]
}
```


### Response fields


  Attributes                     Type        Description
  ------------------------------ ----------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `discount_percentage`          `integer`   Percentage of discount applied to the final price.
  `non_discounted_price`         `float`     Original price for the term before any discounts are applied.
  `price`                        `float`     The price after discounts are applied.
  `paid_today`                   `float`     The amount which needs to be paid today. Credits are applied to this price.
  `credits_added`                `float`     Amount of credits added to the plan to make this subscription change. If changing from \$50 plan to \$100 plan, this field will be \$50 (minus any deductions).
  `credits_used`                 `float`     The total credits used to change the subscription.
  `proxy_count_discount_tiers`   `list`      List of discount percentages and per_proxy_price. From is exclusive; to is inclusive. E.g. 250 proxies have 0% discount, 251 proxies have 5% discount. If `to` is set to `null`, include up to infinity.
  `bandwidth_discount_tiers`     `list`      List of per_gb_price. From is exclusive; to is inclusive. E.g. 250 GB has price \$0.0149, 251 GB has price \$0.0068. If `to` is set to `null`, include up to infinity.
  `features`                     `list`      List of features and their prices.
  `tax_breakdown`                `list`      List of tax entries if with_tax was true

::: nx-mt-16
