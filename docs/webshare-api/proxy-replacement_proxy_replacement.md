Proxy Replacement


### Proxy replacement

Set of rules indicating which proxies to replace from and replace with in a proxy list. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

# The proxy replacement object

### Parameters


  Attributes               Type                     Description
  ------------------------ ------------------------ -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                     `number`                 Unique identified of the proxy replacement instance.
  `to_replace`             `dictionary`             Dictionary indicating which proxies to replace. Complete field definition can be found below.
  `replace_with`           `list of dictionaries`   List of dictionaries indicating which proxies to replace with. Complete field definition can be found below. Availability can be retrieved using 
  `dry_run`                `boolean`                You can dry-run a replacement to learn number of proxies removed/added prior to actually replacing the proxy list. `dry_run=True` does not modify the proxy list.
  `state`                  `string`                 The current state of the proxy replacement can be: `validating`, `validated`, `processing`, `completed` and `failed`. If failed, error_code and error will have values to describe the error.
  `proxies_removed`        `number`                 Number of proxies removed from the proxy list.
  `proxies_added`          `number`                 Number of proxies added to the proxy list.
  `reason`                 `string`                 The reason proxies were replaced. You can view all reasons in the table below. Manually creating a replacement sets the reason as `proxy_replaced`.
  `error_code`             `string`                 The error code.
  `error`                  `string`                 The error message.
  `created_at`             `string`                 The timestamp of when this instance was created.
  `dry_run_completed_at`   `string`                 The timestamp of when this instance state became `validated`. May be `null`.
  `completed_at`           `string`                 The timestamp of when this instance state became `completed`. May be `null`.

### Replacement reasons


  Reason                          Type       Description
  ------------------------------- ---------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `list_updated`                  `string`   Proxy was removed/added due to change of subscription.
  `proxy_replaced`                `string`   Proxy was replaced manually by the user.
  `auto_invalidated`              `string`   Proxy was auto-replaced due to failing status checks for over 15 minutes. This automated action can be turned off via the [Proxy Config API](/proxy-config).
  `auto_out_of_rotation`          `string`   Proxy was auto-replaced due to moving out of rotation by Webshare admins. This usually indicates that the proxy is not performing at 100%. This automated action can be turned off via the [Proxy Config API](/proxy-config).
  `auto_low_country_confidence`   `string`   Proxy was auto-replaced due to country code change. This automated action can be turned off via the [Proxy Config API](/proxy-config).
  `auto_deleted`                  `string`   The proxy was deleted from the system. This is an automated action and cannot be turned off.

### In JSON Format


replacement_object.json

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


## Replacement Definitions

There are 3 types of value for `to_replace` \| `replace_with` fields. a `replace_with` may be a list of dictionaries/types as we may not have enough replacements from one country.

For example, if we want to replace 10 US proxies with 5 French and 5 Turkish, you can use the fields as follows:


```
## To Replace
to_replace: { type: "country", country_code: "US", count: 10 }
 
## Replace with
replace_with: [
    { type: "country", country_code: "FR", count: 5 },
    { type: "country", country_code: "TR", count: 5 }
]
```


### Type: IP range


```
type=ip_range
```


  Attributes    Type       Description
  ------------- ---------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `type`        `string`   Set to `ip_range`. Indicates which proxy IP addresses to replace or replace with.
  `ip_ranges`   `list`     List of IP ranges in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing), e.g. 10.0.0.0/8. Host bits may not be set. For example, 10.0.0.1/24 is invalid. However, 10.0.0.0/24 is valid.
  `count`       `number`   Number of proxies to replace with.

### Type: IP address


```
type=ip_address
```


  Attributes       Type       Description
  ---------------- ---------- ---------------------------------------------------------------------------------------------------------------
  `type`           `string`   Set to `ip_address`. Indicates which proxy IP addresses to replace. Cannot be used with `replace_with` field.
  `ip_addresses`   `list`     List of IP addresses (without the CIDR notation). For example \[\'1.0.0.1\', \'1.0.0.2\'\].
  `count`          `number`   Number of proxies to replace.

### Type: ASN


```
type=asn
```


  Attributes      Type       Description
  --------------- ---------- ---------------------------------------------------------------------
  `type`          `string`   Set to `asn`. Indicates which proxy ASN number to replace.
  `asn_numbers`   `list`     List of ASN numbers (strings). For example \[\'7631\', \'11964\'\].
  `count`         `number`   Number of proxies to replace.

### Type: Country


```
type=country
```


  Attributes       Type       Description
  ---------------- ---------- --------------------------------------------------------------------------------------
  `type`           `string`   Set to `country`. Indicates which proxy countries to replace or replace with.
  `country_code`   `string`   Country code in [ISO-3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
  `count`          `number`   Number of proxies to replace with.

### Type: Any


```
type=any
```


  Attributes   Type       Description
  ------------ ---------- ------------------------------------------------------
  `type`       `string`   Set to `any`. Only used in the `replace_with` field.
  `count`      `number`   Number of proxies to replace with.

::: nx-mt-16
