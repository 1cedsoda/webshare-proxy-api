Proxy Configuration


# Proxy Configuration

### The proxy config object

You can use the API to retrieve information about your proxy configuration.


  Attributes                                      Type        Description
  ----------------------------------------------- ----------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `id`                                            `integer`   Unique identifier of the proxy configuration instance.
  `state`                                         `string`    Indicates whether a proxy list is ready to use or not. Values can be `pending`, `processing` or `completed`.
  `countries`                                     `object`    Proxy countries by count in the proxy list. Cannot be edited.
  `available_countries`                           `object`    Proxy countries by count available (not in the current proxy list). This field is useful when listing which countries are available when replacing proxies. Cannot be edited.
  `unallocated_countries`                         `object`    Unallocated proxy countries by count. A proxy becomes unallocated if the Plan object requested for a specific country but that country was not available to be allocated for the Proxy List.
  `ip_ranges_24`                                  `object`    IP ranges in /24 subnet by count in the proxy list. Format is CIDR:count. Cannot be edited. This field is an empty dictionary if `plan.pool_filter` is `residential`.
  `ip_ranges_16`                                  `object`    IP ranges in /16 subnet by count in the proxy list. Format is CIDR:count. Cannot be edited. This field is an empty dictionary if `plan.pool_filter` is `residential`.
  `ip_ranges_8`                                   `object`    IP ranges in /8 subnet by count in the proxy list. Format is CIDR:count. Cannot be edited. This field is an empty dictionary if `plan.pool_filter` is `residential`.
  `available_ip_ranges_24`                        `object`    IP ranges in /24 subnet by count available (not in the current proxy list). This field is useful when listing which IP ranges are available when replacing proxies. Format is CIDR:count. Cannot be edited. This field is an empty dictionary if `plan.pool_filter` is `residential`.
  `available_ip_ranges_16`                        `object`    IP ranges in /16 subnet by count available (not in the current proxy list). This field is useful when listing which IP ranges are available when replacing proxies. Format is CIDR:count. Cannot be edited. This field is an empty dictionary if `plan.pool_filter` is `residential`.
  `available_ip_ranges_8`                         `object`    IP ranges in /8 subnet by count available (not in the current proxy list
  `asns`                                          `object`    List of ASNs in {asn_number: (asn_name, count)} format. Cannot be edited. This field is an empty dictionary if `plan.pool_filter` is `residential`.
  `available_asns`                                `object`    List of ASNs in {asn_number: (asn_name, count)} format. Cannot be edited. This field is an empty dictionary if `plan.pool_filter` is `residential`.
  `username`                                      `string`    Proxy username. Must be between 8-32 characters, alphanumeric.
  `password`                                      `string`    Proxy password. Must be between 8-32 characters, alphanumeric. Cannot be too common password. Cannot be too similar to proxy username.
  `request_timeout`                               `integer`   Maximum number of seconds a proxy request can be used. Min value is 15 seconds. Max value is 7 days.
  `request_idle_timeout`                          `integer`   Maximum number of seconds a proxy request can stay idle (no data sent). Min value is 15 seconds. Max value is 2 hours.
  `ip_authorization_country_codes`                `object`    The list of country codes the proxy should server for IP Authorization in Backbone Connection mode. If set to `null`, all countries are available.
  `auto_replace_invalid_proxies`                  `boolean`   Auto-replace proxies from the proxy list if they are invalid for 15 minutes. Cannot be edited for free proxy plans.
  `auto_replace_low_country_confidence_proxies`   `boolean`   Auto-replace proxies from the proxy list if they have low country confidence. Cannot be edited for free proxy plans.
  `auto_replace_out_of_rotation_proxies`          `boolean`   Auto-replace proxies from the proxy list if they are performing slower than usual.
  `auto_replace_failed_site_check_proxies`        `boolean`   Auto-replace proxies if the proxy does not pass site-checks any longer.
  `proxy_list_download_token`                     `string`    Alpha-numeric randomly generated token used for proxy list download links.
  `is_proxy_used`                                 `boolean`   Indicates whether a proxy has been used.
  `created_at`                                    `string`    The timestamp of when this instance was created.
  `updated_at`                                    `string`    The timestamp when this instance was last updated.

### In JSON format


``` {
  "id": 1,
  "state": "completed",
  "countries": {"US": 5, "FR": 100},
  "available_countries": {"US": 95},
  "unallocated_countries": {},
  "ip_ranges_24": {"10.1.1.0/24": 5, "10.1.3.0/24": 100},
  "ip_ranges_16": {"10.1.0.0/16": 105},
  "ip_ranges_8": {"10.0.0.0/8": 105},
  "available_ip_ranges_24": {"1.2.3.0/24": 100},
  "available_ip_ranges_16": {"1.2.0.0/16": 100},
  "available_ip_ranges_8": {"1.0.0.0/8": 100},
  "asns": {"6137": ["ASN NAME", 105]},
  "available_asns": {"9421": ["ASN NAME", 105]},
  "username": "username",
  "password": "password",
  "request_timeout": 86400,
  "request_idle_timeout": 900,
  "ip_authorization_country_codes": ["US", "FR"],
  "auto_replace_invalid_proxies": true,
  "auto_replace_low_country_confidence_proxies": false,
  "auto_replace_out_of_rotation_proxies": false,
  "auto_replace_failed_site_check_proxies": false,
  "proxy_list_download_token": "aa87abbc...zz",
  "is_proxy_used": false,
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "updated_at": "2022-06-14T11:58:10.246406-07:00"
}
```


::: nx-mt-16
