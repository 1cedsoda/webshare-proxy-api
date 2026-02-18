Replaced Proxy


# The replaced proxy

List of replaced proxies which can be filtered by proxy replacement or the proxy list. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

### Replaced proxy object


  Parameter                      Type        Description
  ------------------------------ ----------- --------------------------------------------------------------------------------------
  `id`                           `integer`   Unique identified of the replaced proxy instance.
  `reason`                       `string`    The reason this proxy was replaced. You can view all reasons in the table below.
  `proxy`                        `string`    The IP address of the replaced proxy.
  `proxy_port`                   `integer`   The port of the replaced proxy.
  `proxy_country_code`           `string`    Country code in [ISO-3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
  `replaced_with`                `string`    The IP address of the new proxy.
  `replaced_with_port`           `integer`   The port of the new proxy.
  `replaced_with_country_code`   `string`    Country code in [ISO-3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
  `created_at`                   `string`    The timestamp of when this instance was created.

### Replacement reasons


  Reason                          Type       Description
  ------------------------------- ---------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `list_updated`                  `string`   Proxy was removed/added due to change of subscription.
  `proxy_replaced`                `string`   Proxy was replaced manually by the user.
  `auto_invalidated`              `string`   Proxy was auto-replaced due to failing status checks for over 15 minutes. This automated action can be turned off via the [Proxy Config API](/proxy-config).
  `auto_out_of_rotation`          `string`   Proxy was auto-replaced due to moving out of rotation by Webshare admins. This usually indicates that the proxy is not performing at 100%. This automated action can be turned off via the [Proxy Config API](/proxy-config).
  `auto_low_country_confidence`   `string`   Proxy was auto-replaced due to country code change. This automated action can be turned off via the [Proxy Config API](/proxy-config).
  `auto_deleted`                  `string`   The proxy was deleted from the system. This is an automated action and cannot be turned off.
  `auto_site_check`               `string`   The proxy does not pass the site checks any longer. This automated action can be turned off via the [Proxy Config API](/proxy-config).

### In JSON format


replaced_proxy_object_schema.json

``` {
  "id": 93892,
  "reason": "proxy_replaced",
  "proxy": "45.158.184.116",
  "proxy_port": 9192,
  "proxy_country_code": "US",
  "replaced_with": "104.227.101.59",
  "replaced_with_port": 6120,
  "replaced_with_country_code": "US",
  "created_at": "2022-07-26T21:25:13.966946-07:00"
}
```


::: nx-mt-16
