Submit an answer


# Submit answer

This endpoint lets you submit an answer for a verification question with attachments. The encoding for this API must be `multipart/form-data`.

### Parameters


  Parameter       Type       Description
  --------------- ---------- ----------------------------------------------------------------------------------------------------------------
  `Question ID`   `string`   The ID of the question to submit an answer to, this parameter should be a route parameter included in the URL.
  `answer`        `string`   The payload for this endpoint will be a JSON with property \'answer\' which is the answer to the question.
  `files`         `array`    Array of attachments you want to submit with the answer, the attachments are optional.

### Examples


submit-answer.py

```
import requests
 
response = requests.post(
    "https://proxy.webshare.io/api/v2/verification/question/<Question ID>/answer/",
    data={
        "answer":"The answer to the question"
    },
    files={"files":[open("evidence.jpg")]},
    headers={"Authorization": "Token APIKEY"}
)
response.json()
```


[]

The commands above return JSON structured like this:


response.json

``` {
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
```


::: nx-mt-16
