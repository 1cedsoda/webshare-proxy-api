View suspension


# View Suspension

This endpoint lets you view when your account was suspended and a reason for suspesnion.

This endpoint can be called even if your user is suspended.

### Examples


```
GET https://proxy.webshare.io/api/v2/verification/suspension/
```


verification-suspension.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/verification/suspension/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[]

response.json

``` {
  "created_at": "2022-06-14T11:58:10.246406-07:00",
  "reason": "acceptable_use_violation"
}
```


### Possible reasons


  Reason                       Description                                          
  ---------------------------- ---------------------------------------------------- --
  `acceptable_use_violation`   `The user has violated the acceptable use policy.`   
  `abuse_report`               `This user has been reported for abuse.`             
  `fraudulent_payment`         `This user has used fraudulent payments.`            

::: nx-mt-16
