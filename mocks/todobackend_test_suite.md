## Interaction 0: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:18 GMT
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


## Interaction 1: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:19 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/b90a209d-d2f2-4a8a-a86c-06c4fe21df62
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"b90a209d-d2f2-4a8a-a86c-06c4fe21df62","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/b90a209d-d2f2-4a8a-a86c-06c4fe21df62","url":"https://todo-backend-sinatra.herokuapp.com/todos/b90a209d-d2f2-4a8a-a86c-06c4fe21df62"}
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:20 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:21 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:22 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:23 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:25 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/ece1f8e1-bd6c-43a1-a07d-73b01b86abe2
content-length: 276
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"walk the dog","uid":"ece1f8e1-bd6c-43a1-a07d-73b01b86abe2","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/ece1f8e1-bd6c-43a1-a07d-73b01b86abe2","url":"https://todo-backend-sinatra.herokuapp.com/todos/ece1f8e1-bd6c-43a1-a07d-73b01b86abe2"}
```


## Interaction 7: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:26 GMT
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
[{"uid":"ece1f8e1-bd6c-43a1-a07d-73b01b86abe2","title":"walk the dog","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/ece1f8e1-bd6c-43a1-a07d-73b01b86abe2","url":"https://todo-backend-sinatra.herokuapp.com/todos/ece1f8e1-bd6c-43a1-a07d-73b01b86abe2"}]
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:27 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:28 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/298a7c0b-8908-4bf7-9baa-115956e90d8e
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"298a7c0b-8908-4bf7-9baa-115956e90d8e","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/298a7c0b-8908-4bf7-9baa-115956e90d8e","url":"https://todo-backend-sinatra.herokuapp.com/todos/298a7c0b-8908-4bf7-9baa-115956e90d8e"}
```


## Interaction 10: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:29 GMT
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
[{"uid":"298a7c0b-8908-4bf7-9baa-115956e90d8e","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/298a7c0b-8908-4bf7-9baa-115956e90d8e","url":"https://todo-backend-sinatra.herokuapp.com/todos/298a7c0b-8908-4bf7-9baa-115956e90d8e"}]
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:31 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:31 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/489cee6c-90e2-4ffc-9f01-2902f51acee7
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"489cee6c-90e2-4ffc-9f01-2902f51acee7","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/489cee6c-90e2-4ffc-9f01-2902f51acee7","url":"https://todo-backend-sinatra.herokuapp.com/todos/489cee6c-90e2-4ffc-9f01-2902f51acee7"}
```


## Interaction 13: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:33 GMT
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
[{"uid":"489cee6c-90e2-4ffc-9f01-2902f51acee7","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/489cee6c-90e2-4ffc-9f01-2902f51acee7","url":"https://todo-backend-sinatra.herokuapp.com/todos/489cee6c-90e2-4ffc-9f01-2902f51acee7"}]
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:34 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:35 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/18bf01b5-4b9f-4588-82e2-78ff0eefe876
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"18bf01b5-4b9f-4588-82e2-78ff0eefe876","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/18bf01b5-4b9f-4588-82e2-78ff0eefe876","url":"https://todo-backend-sinatra.herokuapp.com/todos/18bf01b5-4b9f-4588-82e2-78ff0eefe876"}
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:37 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:39 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/129448d4-c8c9-4a9e-91dd-cc38ed6316c9
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"129448d4-c8c9-4a9e-91dd-cc38ed6316c9","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/129448d4-c8c9-4a9e-91dd-cc38ed6316c9","url":"https://todo-backend-sinatra.herokuapp.com/todos/129448d4-c8c9-4a9e-91dd-cc38ed6316c9"}
```


## Interaction 18: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:38 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/68c4ef8d-ffa4-4636-adc8-ec3742bf103c
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"68c4ef8d-ffa4-4636-adc8-ec3742bf103c","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/68c4ef8d-ffa4-4636-adc8-ec3742bf103c","url":"https://todo-backend-sinatra.herokuapp.com/todos/68c4ef8d-ffa4-4636-adc8-ec3742bf103c"}
```


## Interaction 19: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:39 GMT
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
[{"uid":"68c4ef8d-ffa4-4636-adc8-ec3742bf103c","title":"todo the first","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/68c4ef8d-ffa4-4636-adc8-ec3742bf103c","url":"https://todo-backend-sinatra.herokuapp.com/todos/68c4ef8d-ffa4-4636-adc8-ec3742bf103c"},{"uid":"129448d4-c8c9-4a9e-91dd-cc38ed6316c9","title":"todo the second","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/129448d4-c8c9-4a9e-91dd-cc38ed6316c9","url":"https://todo-backend-sinatra.herokuapp.com/todos/129448d4-c8c9-4a9e-91dd-cc38ed6316c9"}]
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:41 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:42 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/a6efe2f6-1866-48ee-93ec-21b746929698
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"a6efe2f6-1866-48ee-93ec-21b746929698","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/a6efe2f6-1866-48ee-93ec-21b746929698","url":"https://todo-backend-sinatra.herokuapp.com/todos/a6efe2f6-1866-48ee-93ec-21b746929698"}
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:44 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:45 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/d94101b2-e182-456d-a229-1b6538579c02
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"d94101b2-e182-456d-a229-1b6538579c02","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/d94101b2-e182-456d-a229-1b6538579c02","url":"https://todo-backend-sinatra.herokuapp.com/todos/d94101b2-e182-456d-a229-1b6538579c02"}
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:48 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:49 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/c42a5517-9eda-4940-826d-960fead71f45
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"c42a5517-9eda-4940-826d-960fead71f45","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/c42a5517-9eda-4940-826d-960fead71f45","url":"https://todo-backend-sinatra.herokuapp.com/todos/c42a5517-9eda-4940-826d-960fead71f45"}
```


## Interaction 26: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:51 GMT
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
[{"uid":"c42a5517-9eda-4940-826d-960fead71f45","title":"changed title","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/c42a5517-9eda-4940-826d-960fead71f45","url":"https://todo-backend-sinatra.herokuapp.com/todos/c42a5517-9eda-4940-826d-960fead71f45"}]
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:52 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:54 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/aced6912-d46f-4c1e-b603-1cec0a603c27
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"aced6912-d46f-4c1e-b603-1cec0a603c27","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/aced6912-d46f-4c1e-b603-1cec0a603c27","url":"https://todo-backend-sinatra.herokuapp.com/todos/aced6912-d46f-4c1e-b603-1cec0a603c27"}
```


## Interaction 29: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Tue, 08 Sep 2020 03:44:56 GMT
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
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:44:58 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/a5a124e9-efff-498e-aede-367b4133b14e
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"a5a124e9-efff-498e-aede-367b4133b14e","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/a5a124e9-efff-498e-aede-367b4133b14e","url":"https://todo-backend-sinatra.herokuapp.com/todos/a5a124e9-efff-498e-aede-367b4133b14e"}
```


## Interaction 31: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:45:00 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/13ac698f-1662-439a-9d5e-23d54b6013d4
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"13ac698f-1662-439a-9d5e-23d54b6013d4","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/13ac698f-1662-439a-9d5e-23d54b6013d4","url":"https://todo-backend-sinatra.herokuapp.com/todos/13ac698f-1662-439a-9d5e-23d54b6013d4"}
```


## Interaction 32: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: todo-backend-sinatra.herokuapp.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
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
date: Tue, 08 Sep 2020 03:45:01 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/8c066bf9-d7c8-4d8f-a5d3-057f1b29bc8f
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"8c066bf9-d7c8-4d8f-a5d3-057f1b29bc8f","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/8c066bf9-d7c8-4d8f-a5d3-057f1b29bc8f","url":"https://todo-backend-sinatra.herokuapp.com/todos/8c066bf9-d7c8-4d8f-a5d3-057f1b29bc8f"}
```
