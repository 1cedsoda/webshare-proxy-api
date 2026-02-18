List questions


# List questions

This endpoint returns the questions submited by compliance team in [paginated](/#pagination) format.

### Parameters


  Parameter                 Type        Description
  ------------------------- ----------- -------------------------------------------------------------------------------------------------------------------------------------------------------------
  `flow__type`              `string`    Match only question objects when the verification flow is under a specific type. Can be `acceptable_use_violation`, `abuse_report` or `fraudulent_payment`.
  `flow__state`             `string`    Match only question objects when the verification flow is under a specific state. Can be `inflow`, `successful_verification` or `failed_verification`.
  `answer__isnull`          `string`    Set to `True` to show only questions without answers. Set to `False` to show only question with answers
  `flow__started_at__gte`   `string`    The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the verification flow\'s start date will be greater than this.
  `flow__started_at__lte`   `string`    The [timestamp](https://en.wikipedia.org/wiki/ISO_8601) of the verification flow\'s start date will be less than this.
  `question`                `string`    Match only question objects with the given question.
  `answer__answer`          `boolean`   Match only question objects with the given answer.

### Examples


list-questions.py

```
import requests
 
response = requests.get(
    "https://proxy.webshare.io/api/v2/verification/question/",
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[][]

The commands above return JSON structured like this (If the question doesn\'t have an answer yet the answer field will come as null):


response.json

``` {
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "question": "The question",
      "created_at": "2022-06-14T11:58:10.246406-07:00",
      "updated_at": "2022-06-14T11:58:10.246406-07:00",
      "flow": 2,
      "answer": {
        "id": 1,
        "answer": "The answer submitted by the user",
        "created_at": "2022-06-14T11:58:10.246406-07:00",
        "updated_at": "2022-06-14T11:58:10.246406-07:00",
        "files": [
          {
              "created_at": "2022-06-14T11:58:10.246406-07:00",
              "file": "verificationanswer/evidence",
              "id": 5,
          },
        ],
      }
    },
    ...
  ]
}
```


::: nx-mt-16
