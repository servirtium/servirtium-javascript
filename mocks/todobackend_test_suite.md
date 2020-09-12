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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Sat, 12 Sep 2020 08:51:00 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 842
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"a26a4ebb-e7f7-4c58-b2cd-409832be9de5","title":"blah","order":523,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/a26a4ebb-e7f7-4c58-b2cd-409832be9de5","url":"https://todo-backend-sinatra.herokuapp.com/todos/a26a4ebb-e7f7-4c58-b2cd-409832be9de5"},{"uid":"2a985200-d3e1-4526-bd31-bebb2f0a8e4e","title":"blah","order":95,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/2a985200-d3e1-4526-bd31-bebb2f0a8e4e","url":"https://todo-backend-sinatra.herokuapp.com/todos/2a985200-d3e1-4526-bd31-bebb2f0a8e4e"},{"uid":"b24dec5d-daca-440b-bf6f-80dc712e9c92","title":"blah","order":95,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/b24dec5d-daca-440b-bf6f-80dc712e9c92","url":"https://todo-backend-sinatra.herokuapp.com/todos/b24dec5d-daca-440b-bf6f-80dc712e9c92"}]
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:03 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/af1a2b39-6175-4ea9-9723-c448be8ae29c
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"af1a2b39-6175-4ea9-9723-c448be8ae29c","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/af1a2b39-6175-4ea9-9723-c448be8ae29c","url":"https://todo-backend-sinatra.herokuapp.com/todos/af1a2b39-6175-4ea9-9723-c448be8ae29c"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:04 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:06 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:07 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:09 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:11 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/daeb79d1-d9cf-4bf3-8db9-c4ccbbd656de
content-length: 276
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"walk the dog","uid":"daeb79d1-d9cf-4bf3-8db9-c4ccbbd656de","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/daeb79d1-d9cf-4bf3-8db9-c4ccbbd656de","url":"https://todo-backend-sinatra.herokuapp.com/todos/daeb79d1-d9cf-4bf3-8db9-c4ccbbd656de"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:12 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"daeb79d1-d9cf-4bf3-8db9-c4ccbbd656de","title":"walk the dog","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/daeb79d1-d9cf-4bf3-8db9-c4ccbbd656de","url":"https://todo-backend-sinatra.herokuapp.com/todos/daeb79d1-d9cf-4bf3-8db9-c4ccbbd656de"}]
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:14 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:16 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/4b398a51-e9ff-4092-9a93-29d855c3e932
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"4b398a51-e9ff-4092-9a93-29d855c3e932","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/4b398a51-e9ff-4092-9a93-29d855c3e932","url":"https://todo-backend-sinatra.herokuapp.com/todos/4b398a51-e9ff-4092-9a93-29d855c3e932"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:18 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"4b398a51-e9ff-4092-9a93-29d855c3e932","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/4b398a51-e9ff-4092-9a93-29d855c3e932","url":"https://todo-backend-sinatra.herokuapp.com/todos/4b398a51-e9ff-4092-9a93-29d855c3e932"}]
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:19 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:21 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/b28fbdc9-18c2-4465-9bc0-2a2ab6cc920a
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"b28fbdc9-18c2-4465-9bc0-2a2ab6cc920a","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/b28fbdc9-18c2-4465-9bc0-2a2ab6cc920a","url":"https://todo-backend-sinatra.herokuapp.com/todos/b28fbdc9-18c2-4465-9bc0-2a2ab6cc920a"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:23 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"b28fbdc9-18c2-4465-9bc0-2a2ab6cc920a","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/b28fbdc9-18c2-4465-9bc0-2a2ab6cc920a","url":"https://todo-backend-sinatra.herokuapp.com/todos/b28fbdc9-18c2-4465-9bc0-2a2ab6cc920a"}]
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:25 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:26 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/de3b22cb-0bfa-4016-aa85-d432454dd77c
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"de3b22cb-0bfa-4016-aa85-d432454dd77c","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/de3b22cb-0bfa-4016-aa85-d432454dd77c","url":"https://todo-backend-sinatra.herokuapp.com/todos/de3b22cb-0bfa-4016-aa85-d432454dd77c"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:29 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:32 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/32b9a3fc-d560-42ae-89ec-cb096ecaeb1e
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"32b9a3fc-d560-42ae-89ec-cb096ecaeb1e","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/32b9a3fc-d560-42ae-89ec-cb096ecaeb1e","url":"https://todo-backend-sinatra.herokuapp.com/todos/32b9a3fc-d560-42ae-89ec-cb096ecaeb1e"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:32 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/e4c5df54-bf00-41fe-86f4-79fc916726ea
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"e4c5df54-bf00-41fe-86f4-79fc916726ea","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/e4c5df54-bf00-41fe-86f4-79fc916726ea","url":"https://todo-backend-sinatra.herokuapp.com/todos/e4c5df54-bf00-41fe-86f4-79fc916726ea"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:34 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 580
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"32b9a3fc-d560-42ae-89ec-cb096ecaeb1e","title":"todo the first","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/32b9a3fc-d560-42ae-89ec-cb096ecaeb1e","url":"https://todo-backend-sinatra.herokuapp.com/todos/32b9a3fc-d560-42ae-89ec-cb096ecaeb1e"},{"uid":"e4c5df54-bf00-41fe-86f4-79fc916726ea","title":"todo the second","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/e4c5df54-bf00-41fe-86f4-79fc916726ea","url":"https://todo-backend-sinatra.herokuapp.com/todos/e4c5df54-bf00-41fe-86f4-79fc916726ea"}]
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:36 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:38 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/ccc9db2b-321f-4150-ac54-ce5bb3661741
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"ccc9db2b-321f-4150-ac54-ce5bb3661741","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/ccc9db2b-321f-4150-ac54-ce5bb3661741","url":"https://todo-backend-sinatra.herokuapp.com/todos/ccc9db2b-321f-4150-ac54-ce5bb3661741"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:41 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:43 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/7a4986bb-36a3-45d1-89f0-fc18160723dd
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"7a4986bb-36a3-45d1-89f0-fc18160723dd","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/7a4986bb-36a3-45d1-89f0-fc18160723dd","url":"https://todo-backend-sinatra.herokuapp.com/todos/7a4986bb-36a3-45d1-89f0-fc18160723dd"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:47 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:47 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/98738a65-6413-4adb-87fb-22af62c4ee3e
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"98738a65-6413-4adb-87fb-22af62c4ee3e","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/98738a65-6413-4adb-87fb-22af62c4ee3e","url":"https://todo-backend-sinatra.herokuapp.com/todos/98738a65-6413-4adb-87fb-22af62c4ee3e"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:50 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"98738a65-6413-4adb-87fb-22af62c4ee3e","title":"changed title","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/98738a65-6413-4adb-87fb-22af62c4ee3e","url":"https://todo-backend-sinatra.herokuapp.com/todos/98738a65-6413-4adb-87fb-22af62c4ee3e"}]
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:52 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:53 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/f570a473-3ce7-49ba-afd9-ef931487c1f7
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"f570a473-3ce7-49ba-afd9-ef931487c1f7","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/f570a473-3ce7-49ba-afd9-ef931487c1f7","url":"https://todo-backend-sinatra.herokuapp.com/todos/f570a473-3ce7-49ba-afd9-ef931487c1f7"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:57 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:51:58 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/1e216e54-62f1-4e36-8731-a56d52166569
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"1e216e54-62f1-4e36-8731-a56d52166569","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/1e216e54-62f1-4e36-8731-a56d52166569","url":"https://todo-backend-sinatra.herokuapp.com/todos/1e216e54-62f1-4e36-8731-a56d52166569"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:52:00 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/4d732b07-085c-4dc5-b725-c81f1c7469f6
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"4d732b07-085c-4dc5-b725-c81f1c7469f6","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/4d732b07-085c-4dc5-b725-c81f1c7469f6","url":"https://todo-backend-sinatra.herokuapp.com/todos/4d732b07-085c-4dc5-b725-c81f1c7469f6"}
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
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
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
date: Sat, 12 Sep 2020 08:52:02 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/0be22c78-7070-46c4-84f5-9042fe70040d
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"0be22c78-7070-46c4-84f5-9042fe70040d","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/0be22c78-7070-46c4-84f5-9042fe70040d","url":"https://todo-backend-sinatra.herokuapp.com/todos/0be22c78-7070-46c4-84f5-9042fe70040d"}
```
