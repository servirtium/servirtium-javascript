## Interaction 0: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: GET
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: content-type, fulltitle
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:15 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 1: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com the pre-requisites the api root responds to a GET (i.e. the server is up and accessible, CORS headers are set up)
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 367
date: Sun, 23 Oct 2022 04:26:16 GMT
```

### Response body recorded for playback (200: application/json):

```
[{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666498955.853535574","title":"blah","completed":false,"order":523},{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666498957.83879454","title":"blah","completed":false,"order":95},{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666498961.895062193","title":"blah","completed":false,"order":95}]
```


## Interaction 2: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com the pre-requisites the api root responds to a POST with the todo which was posted to it
content-length: 18
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 125
date: Sun, 23 Oct 2022 04:26:17 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499177.685343390","title":"a todo","completed":false,"order":null}
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
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com the pre-requisites the api root responds successfully to a DELETE
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:18 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 4: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:19 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 5: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:21 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 6: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: DELETE
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:22 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 7: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:23 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 8: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url adds a new todo to the list of todos at the root url
content-length: 24
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 130
date: Sun, 23 Oct 2022 04:26:25 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499185.79981154","title":"walk the dog","completed":false,"order":null}
```


## Interaction 9: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 132
date: Sun, 23 Oct 2022 04:26:26 GMT
```

### Response body recorded for playback (200: application/json):

```
[{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499185.79981154","title":"walk the dog","completed":false,"order":null}]
```


## Interaction 10: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:28 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 11: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: POST
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:29 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

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
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url sets up a new todo as initially not completed
content-length: 16
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 122
date: Sun, 23 Oct 2022 04:26:31 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499191.33506971","title":"blah","completed":false,"order":null}
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
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 124
date: Sun, 23 Oct 2022 04:26:32 GMT
```

### Response body recorded for playback (200: application/json):

```
[{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499191.33506971","title":"blah","completed":false,"order":null}]
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
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:33 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
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
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url each new todo has a url
content-length: 16
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 123
date: Sun, 23 Oct 2022 04:26:35 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499195.379903872","title":"blah","completed":false,"order":null}
```


## Interaction 16: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: GET
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:36 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 17: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url each new todo has a url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 125
date: Sun, 23 Oct 2022 04:26:37 GMT
```

### Response body recorded for playback (200: application/json):

```
[{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499195.379903872","title":"blah","completed":false,"order":null}]
```


## Interaction 18: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url each new todo has a url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:39 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 19: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url each new todo has a url, which returns a todo
content-length: 19
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 126
date: Sun, 23 Oct 2022 04:26:40 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499200.286513932","title":"my todo","completed":false,"order":null}
```


## Interaction 20: OPTIONS /1666499200.286513932
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: GET
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:41 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 21: GET /1666499200.286513932
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url each new todo has a url, which returns a todo
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 126
date: Sun, 23 Oct 2022 04:26:42 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499200.286513932","title":"my todo","completed":false,"order":null}
```


## Interaction 22: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: DELETE
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:43 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 23: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com storing new todos by posting to the root url each new todo has a url, which returns a todo
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:45 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 24: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can navigate from a list of todos to an individual todo via urls
content-length: 27
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 133
date: Sun, 23 Oct 2022 04:26:46 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499206.430319284","title":"todo the first","completed":false,"order":null}
```


## Interaction 25: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can navigate from a list of todos to an individual todo via urls
content-length: 27
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 134
date: Sun, 23 Oct 2022 04:26:46 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499206.430448869","title":"todo the second","completed":false,"order":null}
```


## Interaction 26: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 270
date: Sun, 23 Oct 2022 04:26:47 GMT
```

### Response body recorded for playback (200: application/json):

```
[{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499206.430319284","title":"todo the first","completed":false,"order":null},{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499206.430448869","title":"todo the second","completed":false,"order":null}]
```


## Interaction 27: OPTIONS /1666499206.430319284
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: GET
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:48 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 28: GET /1666499206.430319284
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 133
date: Sun, 23 Oct 2022 04:26:49 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499206.430319284","title":"todo the first","completed":false,"order":null}
```


## Interaction 29: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: DELETE
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:51 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 30: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:52 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 31: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can change the todo's title by PATCHing to the todo's url
content-length: 25
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 132
date: Sun, 23 Oct 2022 04:26:53 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499213.598215157","title":"initial title","completed":false,"order":null}
```


## Interaction 32: OPTIONS /1666499213.598215157
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: PATCH
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: content-type, fulltitle
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:54 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 33: PATCH /1666499213.598215157
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can change the todo's title by PATCHing to the todo's url
content-length: 25
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"bathe the cat"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 132
date: Sun, 23 Oct 2022 04:26:55 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499213.598215157","title":"bathe the cat","completed":false,"order":null}
```


## Interaction 34: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can change the todo's title by PATCHing to the todo's url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"bathe the cat"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:26:57 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 35: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: POST
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"bathe the cat"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: content-type, fulltitle
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:26:58 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 36: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can change the todo's completedness by PATCHing to the todo's url
content-length: 16
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 123
date: Sun, 23 Oct 2022 04:26:59 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499219.433894290","title":"blah","completed":false,"order":null}
```


## Interaction 37: OPTIONS /1666499219.433894290
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: PATCH
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:00 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 38: PATCH /1666499219.433894290
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can change the todo's completedness by PATCHing to the todo's url
content-length: 18
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"completed":true}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 122
date: Sun, 23 Oct 2022 04:27:01 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499219.433894290","title":"blah","completed":true,"order":null}
```


## Interaction 39: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can change the todo's completedness by PATCHing to the todo's url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"completed":true}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:27:02 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 40: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
content-length: 16
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 123
date: Sun, 23 Oct 2022 04:27:04 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499224.248147677","title":"blah","completed":false,"order":null}
```


## Interaction 41: OPTIONS /1666499224.248147677
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: PATCH
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:05 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 42: PATCH /1666499224.248147677
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
content-length: 42
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 131
date: Sun, 23 Oct 2022 04:27:07 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499224.248147677","title":"changed title","completed":true,"order":null}
```


## Interaction 43: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: GET
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 131
date: Sun, 23 Oct 2022 04:27:09 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499224.248147677","title":"changed title","completed":true,"order":null}
```


## Interaction 44: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: GET
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:09 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 45: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 133
date: Sun, 23 Oct 2022 04:27:11 GMT
```

### Response body recorded for playback (200: application/json):

```
[{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499224.248147677","title":"changed title","completed":true,"order":null}]
```


## Interaction 46: DELETE /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:27:12 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 47: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can delete a todo making a DELETE request to the todo's url
content-length: 16
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 123
date: Sun, 23 Oct 2022 04:27:13 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499233.465549098","title":"blah","completed":false,"order":null}
```


## Interaction 48: OPTIONS /1666499233.465549098
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: DELETE
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:14 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 49: DELETE /1666499233.465549098
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can delete a todo making a DELETE request to the todo's url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:15 GMT
```

### Response body recorded for playback (200: ):

```

```


## Interaction 50: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: GET
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:17 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 51: GET /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com working with an existing todo can delete a todo making a DELETE request to the todo's url
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 2
date: Sun, 23 Oct 2022 04:27:18 GMT
```

### Response body recorded for playback (200: application/json):

```
[]
```


## Interaction 52: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com tracking todo order can create a todo with an order field
content-length: 28
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah","order":523}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 122
date: Sun, 23 Oct 2022 04:27:19 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499239.431877710","title":"blah","completed":false,"order":523}
```


## Interaction 53: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com tracking todo order can PATCH a todo to change its order
content-length: 27
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 121
date: Sun, 23 Oct 2022 04:27:20 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499240.630309472","title":"blah","completed":false,"order":10}
```


## Interaction 54: OPTIONS /1666499240.630309472
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: PATCH
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: content-type, fulltitle
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:21 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 55: PATCH /1666499240.630309472
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com tracking todo order can PATCH a todo to change its order
content-length: 12
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 121
date: Sun, 23 Oct 2022 04:27:23 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499240.630309472","title":"blah","completed":false,"order":95}
```


## Interaction 56: OPTIONS /
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: POST
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: content-type, fulltitle
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:24 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 57: POST /
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com tracking todo order remembers changes to a todo's order
content-length: 27
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 121
date: Sun, 23 Oct 2022 04:27:25 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499245.342805167","title":"blah","completed":false,"order":10}
```


## Interaction 58: OPTIONS /1666499245.342805167
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-site: cross-site
sec-fetch-mode: cors
user-agent: Chrome under Selenium control
origin: https://servirtium.github.io
access-control-request-private-network: true
access-control-request-headers: content-type,fulltitle
access-control-request-method: PATCH
accept: */*
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
connection: close
content-type: text/html; charset=utf-8
access-control-allow-origin: https://servirtium.github.io
access-control-allow-headers: fulltitle, content-type
access-control-allow-methods: PUT, GET, OPTIONS, DELETE, HEAD, POST, PATCH
vary: Origin
content-length: 0
date: Sun, 23 Oct 2022 04:27:26 GMT
```

### Response body recorded for playback (204: text/html; charset=utf-8):

```

```


## Interaction 59: PATCH /1666499245.342805167
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com tracking todo order remembers changes to a todo's order
content-length: 12
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 121
date: Sun, 23 Oct 2022 04:27:27 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499245.342805167","title":"blah","completed":false,"order":95}
```


## Interaction 60: GET /1666499245.342805167
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
sec-ch-ua-platform: "macOS"
user-agent: Chrome under Selenium control
sec-ch-ua-mobile: ?0
sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
content-type: application/json
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-rocket-rust.herokuapp.com tracking todo order remembers changes to a todo's order
connection: close
host: todo-backend-rocket-rust.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
connection: close
content-type: application/json
access-control-allow-origin: https://servirtium.github.io
vary: Origin
content-length: 121
date: Sun, 23 Oct 2022 04:27:29 GMT
```

### Response body recorded for playback (200: application/json):

```
{"url":"https://todo-backend-rocket-rust.herokuapp.com/1666499245.342805167","title":"blah","completed":false,"order":95}
```
