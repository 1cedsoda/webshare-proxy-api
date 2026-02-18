Logout


# Logout

You can logout to invalidate the token you are using.


```
POST https://proxy.webshare.io/api/v2/logout/
```


### Request & Response


logout.py

```
import requests
 
response = requests.get(
"https://proxy.webshare.io/api/v2/logout/",
headers={ "Authorization": "Token APIKEY" }
)
 
response.json()
 
```


[][]

the above command returns empty response with `204 No Content`


```
HTTP/1.1 204 No Content
```


::: nx-mt-16
