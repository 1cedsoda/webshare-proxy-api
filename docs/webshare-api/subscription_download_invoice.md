Download invoice


This endpoint returns the invoice as a PDF file.


```
GET https://proxy.webshare.io/api/v2/invoices/download?subscription_transaction_id={subscription_transaction_id}
```


### Parameters


  Key                             Type       Description
  ------------------------------- ---------- --------------------------------------------------------
  `subscription_transaction_id`   `string`   The unique identifier of the subscription transaction.

### Request & Response


download_invoice_pdf.py

```
import requests
 
response = requests.get(
  "https://proxy.webshare.io/api/v2/invoices/download?subscription_transaction_id={subscription_transaction_id}",
  headers={ "Authorization": "Token APIKEY" }
)
```


[][]

The commands above return a PDF file.

::: nx-mt-16
