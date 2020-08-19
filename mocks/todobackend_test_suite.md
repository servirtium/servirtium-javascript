## Interaction 0: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:22 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 562
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"775aaf13-9f4b-4dc5-acb3-7d14fa2626d8","title":"blah","order":523,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/775aaf13-9f4b-4dc5-acb3-7d14fa2626d8","url":"https://todo-backend-sinatra.herokuapp.com/todos/775aaf13-9f4b-4dc5-acb3-7d14fa2626d8"},{"uid":"663ffd81-d316-4735-8774-4701ada04b7a","title":"blah","order":10,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/663ffd81-d316-4735-8774-4701ada04b7a","url":"https://todo-backend-sinatra.herokuapp.com/todos/663ffd81-d316-4735-8774-4701ada04b7a"}]
```


## Interaction 1: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 18
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:24 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/4740276e-b303-410d-b587-0df13a8b33a9
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"4740276e-b303-410d-b587-0df13a8b33a9","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/4740276e-b303-410d-b587-0df13a8b33a9","url":"https://todo-backend-sinatra.herokuapp.com/todos/4740276e-b303-410d-b587-0df13a8b33a9"}
```


## Interaction 2: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:25 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 3: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:27 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 4: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:27 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[]
```


## Interaction 5: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:29 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 6: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 24
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:30 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/6eaf642b-a089-48bf-bb20-d8823c5d2565
content-length: 276
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"walk the dog","uid":"6eaf642b-a089-48bf-bb20-d8823c5d2565","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/6eaf642b-a089-48bf-bb20-d8823c5d2565","url":"https://todo-backend-sinatra.herokuapp.com/todos/6eaf642b-a089-48bf-bb20-d8823c5d2565"}
```


## Interaction 7: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:30 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"6eaf642b-a089-48bf-bb20-d8823c5d2565","title":"walk the dog","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/6eaf642b-a089-48bf-bb20-d8823c5d2565","url":"https://todo-backend-sinatra.herokuapp.com/todos/6eaf642b-a089-48bf-bb20-d8823c5d2565"}]
```


## Interaction 8: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:32 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 9: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:33 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/2fccd42b-01b5-4c00-9c23-43e42e7e24b0
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"2fccd42b-01b5-4c00-9c23-43e42e7e24b0","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/2fccd42b-01b5-4c00-9c23-43e42e7e24b0","url":"https://todo-backend-sinatra.herokuapp.com/todos/2fccd42b-01b5-4c00-9c23-43e42e7e24b0"}
```


## Interaction 10: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:34 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"2fccd42b-01b5-4c00-9c23-43e42e7e24b0","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/2fccd42b-01b5-4c00-9c23-43e42e7e24b0","url":"https://todo-backend-sinatra.herokuapp.com/todos/2fccd42b-01b5-4c00-9c23-43e42e7e24b0"}]
```


## Interaction 11: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:36 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 12: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:37 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/773cde3b-ec48-45eb-b74e-c457d8da5b62
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"773cde3b-ec48-45eb-b74e-c457d8da5b62","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/773cde3b-ec48-45eb-b74e-c457d8da5b62","url":"https://todo-backend-sinatra.herokuapp.com/todos/773cde3b-ec48-45eb-b74e-c457d8da5b62"}
```


## Interaction 13: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:38 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"773cde3b-ec48-45eb-b74e-c457d8da5b62","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/773cde3b-ec48-45eb-b74e-c457d8da5b62","url":"https://todo-backend-sinatra.herokuapp.com/todos/773cde3b-ec48-45eb-b74e-c457d8da5b62"}]
```


## Interaction 14: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:40 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 15: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 19
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:41 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/e3f0e492-e74d-4fd9-bad2-57cc36c18bcb
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"e3f0e492-e74d-4fd9-bad2-57cc36c18bcb","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/e3f0e492-e74d-4fd9-bad2-57cc36c18bcb","url":"https://todo-backend-sinatra.herokuapp.com/todos/e3f0e492-e74d-4fd9-bad2-57cc36c18bcb"}
```


## Interaction 16: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:44 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 17: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:44 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/d2bfdc25-22cd-4bb0-aa59-42f11bdbaeeb
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"d2bfdc25-22cd-4bb0-aa59-42f11bdbaeeb","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/d2bfdc25-22cd-4bb0-aa59-42f11bdbaeeb","url":"https://todo-backend-sinatra.herokuapp.com/todos/d2bfdc25-22cd-4bb0-aa59-42f11bdbaeeb"}
```


## Interaction 18: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:45 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/42292f4a-e5a4-4f19-99df-2caa0dc6c8a9
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"42292f4a-e5a4-4f19-99df-2caa0dc6c8a9","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/42292f4a-e5a4-4f19-99df-2caa0dc6c8a9","url":"https://todo-backend-sinatra.herokuapp.com/todos/42292f4a-e5a4-4f19-99df-2caa0dc6c8a9"}
```


## Interaction 19: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:45 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 580
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"d2bfdc25-22cd-4bb0-aa59-42f11bdbaeeb","title":"todo the second","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/d2bfdc25-22cd-4bb0-aa59-42f11bdbaeeb","url":"https://todo-backend-sinatra.herokuapp.com/todos/d2bfdc25-22cd-4bb0-aa59-42f11bdbaeeb"},{"uid":"42292f4a-e5a4-4f19-99df-2caa0dc6c8a9","title":"todo the first","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/42292f4a-e5a4-4f19-99df-2caa0dc6c8a9","url":"https://todo-backend-sinatra.herokuapp.com/todos/42292f4a-e5a4-4f19-99df-2caa0dc6c8a9"}]
```


## Interaction 20: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:48 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 21: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 25
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:50 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/4a1fbf88-6ae5-45b9-b4f7-87e64f72f039
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"4a1fbf88-6ae5-45b9-b4f7-87e64f72f039","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/4a1fbf88-6ae5-45b9-b4f7-87e64f72f039","url":"https://todo-backend-sinatra.herokuapp.com/todos/4a1fbf88-6ae5-45b9-b4f7-87e64f72f039"}
```


## Interaction 22: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:52 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 23: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:54 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/237f970f-d789-448c-86dd-e4a47f66343c
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"237f970f-d789-448c-86dd-e4a47f66343c","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/237f970f-d789-448c-86dd-e4a47f66343c","url":"https://todo-backend-sinatra.herokuapp.com/todos/237f970f-d789-448c-86dd-e4a47f66343c"}
```


## Interaction 24: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:57 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 25: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:58:59 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/963ab640-ceac-41b8-8f54-7ff5a76f1bce
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"963ab640-ceac-41b8-8f54-7ff5a76f1bce","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/963ab640-ceac-41b8-8f54-7ff5a76f1bce","url":"https://todo-backend-sinatra.herokuapp.com/todos/963ab640-ceac-41b8-8f54-7ff5a76f1bce"}
```


## Interaction 26: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:59:01 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"963ab640-ceac-41b8-8f54-7ff5a76f1bce","title":"changed title","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/963ab640-ceac-41b8-8f54-7ff5a76f1bce","url":"https://todo-backend-sinatra.herokuapp.com/todos/963ab640-ceac-41b8-8f54-7ff5a76f1bce"}]
```


## Interaction 27: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:59:04 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 28: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:59:05 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/f374730f-249c-40fc-a720-bab3306d4765
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"f374730f-249c-40fc-a720-bab3306d4765","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/f374730f-249c-40fc-a720-bab3306d4765","url":"https://todo-backend-sinatra.herokuapp.com/todos/f374730f-249c-40fc-a720-bab3306d4765"}
```


## Interaction 29: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:59:07 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[]
```


## Interaction 30: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 28
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah","order":523}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:59:09 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/51777c3c-d3d9-4524-a688-f3b4bc7956c7
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"51777c3c-d3d9-4524-a688-f3b4bc7956c7","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/51777c3c-d3d9-4524-a688-f3b4bc7956c7","url":"https://todo-backend-sinatra.herokuapp.com/todos/51777c3c-d3d9-4524-a688-f3b4bc7956c7"}
```


## Interaction 31: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:59:11 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/ec459fb3-f403-46bf-8e53-557e34e291b4
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"ec459fb3-f403-46bf-8e53-557e34e291b4","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/ec459fb3-f403-46bf-8e53-557e34e291b4","url":"https://todo-backend-sinatra.herokuapp.com/todos/ec459fb3-f403-46bf-8e53-557e34e291b4"}
```


## Interaction 32: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 19 Aug 2020 11:59:13 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/c9e296d3-7e73-4e3e-903b-14365f401e3d
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"c9e296d3-7e73-4e3e-903b-14365f401e3d","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/c9e296d3-7e73-4e3e-903b-14365f401e3d","url":"https://todo-backend-sinatra.herokuapp.com/todos/c9e296d3-7e73-4e3e-903b-14365f401e3d"}
```
