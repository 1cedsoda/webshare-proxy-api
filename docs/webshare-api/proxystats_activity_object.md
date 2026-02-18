Activity object


# Proxy Activity

A new proxy activity is created for all proxy requests which are successfully authenticated through Webshare Proxy. You can add a query-string parameter `plan_id` in case you want to target a specific plan otherwise it will use the default plan.

## The Proxy Activity Object


  Attributes                  Type       Description
  --------------------------- ---------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `timestamp`                 `string`   The timestamp of the proxy request. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
  `protocol`                  `string`   Indicates the proxy protocol. Can be `http` or `socks`.
  `request_duration`          `number`   Total proxy request duration in seconds.
  `handshake_duration`        `number`   Total duration to authenticate and establish a proxy connection in seconds. You can consider this time as the overhead of proxy connection.
  `tunnel_duration`           `number`   Total duration in seconds the proxy connection stayed active after handshake was completed. May be `null`.
  `error_reason`              `string`   Error reason for the proxy request. May be `null`.
  `error_reason_how_to_fix`   `string`   User-friendly explanation on how to fix this error. May be `null`.
  `auth_username`             `string`   The proxy username used for this proxy request. Only set if `error_reason=no_proxies_allocated`. May be `null`.
  `proxy_address`             `string`   The IP address of the proxy use to access to the target site. For backbone proxy, this address would correspond to assigned IP address. May be `null`. This field is set to `null` if `plan.pool_filter` is `residential`.
  `bytes`                     `number`   Number of bytes consumed by this proxy request. Calculated by summing up all downloaded and uploaded data.
  `client_address`            `string`   The IP address you have used to connect to the proxy server.
  `ip_address`                `string`   The IP address of the target site. May be `null`.
  `hostname`                  `string`   The hostname of the target site. May be `null`.
  `domain`                    `string`   The domain name of the target site. May be `null`.
  `port`                      `number`   The port the target site. May be `null`.
  `proxy_port`                `number`   The source port used to connect to the target site. May be `null`.
  `listen_address`            `string`   The IP address of the proxy server you have connected to. If you have used the Direct Connection mode, this field will be equal
  `listen_port`               `number`   The port of the proxy server you have connected to.

## In JSON format


``` {
  "timestamp": "2022-08-16T15:29:42.517523-07:00",
  "protocol": "http",
  "request_duration": 0.5,
  "handshake_duration": 0.3,
  "tunnel_duration": 0.2,
  "error_reason": "client_connect_forbidden_host",
  "error_reason_how_to_fix": "The target website you are connecting cannot be accessed via Webshare Proxy.",
  "auth_username": null,
  "proxy_address": "192.168.5.1",
  "bytes": 0,
  "client_    address": "10.1.0.1",
  "ip_address": "10.1.0.2",
  "hostname": "ipv4.webshare.io",
  "domain": "webshare.io",
  "port": 443,
  "proxy_port": null,
  "listen_address": "192.168.5.24",
  "listen_port": 6455
}
```


::: nx-mt-16
