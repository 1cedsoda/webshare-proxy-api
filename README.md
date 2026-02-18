# webshare-proxy-api

A fully-typed TypeScript SDK for the [Webshare Proxy API](https://proxy.webshare.io). Built with Zod for runtime validation, ships as ESM + CJS.

## Installation

```bash
npm install webshare-proxy-api
```

**Requirements:** Node.js 18+ (uses native `fetch`).

## Quick Start

```ts
import { WebshareClient } from "webshare-proxy-api";

const client = new WebshareClient({ apiKey: "YOUR_API_KEY" });

// List proxies
const proxies = await client.proxyList.list({ mode: "direct", page_size: 25 });
console.log(proxies.results);

// Auto-paginate all proxies
for await (const proxy of client.proxyList.listAll({ mode: "direct" })) {
  console.log(proxy.proxy_address, proxy.port);
}

// Get subscription
const sub = await client.subscription.get();
console.log(sub.proxy_count, sub.bandwidth_used);
```

## Client Options

```ts
const client = new WebshareClient({
  apiKey: "YOUR_API_KEY",        // Required
  baseUrl: "https://proxy.webshare.io",  // Optional, default shown
  fetch: customFetch,            // Optional, for testing or older runtimes
  maxRetries: 3,                 // Optional, retries on 429
  retryDelayMs: 1000,            // Optional, initial backoff delay
});
```

## Resources

All resources are available as properties on the client:

| Property | Description |
|---|---|
| `client.apiKeys` | API key CRUD |
| `client.proxyList` | List, download, refresh proxies |
| `client.proxyConfig` | Proxy configuration (v2 + v3) |
| `client.ipAuthorization` | IP authorization CRUD + whatsmyip |
| `client.proxyReplacement` | Replace proxies (v3) + list replaced |
| `client.proxyStats` | Proxy stats + aggregates |
| `client.proxyActivity` | Activity logs + download |
| `client.userProfile` | User profile + preferences |
| `client.subscription` | Current subscription |
| `client.plans` | Plan CRUD + upgrade/cancel |
| `client.pricing` | Pricing + customization + available assets |
| `client.billing` | Billing info, payment methods, transactions, invoices |
| `client.checkout` | Purchase + renew plans |
| `client.notifications` | Notification list/dismiss/restore |
| `client.subUsers` | Sub-user CRUD + refresh + masquerade |
| `client.referral` | Referral config, credits, earn-outs |
| `client.downloads` | Download tokens |
| `client.verification` | Account verification |
| `client.idVerification` | ID verification (Stripe Identity) |
| `client.twoFactorAuth` | 2FA management |

## Examples

### API Keys

```ts
// List
const keys = await client.apiKeys.list();

// Create
const key = await client.apiKeys.create({
  label: "my-server",
  ip_addresses: ["1.2.3.4"],
});

// Update
await client.apiKeys.update(key.id, { label: "new-label" });

// Delete
await client.apiKeys.delete(key.id);
```

### Proxy List

```ts
// List with filters
const proxies = await client.proxyList.list({
  mode: "direct",
  country_code: "US",
  page_size: 100,
});

// Auto-paginate
for await (const proxy of client.proxyList.listAll({ mode: "direct" })) {
  console.log(`${proxy.proxy_address}:${proxy.port}`);
}

// Download as text
const text = await client.proxyList.download({
  token: "your-download-token",
  format: "txt_ip_port",
});
```

### Proxy Config

```ts
// Get config
const config = await client.proxyConfig.get();

// Update
await client.proxyConfig.update({
  auto_replace_invalid_proxies: true,
  countries: { US: 10, GB: 5 },
});

// V3 endpoints
const stats = await client.proxyConfig.getStats(planId);
const status = await client.proxyConfig.getStatus(planId);
```

### IP Authorization

```ts
// Add your IP
const myIp = await client.ipAuthorization.whatsMyIp();
await client.ipAuthorization.create({ ip_address: myIp.ip_address });

// List authorized IPs
const ips = await client.ipAuthorization.list();
```

### Proxy Replacement

```ts
// Replace specific IPs with proxies from a country
const replacement = await client.proxyReplacement.create({
  to_replace: { type: "ip_address", ip_addresses: ["1.2.3.4"] },
  replace_with: [{ type: "country", country_codes: ["US"] }],
  dry_run: false,
});

// List replaced proxies
const replaced = await client.proxyReplacement.listReplaced();
```

### Sub-User Masquerading

```ts
// Create a client that acts as a sub-user
const subClient = client.withSubUser(42);
const subConfig = await subClient.proxyConfig.get();
const subProxies = await subClient.proxyList.list();
```

### Billing & Invoices

```ts
// Get billing info
const billing = await client.billing.getBillingInfo();

// List transactions
const txns = await client.billing.listTransactions();

// Download invoice PDF
const pdf = await client.billing.downloadInvoice(txns.results[0].id);
```

## Error Handling

All API errors are thrown as typed error classes:

```ts
import {
  WebshareBadRequestError,
  WebshareUnauthorizedError,
  WebshareForbiddenError,
  WebshareNotFoundError,
  WebshareRateLimitError,
  WebshareServerError,
} from "webshare-proxy-api";

try {
  await client.apiKeys.retrieve(99999);
} catch (err) {
  if (err instanceof WebshareNotFoundError) {
    console.log("Key not found");
  } else if (err instanceof WebshareForbiddenError && err.is2FARequired) {
    console.log("2FA required");
  } else if (err instanceof WebshareRateLimitError) {
    console.log(`Rate limited, retry after ${err.retryAfterMs}ms`);
  }
}
```

Rate limit errors (429) are automatically retried with exponential backoff (configurable via `maxRetries` and `retryDelayMs`).

## Zod Schemas

All Zod schemas are exported for your own validation needs:

```ts
import { ProxySchema, ApiKeySchema } from "webshare-proxy-api";

// Use in your own validation
const proxy = ProxySchema.parse(someData);

// Get the TypeScript type
import type { Proxy, ApiKey } from "webshare-proxy-api";
```

## Auto-Pagination

All `list` methods that return paginated results also have a `listAll` variant that returns an `AsyncIterable`:

```ts
// Fetches all pages automatically
for await (const proxy of client.proxyList.listAll({ mode: "direct" })) {
  console.log(proxy.proxy_address);
}

// Collect into array
const allKeys = [];
for await (const key of client.apiKeys.listAll()) {
  allKeys.push(key);
}
```

## License

MIT
