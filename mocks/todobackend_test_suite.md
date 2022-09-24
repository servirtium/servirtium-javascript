## Interaction 0: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 the pre-requisites the api root responds to a GET (i.e. the server is up and accessible, CORS headers are set up)
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 2
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:06 GMT
```

### Response body recorded for playback (200: application/json; charset=utf-8):

```
[]
```


## Interaction 1: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 the pre-requisites the api root responds to a POST with the todo which was posted to it
content-length: 18
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 157
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:06 GMT
```

### Response body recorded for playback (201: application/json; charset=utf-8):

```
{"id":"5dceb4c2-b206-4ad3-a2fb-f86cd7a5f52b","url":"http://localhost:8000/5dceb4c2-b206-4ad3-a2fb-f86cd7a5f52b","title":"a todo","order":0,"completed":false}
```


## Interaction 2: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 the pre-requisites the api root responds successfully to a DELETE
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:06 GMT
```

### Response body recorded for playback (204: application/json; charset=utf-8):

```

```


## Interaction 3: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (204: application/json; charset=utf-8):

```

```


## Interaction 4: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 2
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (200: application/json; charset=utf-8):

```
[]
```


## Interaction 5: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (204: application/json; charset=utf-8):

```

```


## Interaction 6: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url adds a new todo to the list of todos at the root url
content-length: 24
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 163
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (201: application/json; charset=utf-8):

```
{"id":"b42d7432-64c4-4598-b1cf-948ef342be38","url":"http://localhost:8000/b42d7432-64c4-4598-b1cf-948ef342be38","title":"walk the dog","order":0,"completed":false}
```


## Interaction 7: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 165
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (200: application/json; charset=utf-8):

```
[{"id":"b42d7432-64c4-4598-b1cf-948ef342be38","url":"http://localhost:8000/b42d7432-64c4-4598-b1cf-948ef342be38","title":"walk the dog","order":0,"completed":false}]
```


## Interaction 8: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (204: application/json; charset=utf-8):

```

```


## Interaction 9: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url sets up a new todo as initially not completed
content-length: 16
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 155
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (201: application/json; charset=utf-8):

```
{"id":"fdaca75b-2482-4b4d-96dd-971c6807302d","url":"http://localhost:8000/fdaca75b-2482-4b4d-96dd-971c6807302d","title":"blah","order":0,"completed":false}
```


## Interaction 10: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 157
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (200: application/json; charset=utf-8):

```
[{"id":"fdaca75b-2482-4b4d-96dd-971c6807302d","url":"http://localhost:8000/fdaca75b-2482-4b4d-96dd-971c6807302d","title":"blah","order":0,"completed":false}]
```


## Interaction 11: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (204: application/json; charset=utf-8):

```

```


## Interaction 12: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url each new todo has a url
content-length: 16
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 155
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (201: application/json; charset=utf-8):

```
{"id":"6658ecbd-ff1d-4430-b4aa-d0f7048057e3","url":"http://localhost:8000/6658ecbd-ff1d-4430-b4aa-d0f7048057e3","title":"blah","order":0,"completed":false}
```


## Interaction 13: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url each new todo has a url
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 157
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (200: application/json; charset=utf-8):

```
[{"id":"6658ecbd-ff1d-4430-b4aa-d0f7048057e3","url":"http://localhost:8000/6658ecbd-ff1d-4430-b4aa-d0f7048057e3","title":"blah","order":0,"completed":false}]
```


## Interaction 14: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url each new todo has a url
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (204: application/json; charset=utf-8):

```

```


## Interaction 15: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
sec-ch-ua-platform: "macOS"
sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://localhost:54321 storing new todos by posting to the root url each new todo has a url, which returns a todo
content-length: 19
connection: close
host: localhost:54321
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: *
access-control-allow-headers: content-type
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
content-length: 158
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS, TRACE, PATCH, PURGE, HEAD
date: Sat, 24 Sep 2022 13:13:07 GMT
```

### Response body recorded for playback (201: application/json; charset=utf-8):

```
{"id":"d9534b81-32b0-47d4-abf5-dd019c5d8770","url":"http://localhost:8000/d9534b81-32b0-47d4-abf5-dd019c5d8770","title":"my todo","order":0,"completed":false}
```
